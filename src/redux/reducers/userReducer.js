const initialState ={
    users:[
        {id:"1", userId:"11281",name:"yogesh",userCode:"yogi"},
        {id:"2", userId:"11282",name:"ravi",userCode:"rav122"},
        {id:"3", userId:"11283",name:"ganesh",userCode:"gh"},
        {id:"4", userId:"11284",name:"Ashok",userCode:"ash56"},
        {id:"5", userId:"11285",name:"swaroop",userCode:"swa34"},
        {id:"6", userId:"11286",name:"pavan",userCode:"van88"},
        {id:"7", userId:"11287",name:"vivek",userCode:"viv76"},
        {id:"8", userId:"11288",name:"sasi",userCode:"sas123"},
        {id:"9", userId:"11289",name:"chaitanya",userCode:"chaitu"},
        {id:"10", userId:"11290",name:"lakshman",userCode:"man45"},
        {id:"11", userId:"11291",name:"venkatesh",userCode:"venky765"},
        {id:"12", userId:"11292",name:"mahesh",userCode:"mah66"},
    ]
}

const userReducer = (state=initialState,action) =>{
    switch(action.type){
        case 'ADD_USER':
            // console.log(action.payload)
            return{
                ...state,
                users:[...state.users,action.payload]
            }
        case 'EDIT_USER':
            state.users.map(user => {
                if(action.payload.userId === user.userId){
                    user.userId = action.payload.userId
                    user.name = action.payload.name
                    user.userCode = action.payload.userCode
                }
            })
            return{
                ...state,
                users:[...state.users]
                
            }
        case 'DELETE_USER':
            return{
                ...state,
                users:state.users.filter(user => {
                    return action.payload !== user.id
                })
            }
        default: return state
    }
}

export default userReducer;
// let editedUser = users.map(user => {
//     if(user.userId === targetedUser.state.userId){
//       user.userId = userId
//       user.name = userName
//       user.userCode = userCode
//     }
//   })