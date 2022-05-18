import logo from './logo.svg';
import './App.css';
import AllData from './Components/AllData';
import { Route,Routes } from 'react-router';
import AllStudentData from './RoutesFold/AllStudentData';
import UniqueData from './RoutesFold/UniqueData';
import UpdateData from './RoutesFold/UpdateData';
import Adddata from './RoutesFold/Adddata';
import DeleteData from './RoutesFold/DeleteData';
function App() {
  return (
    <div className="App container-fluid">
       <AllData />
    <Routes>
      <Route path="/" element={<AllStudentData />}/>
      <Route path="unqdata" element={<UniqueData/>}/>
      <Route path="updateData" element={<UpdateData/>}/>
      <Route path="adddata" element={<Adddata/>}/>
      <Route path="deletedata" element={<DeleteData/>}/>
    </Routes>
    </div>
  );
}

export default App;
