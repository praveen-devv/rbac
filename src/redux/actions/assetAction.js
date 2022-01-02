export const deleteAsset = (id) => {
    return{
        type:'Delete_Asset',
        payload:id
    }
}

export const addAsset = (asset) => {
    return{
        type:'Add_Asset',
        payload:asset
    }
}