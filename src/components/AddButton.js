import React from 'react'
import {BiPlusMedical} from 'react-icons/bi'
import {Button} from '@material-ui/core'
function AddButton({onClick,className}) {
    return (

        <Button className={className} variant="contained" onClick={onClick} endIcon={<BiPlusMedical />}>
            Add
        </Button>
    )
}

export default AddButton
