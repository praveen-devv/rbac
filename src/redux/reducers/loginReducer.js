const initialState = {
    userCredentials : [{username:'admin',password:'12345'}]
}

const loginReducer = (state=initialState,action) =>{
    switch(action.type){
        case 'ADD_USER':
            console.log(action.payload)
            return{
                ...state,
                userCredentials:[...state.userCredentials,action.payload]
            }
        default: return state
    }
}

export default loginReducer; 