import React from 'react'
import { useState } from 'react';
import { addData } from '../App/stdDataSlice';
import { useDispatch } from 'react-redux'
function Adddata() {
  const [newData, setNewData] = useState({})

const dispatch =useDispatch()
  const handleAddItems=(e)=>{
    e.preventDefault();
    var ids = document.getElementById('inputEmail4').value
    var names = document.getElementById('inputPassword4').value
    var emailAdd =document.getElementById('inputAddress').value
    var contact =document.getElementById('inputAddress2').value

      
      newData.id=ids
      newData.name=names
      newData.email=emailAdd
      newData.phone=contact
      dispatch(addData(newData))
      setNewData({})

  }
  
  return (
    <div className='container-fluid'>
   
    <div className='row justify-content-center'>
     <div className='col-sm-6 text-success font-weight-bold bg-dark my-5'>
     <form className="row justify-content-center font-weight-bold p-4">
  <div className="col-md-6">
    <label htmlFor="inputEmail4" className="form-label">ID</label>
    <input type="text" className="form-control" id="inputEmail4"/>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputPassword4" className="form-label font-weight-bold">Name</label>
    <input type="text" className="form-control" id="inputPassword4"/>
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputAddress" placeholder="abcd@gmail.com"/>
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress2" className="form-label"> Phone</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="040-4200-1111"/>
  </div>
 
  

  
  <div className="col-12 mt-4 ">
    <button type="submit" className="btn btn-primary px-8 alert-success"  onClick={handleAddItems}>Add</button>
  </div>
</form>

     </div> 

      </div>


     
    </div>
  )
}

export default Adddata