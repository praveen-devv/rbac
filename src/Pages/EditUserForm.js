import React,{useState} from 'react'
import { TextField, Button, Paper ,Box} from "@material-ui/core";
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom';
import {editUser} from '../redux/actions/userActions'
// import {Alert,Snackbar} from '@mui/material';
// import CloseIcon from "@material-ui/icons/Close";
import './EditUserForm.css'

function EditUserForm() {
  let navigate = useNavigate()
    const dispatch = useDispatch()
    const targetedUser = useLocation()
    const users = useSelector(state => state.users.users)
    console.log("targetedUser----->",targetedUser)
    console.log("users------>",users)
    const [userId, setUserId] = useState(targetedUser.state.userId);
    const [userName, setUserName] = useState(targetedUser.state.name);
    const [userCode, setUserCode] = useState(targetedUser.state.userCode);
    
    const editUserHandler = () =>{
     
      // console.log("edittttt",editedUser)
      dispatch(editUser({"userId":userId,"name":userName,"userCode":userCode}))
      navigate('/user')
  }
    return (
      <Box className='editUser'>
        <Paper  variant="outlined" elevation={8} square className="paper">
            <form className='form'>
                <h2>Edit User</h2>
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
                <Button type="submit" variant="contained" color="primary" className='btn' onClick={editUserHandler}>Edit</Button>

            </form>
      
        </Paper>
      </Box>
    )
}

export default EditUserForm
// id, user-id, name, user-code