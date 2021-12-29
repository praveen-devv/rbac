export const addRole = (role) =>{
    return{
        type:'ADD_ROLE',
        payload:role
    }
}  

export const deleteRole = (id) =>{
    return{
        type:'DELETE_ROLE',
        payload:id
    }
}