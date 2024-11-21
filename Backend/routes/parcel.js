const express = require('express');
const router = express.Router();
const { 
    createParcel, 
    updateParcel, 
    getOneParcel, 
    getUserParcels, 
    getAllParcels, 
    deleteParcel 
} = require('../controllers/parcel');

// Create a new parcel
router.post("/",createParcel);  

// Get all parcels
router.get("/", getAllParcels);
  
// Update a parcel
router.put("/:id", updateParcel);  

// Get one parcel
router.get("/find/:id", getOneParcel);  

// Get user's parcels
router.post("/me", getUserParcels);  

// Delete a parcel
router.delete("/:id", deleteParcel);  

module.exports = router;
