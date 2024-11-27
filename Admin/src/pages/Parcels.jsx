import { DataGrid  } from '@mui/x-data-grid';
import { FaTrash } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Parcels = () => {
  const columns = [
    { field: 'id', headerName: ' ID', width: 90 },
    { field: 'Sendername', headerName: 'Sendername', width: 150 },
    { field: 'recipientname', headerName: 'recipientname', width: 130 },
    { field: 'from', headerName: 'from', width: 130 },
    { field: 'to', headerName: 'to', width: 150 },  
    { field: 'cost', headerName: 'cost ($)', type: 'number', width:150 },
    { field: 'edit', headerName: 'Edit',width:150 ,
      rendercell:()=>{
        return(
          <>
          <button className='bg-teal-500 text-white cursor-pointer w-[70px]'>Edit</button>
          </>
        )
      }
    },

    { 
      field: 'delete', 
      headerName: 'Delete',
       width:150 ,
      rendercell:()=>{
        return(
          <>
          < FaTrash />
          </>
        )
      }
    },

  ];
  const rows   = [
    { id: 1, 
      SenderName: 'John Doe',
       recipientName: 'Jane Smith', 
       from: 'NewYork',
        to: 'london',
         weight:2.5,
          cost:25
         },
    { id: 2,
       Sendername: 'Nathasha',
       recipientname: ' Wilson',
        from: 'chicago',
         to: 'Europe',
         weight:1.5,
          cost:15 
        },
    { id: 3,
       Sendername: 'Tony', 
      recipientname: ' Peter', 
      from: 'Paris',
       to: 'Finland',
        weight:5, 
          cost:30
         },
    { id: 4,
       Sendername: 'Diana', 
       recipientname: 'Jane ', 
       from: 'London',
        to: 'NewYork',
         weight:0.5,
          cost:50
         },
    { id: 5,
       Sendername: 'Stark', 
       recipientname: ' Thomas', 
       from: 'Switzerland', 
       to: 'Chicago',
        weight:4.5, 
        cost:60 
      },
    { id: 6,
       Sendername: ' Doe',
       recipientname: ' Alice', 
       from: 'NewYork', 
       to: 'london',
        weight:6.5,
         cost:55 
        },
    { id: 7,
       Sendername: 'John ', 
       recipientname: ' Scott',
        from: 'Africa', 
        to: 'Uganda',
         weight:3.5, 
         cost:40
         },
    { id: 8,
       Sendername: 'Prince',
        recipientname: 'Lang', 
        from: 'Oman',
         to: 'Dubai',
         weight:3.5,
          cost:40
         },
  ];
  
  
  return (
    <div className="m-[30px] bg-[#fff] p-[20px]">
      <div className="flex items-center justify-between">
        <h1 className="m-[20px] text-[20px]">All Parcels</h1>
       <Link to="/newparcel">
       <button className="bg-[#1e1e1e] text-white p-[10px] cursor-pointer">
          New Parcel
        </button>
       </Link>
          </div>
          <DataGrid 
          rows={rows} 
          columns={columns}
          checkboxSelection
           />
         </div>        
  )
}

export default Parcels