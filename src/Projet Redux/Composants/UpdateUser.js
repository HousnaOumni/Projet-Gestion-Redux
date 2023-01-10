
import {useState} from "react";
import {useDispatch,useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import {updateUser} from '../actions';
import {useParams} from "react-router-dom";

function UpdateUser(){
   const {id} = useParams();
   const user = useSelector(data => data.users.find(u => u.id ===parseInt(id)))

   const dispatch = useDispatch();
   const navigate = useNavigate();
   const villes = useSelector(state => state.villes)

   const [nom,setNom] = useState(user.nom);
   const [prenom,setPrenom] = useState(user.prenom);
   const [email,setEmail] = useState(user.email);
   const [ville,setVille] = useState(user.ville);

   const handleClick = () => {
            dispatch(updateUser({
                id: id,
                nom:nom,
                prenom:prenom,
                email:email,
                ville : ville
            }))
            navigate('/')
   }
   return(
     <form onSubmit={(e) => e.preventDefault()}>
        <label>Nom</label>
        <input type="text" value={nom} onChange={e => setNom(e.target.value)}/>
        <label>Prenom</label>
        <input type="text" value={prenom} onChange={e => setPrenom(e.target.value)}/>
        <label>Email</label>
        <input type="email"value={email} onChange={e => setEmail(e.target.value)} />
        <label>Filter Par Ville</label>
        <select value={ville} onChange={(e)=> setVille(e.target.value)}>
          {
            villes.map((ville,i) => 
                          <option key={i} value={ville.id}>{ville.nom}</option>)
          }
        </select>
         <button onClick={handleClick}>Enregistrer Info</button>
     </form>
 )

}
export default UpdateUser;