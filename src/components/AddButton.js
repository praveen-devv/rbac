import React from 'react'
import {BiPlusMedical} from 'react-icons/bi'
function AddButton() {
    return (
        <div>
            <button type="button" className="btn btn-primary">Add<BiPlusMedical style={{margin:'5px 0px 10px 5px'}}/></button>
        </div>
    )
}

export default AddButton
