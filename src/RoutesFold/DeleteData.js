import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteData } from '../App/stdDataSlice'
function DeleteData() {
  const dispatch=useDispatch()
  const handleDelete=()=>{
    var deleteVal=document.getElementById('basic-url').value
    dispatch(deleteData(deleteVal))
  }
  return (
    <div className='container-fluid'>
      <div className='row justify-content-center'>
      <div className="col-6  w-50 input-group mt-3">
  <span className="input-group-text" id="basic-addon3">Enter ID</span>
  <input type="text" className="form-control" id="basic-url" /><button className='btn btn-primary' onClick={handleDelete}>Delete</button>
</div>

      </div>
       
    </div>
  )
}

export default DeleteData