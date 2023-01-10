import {Link} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import { deleteUser } from "../actions";

function UserList()
{
  const users = useSelector(state => state.users)
  const dispatch = useDispatch();

  const handleDelete = (id) => {
      dispatch(deleteUser(id))
  }
  return(
      <div>
          <p>
            <Link to='/addUser'><button>Add User</button></Link>
            <Link to='/filterUser'><button>Filter User</button></Link>
          </p>
          <table>
              <thead>
                  <tr>
                      <th>ID</th>
                      <th>Nom</th>
                      <th>Prenom</th>
                      <th>Email</th>
                      <th>Ville</th>
                      <th>Action</th>
                  </tr>
              </thead>
              <tbody>
                  {
                    users.map ((user,index) =>
                    {
                      return(
                        <tr key={index}>
                           <td>{user.id}</td>
                           <td>{user.nom}</td>
                           <td>{user.prenom}</td>
                           <td>{user.email}</td>
                           <td>{user.ville}</td>
                        <td>
                            <Link to={`/updateUser/${user.id}`}><button>Edit</button></Link>
                            <Link><button onClick={() =>handleDelete(user.id)}>Delete</button></Link>
                        </td>
                    </tr>
                      )
                    } 
                )}
                 
              </tbody>
          </table>
      </div>
  )

}
export default UserList;