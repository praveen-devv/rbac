import Button from '@mui/material/Button';
import React from 'react'
import {BiPlusMedical} from 'react-icons/bi'
function AddButton({onClick}) {
    return (
        <Button variant="contained" onClick={onClick} endIcon={<BiPlusMedical />}>
            Add
        </Button>
    )
}

export default AddButton
