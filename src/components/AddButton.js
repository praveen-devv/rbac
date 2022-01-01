import React from 'react'
import {BiPlusMedical} from 'react-icons/bi'
function AddButton({onClick,className}) {
    return (

        <Button className={className} variant="contained" onClick={onClick} endIcon={<BiPlusMedical />}>
            Add
        </Button>
    )
}

export default AddButton
