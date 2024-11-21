const Parcel = require('../models/Parcel');

// Create a new parcel
const createParcel = async (req, res) => {
    try {
        const newParcel = new Parcel(req.body);
        const parcel = await newParcel.save();
        res.status(201).json(parcel);
    } catch (error) {
        res.status(500).json(error);
    }
};

// Get all parcels
const getAllParcels = async (req, res) => {
    try {
        const parcels = await Parcel.find().sort({ createdAt: -1 });
        res.status(200).json(parcels);
    } catch (error) {
        res.status(500).json(error);
    }
};

// Update a parcel
const updateParcel = async (req, res) => {
    try {
        const parcel = await Parcel.findById(req.params.id);
        if (!parcel) {
            return res.status(404).json({ message: "Parcel not found" });
        }
        // Update the parcel (add your update logic here, for example)
        parcel.status = req.body.status || parcel.status;
        await parcel.save();
        res.status(200).json(parcel);
    } catch (error) {
        res.status(500).json(error);
    }
};

// Get one parcel
const getOneParcel = async (req, res) => {
    try {
        const parcel = await Parcel.findById(req.params.id);
        if (!parcel) {
            return res.status(404).json({ message: "Parcel not found" });
        }
        res.status(200).json(parcel);
    } catch (error) {
        res.status(500).json(error);
    }
};

// Get user's parcels
const getUserParcels = async (req, res) => {
    try {
        const parcels = await Parcel.find({ Senderemail: req.body.email }).sort({ createdAt: -1 });
        res.status(200).json(parcels);
    } catch (error) {
        res.status(500).json(error);
    }
};

// Delete a parcel
const deleteParcel = async (req, res) => {
    try {
        const parcel = await Parcel.findById(req.params.id);
        if (!parcel) {
            return res.status(404).json({ message: "Parcel not found" });
        }
        await parcel.remove();
        res.status(200).json("Parcel has been deleted successfully");
    } catch (error) {
        res.status(500).json(error);
    }
};

module.exports = {
    createParcel,
    updateParcel,
    getOneParcel,
    getUserParcels,
    getAllParcels,
    deleteParcel
};
