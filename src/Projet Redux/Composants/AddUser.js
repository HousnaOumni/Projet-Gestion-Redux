import {useState} from "react";
import {useDispatch,useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import {addUser} from '../actions';


function AddUser(){
   const count = useSelector(data => data.users.length)
   const dispatch = useDispatch();
   const navigate = useNavigate();
   
   const villes = useSelector(state => state.villes);
   const [nom,setNom] = useState();
   const [prenom,setPrenom] = useState();
   const [email,setEmail] = useState();
   const [ville,setVille] = useState();

   const handleClick = () => {
            dispatch(addUser({
                id: count + 1,
                nom:nom,
                prenom:prenom,
                email:email,
                ville:ville
            }))
           navigate('/')
   }
   return(
     <form>
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
         <button onClick={handleClick}>Enregistrer</button>
     </form>
 )

}
export default AddUser;