import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { add } from '../App/stdDataSlice'
function AllData() {
  const data1=useSelector((state)=>state)
const dispatch =useDispatch()
  return (
    <div >
 <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    <Link className="navbar-brand" to='/'>Student-Data</Link>
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <Link className="nav-link" to='unqdata'>Unique-Data</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to='adddata'>Add-Data</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to='updatedata'>Update-Data</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link " to='deletedata'>Delete-Data</Link>
      </li>
    </ul>
    
  </div>
</nav>
    </div>
  )
}

export default AllData