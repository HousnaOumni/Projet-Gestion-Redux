import { BrowserRouter,Routes,Route } from "react-router-dom";
import AddUser from "./Projet Redux/Composants/AddUser";
import UpdateUser from "./Projet Redux/Composants/UpdateUser";
import UserList from "./Projet Redux/Composants/UserList";
import FilterUser from "./Projet Redux/Composants/FilterUser";

function App() {
  return (
    <div style={{paddingLeft:40}}>
      <h1>Crud React Redux</h1>
      <BrowserRouter>
         <Routes>
           <Route path='/' element={<UserList />} />
           <Route path='/addUser' element={<AddUser/>} />
           <Route path='/updateUser/:id' element={<UpdateUser/>} />
           <Route path='/filterUser' element={<FilterUser />} />
         </Routes>
     </BrowserRouter>
  </div>
  );
}

export default App;
