import Button from '@mui/material/Button';
import React from 'react'
import {BiPlusMedical} from 'react-icons/bi'
function AddButton() {
    return (
        <Button variant="contained" endIcon={<BiPlusMedical />}>
            Add
        </Button>
    )
}

export default AddButton
