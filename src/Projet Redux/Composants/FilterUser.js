import {Link} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import {filterUser,clearFilterUser,deleteUser} from "../actions";
import {useState} from "react";

function FilterUser()
{   
    const villes = useSelector(state => state.villes);
    const users = useSelector(state => state.users)
    const usersFilter = useSelector(state => state.usersFilter);
    const liste = usersFilter ? usersFilter : users;

    const dispatch = useDispatch();
    const [ville,setVille] = useState();

    const handleEnregistrer = () => {
        dispatch(filterUser(ville))
        //handleClear();
    }
    const handleDelete = (id) => {
        dispatch(deleteUser(id))
    } 
    const handleClear = () => {
        dispatch(clearFilterUser(ville))
    }
    return(
          <div style={{paddingLeft:40}}>
            <div>
               <label>Filter Par Ville</label>
               <select value={ville} onChange={(e)=> setVille(e.target.value)}>
                {
                    villes.map((ville,i) => 
                      <option key={i} value={ville.id}>{ville.nom}</option>) 
                }
               </select>
               <button onClick={() => handleEnregistrer()}>Filter</button>
               <button onClick={() => handleClear()}>Vider</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th><th>Nom</th><th>Prenom</th><th>Email</th><th>Ville</th>
                    </tr>
                </thead>
                <tbody>
                    { 
                       liste.map((user,index) => {
                         const vil = villes.find(v => v.id === user.ville)
                         return(
                          <tr key={index}>
                           <td>{user.id}</td>
                           <td>{user.nom}</td>
                           <td>{user.prenom}</td>
                           <td>{user.email}</td>
                           <td>{vil.nom}</td>
                           <td>
                              <Link to={`/updateUser/${user.id}`}><button>Edit</button></Link>
                              <Link><button onClick={() =>handleDelete(user.id)}>Delete</button></Link>
                            </td> 
                         </tr>
                       )}
                     )
                 }
                </tbody>
            </table>
        </div>
  )
}
export default FilterUser;