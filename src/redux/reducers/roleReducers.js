const initialState ={
    roles:[{id:'1',name:'Admin',rolecode:'adm01'},{id:'2',name:'Tenantadmin',rolecode:'tadm01'},{id:'3',name:'PayrollProcessor',rolecode:'pp02'},{id:'4',name:'Employee',rolecode:'emp01'},{id:'5',name:'HR',rolecode:'hr01'}]
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
                    return action.payload!==role.id
                })
            }
        default: return state
    }
}

export default roleReducer;
