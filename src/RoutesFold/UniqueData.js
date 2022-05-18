import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'


function UniqueData() {
  const [uniqEle, setuniqEle] = useState([])
  const uniqueData=useSelector(state=>state)
  const handleUnique=()=>{
    var getIdVal =document.getElementById('basic-url').value
   
    var totalId = uniqueData.value.filter(ele=>{
              return getIdVal== ele.id 
    })
   setuniqEle(totalId)


  }
  return (
    <div className='container'>
    
<div className='row justify-content-center'>
<div className="col-6  w-50 input-group mt-3">
  <span className="input-group-text" id="basic-addon3">Enter ID</span>
  <input type="text" className="form-control" id="basic-url" /><button className='btn btn-primary' onClick={handleUnique}>Click</button>
</div>
<table class="table table-primary table-hover my-2">
    <thead className='table-danger'>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">phone</th>
      </tr>
    </thead>
    <tbody>
     {
       uniqEle.map(ele=>{
        return (
          <tr>
          <th scope="row">{ele.id}</th>
          <td>{ele.name}</td>
          <td>{ele.email}</td>
          <td>{ele.phone}</td>
        </tr>
        )
       })
     }
      </tbody>
      </table>
  
</div>
    </div>
  )
}

export default UniqueData