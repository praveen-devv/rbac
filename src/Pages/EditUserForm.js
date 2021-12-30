import React,{useState} from 'react'
import { TextField, Button, Paper,Card, FormControl,Input, InputLabel, FormHelperText ,Box} from "@material-ui/core";
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import {editUser} from '../redux/actions/userActions'
import {Alert,Snackbar} from '@mui/material';
import CloseIcon from "@material-ui/icons/Close";
import './AddUserForm.css'

function EditUserForm() {
    const [userId, setUserId] = useState("");
    const [userName, setUserName] = useState("");
    const [userCode, setUserCode] = useState("");
    let navigate = useNavigate()
    const dispatch = useDispatch()
    // material ui snackbar
    // const [open, setOpen] = useState(false);
    // const handleClick = () => {
    //     setOpen(true);
    //   };
    
    //   const handleClose = (event, reason) => {
    //     if (reason === 'clickaway') {
    //       return;
    //     }
    
    //     setOpen(false);
    //   };
    //   // material ui snackbar
    const createUser = () =>{
      dispatch(addUser({"userId":userId,"name":userName,"userCode":userCode}))
      navigate('/user')
  }
    return (
      <Box className='createUser'>
        <Paper  variant="outlined" elevation={8} square className="paper">
            {/* <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
             <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
              User added successfully!
             </Alert>
           </Snackbar> */}
            <form className='form'>
                <h2>Add User</h2>
              <TextField
                onChange={e => setUserId(e.target.value)}
                value={userId}
                label={"Enter User Id"}
                className="textfield"
                /><br></br>
              <TextField
                onChange={e => setUserName(e.target.value)}
                value={userName}
                label={"Enter Name"}
                className="textfield"
              /><br></br>
              <TextField
                onChange={e => setUserCode(e.target.value)}
                value={userCode}
                label={"Enter User Code"}
                className="textfield"
              /><br></br>
                   {/* onClick={handleClick}  snackbar related */}
                <Button sx={{ marginTop:"30px",justifyItems: "center" }} type="submit" variant="contained" color="primary" className='btn' onClick={createUser}>Add</Button>

            </form>
      
        </Paper>
      </Box>
    )
}

export default EditUserForm
// id, user-id, name, user-code