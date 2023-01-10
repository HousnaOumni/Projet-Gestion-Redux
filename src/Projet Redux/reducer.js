const initialState = {
    villes:[
        { id:1,nom:"Casablanca"},{ id:2,nom:"Rabat"},{ id:3,nom:"Agadir"}
    ],
    users:[
        {id:1,nom:"Alami",prenom: "Ali",email:"Alami@gmail.com",ville:1},
        {id:2,nom:"Dali",prenom:"Sara",email:"Dali@gmail.com",ville:2},
        {id:3,nom:"Salmi",prenom:"Ahmed",email:"Salmi@gmail.com",ville:3}
    ]
};

const reducer = (state=initialState,action) => {
    switch(action.type){
       case "AddUser" : 
          console.log({...state,users:[...state.users,action.payload]})
          return {...state,users:[...state.users,action.payload]}
       
       case "UpdateUser":
        const user =  state.users.find(u => u.id === parseInt(action.payload.id))
        if(user){
          user.nom = action.payload.nom;
          user.prenom = action.payload.prenom;
          user.email = action.payload.email;
          user.ville = action.payload.ville;
        }
        return state;

       case "DeleteUser":
        return {...state,users:[...state.users.filter(u => u.id !== parseInt(action.payload))]}
       
       case "FilterUser":
           return {...state,usersFilter:[...state.users.filter(u => u.ville === parseInt(action.payload))]}
    
       case "ClearFilterUser":
        return {...state,usersFilter:null}

       default: return state;
    }
}
export default reducer;