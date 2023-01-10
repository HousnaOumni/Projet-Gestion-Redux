export const addUser = (user) =>{
    return{
        type:"AddUser",
        payload:user
    }
}

export const updateUser = (newuser) => {
    return{
        type:"UpdateUser",
        payload:newuser
    }
}

export const deleteUser = (id) => {
    return{
        type:"DeleteUser",
        payload:id
    }
}

export const filterUser = (idVille) => {
    return{
             type : "FilterUser",
             payload:idVille
     }
}

export const clearFilterUser = () => {
    return{
             type : "ClearFilterUser",
      }
}