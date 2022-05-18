import React from 'react'
import { useSelector } from 'react-redux'
function AllStudentData() {
  const data1=useSelector(state=>state)
  return (
    <table className="table table-primary table-hover my-2">
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
       data1.value.map((ele,index)=>{
        return (
          <tr key={index}>
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
  )
}

export default AllStudentData