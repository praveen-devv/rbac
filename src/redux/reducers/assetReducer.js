const initialState = {
    assets : [{'id':'1','name':'smartrepo','encode':'smrt1','entype':'app'}]
}

const assetReducer = (state=initialState,action) => {
    switch(action.type){
        case 'Delete_Asset':
            return{
                ...state,
                assets:state.assets.filter(asset => {
                    return action.payload!==asset.id
                })
            }
        case 'Add_Asset':
            return{
                ...state,
                assets:[...state.assets,action.payload]
            }
        default: return state
    }
}

export default assetReducer