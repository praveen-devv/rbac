const initialState ={
    roles:[{roleid:'1',name:'Admin',rolecode:'adm01'},{roleid:'2',name:'Tenantadmin',rolecode:'tadm01'},{roleid:'3',name:'PayrollProcessor',rolecode:'pp02'},{roleid:'4',name:'Employee',rolecode:'emp01'},{roleid:'5',name:'HR',rolecode:'hr01'}]
}

const roleReducer = (state=initialState,action) =>{
    switch(action.type){
        case 'ADD_ROLE':
            console.log(action.payload)
            return{
                ...state,
                roles:[...state.roles,action.payload]
            }
        
        case 'DELETE_ROLE':
            return{
                ...state,
                roles:state.roles.filter(role => {
                    return action.payload!==role.roleid
                })
            }
        default: return state
    }
}

export default roleReducer;
