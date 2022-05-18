import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useState } from 'react'
import { updateData } from '../App/stdDataSlice'
function UpdateData() {

  const [newArr, setNewArr] = useState({id:'',name:'',email:'',phone:''})
  const updateValue= useSelector(state=>state.value)
  const dispatch=useDispatch()
  const handleUpdate=()=>{
    var getId =document.getElementById('basic-url').value
    var updateFilter=updateValue.filter(ele=>{
      return getId==ele.id
    })
    setNewArr(...updateFilter)
  
  }
  const handleUpdateItem =(e)=>{
   e.preventDefault()
   dispatch(updateData(newArr))
  }
  const handleChange=(e)=>{
    const {name,value}=e.target
  var updatingValue={...newArr,[name]:value}
   setNewArr(updatingValue)

  }
  return (
    <div className='container-fluid'>
      {console.log(newArr)}
      <div className='row justify-content-center'>
      <div className="col-6  w-50 input-group mt-3">
  <span className="input-group-text" id="basic-addon3">Enter ID</span>
  <input type="text" className="form-control" id="basic-url" /><button className='btn btn-primary' onClick={handleUpdate}>Click</button>
</div>
<div className='row justify-content-center'>
<div className='col-sm-6 text-success font-weight-bold bg-dark my-5'>
   

        <form className="row justify-content-center font-weight-bold p-4">
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">ID</label>
          <input type="text" className="form-control" id="inputEmail4" name='id' value={newArr.id} readOnly onChange={handleChange}/>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label font-weight-bold">Name</label>
          <input type="text" className="form-control" id="inputPassword4" name='name' value={newArr.name} onChange={handleChange}/>
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">Email</label>
          <input type="email" className="form-control" id="inputAddress" name='email' placeholder="abcd@gmail.com" value={newArr.email} onChange={handleChange}/>
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress2" className="form-label"> Phone</label>
          <input type="text" className="form-control" id="inputAddress2" name='phone' placeholder="040-4200-1111" value={newArr.phone} onChange={handleChange}/>
        </div>
       
        
      
        
        <div className="col-12 mt-4 ">
          <button type="submit" className="btn btn-primary px-8 alert-success"  onClick={handleUpdateItem}>Update</button>
        </div>
      </form>
      
    
     </div> 
</div>
      </div>

    </div>
  )
}

export default UpdateData