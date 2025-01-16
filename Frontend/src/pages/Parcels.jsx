import {FaArrowLeft} from "react-icons/fa"
import { Link } from "react-router-dom"
import { DataGrid } from '@mui/x-data-grid';

const parcels = () => {

  const columns = [
    { field: 'id', headerName: ' ID', width: 90 },
    { field: 'senderName', headerName: 'Sender Name', width: 150 },
    { field: 'recipientName', headerName: 'Recipient Name', width: 130 },
    { field: 'from', headerName: 'From', width: 130 },
    { field: 'to', headerName: 'To', width: 150 }, 
    { field: 'cost', headerName: 'Cost ($)', type: 'number', width:150 },
   
    
  ];
  
  const rows =[
    {
      id:1,
      senderName: "Amith Mishra",
      recipientName: "Jane Doe",
      from: "Sydney",
      to: "Minneapolis",
      Weight: 1.5,
      cost: 18.0,
    },
    {
      id:2,
      senderName: "James Doe",
      recipientName: "Chris ",
      from: "Australia",
      to: "Chicago",
      Weight: 5.5,
      cost: 44.0,
    },
    {
      id:3,
      senderName: "Thomas Smith",
      recipientName: "Jane Doe",
      from: "New york",
      to: "polland",
      Weight: 1.4,
      cost: 20.0,
    },
    {
      id:4,
      senderName: "Smith Jack",
      recipientName: "Chris Evans",
      from: "Chicago",
      to: "China",
      Weight: 1.5,
      cost: 54.0,
    },
    {
      id:5,
      senderName: "Amith Mishra",
      recipientName: "Jane Doe",
      from: "Europe",
      to: "london",
      Weight: 1,
      cost: 24.0,
    },

    {
      id:6,
      senderName: "Nathasha",
      recipientName: "Jane Doe",
      from: "America",
      to: "Datlas",
      Weight: 1.5,
      cost: 18.0,
    },
    {
      id:7,
      senderName: "Amith Mishra",
      recipientName: "Jane Doe",
      from: "Neigeria",
      to: "Houstan",
      Weight: 2.5,
      cost: 10.0,
    },
    {
      id:8,
      senderName: "Jackson",
      recipientName: "Jane Doe",
      from: "Uganda",
      to: "Russia",
      Weight: 1.5,
      cost: 50.0,
    },

  ]

  
  return (
    <div className="flex flex-col items-center justify-center mt-[3%] mr-[5%] ml-[5%]">

      <div className="bg-[#fff] h-auto w-[70vw] rounded-md p-[30px]">
        <Link to="/myparcels">
          <FaArrowLeft className="text-[#777] text-[18px] m-2 cursor-pointer" />
        </Link>

        <div className="flex justify-between p-[10px] ">
          <span className="text-[18px] text-[#555]">All parcels</span>
          <span className="font-semibold text-[#555]">Fathimath Naseera</span>
        </div>

        <div className="p-3">
        <DataGrid rows={rows} columns={columns} 
        checkboxSelection
        />
            
        </div>
      </div>     
    </div>
  )
}

export default parcels;