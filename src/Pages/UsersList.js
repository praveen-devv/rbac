import React,{useState,useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {  makeStyles, Box, Typography,Modal, Avatar} from '@material-ui/core'
// import {Button,Stack} from '@mui/material';
// import {Link} from 'react-router-dom'
// import { headCells, usersData } from './UsersData';
// import {MdEdit,MdDelete} from 'react-icons/md'
// import { red } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import MTable from '../components/MTable';
import {deleteUser} from '../redux/actions/userActions'

const useStyles = makeStyles((theme) => ({
    usersList:{
      height:'calc(100vh-60px)',
      position: 'relative',
      left:'68px',
      width: 'calc(100% - 68px)',
      padding: '30px'
    }
}));
//modal
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

// const Item = styled(Paper)(({ theme }) => ({
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));


// const Transition = React.forwardRef(function Transition(props, ref) {
//     return <Slide direction="down" ref={ref} {...props} />;
//   });

// if we want random colors for avatars
function randomColor() {
    let hex = Math.floor(Math.random() * 0xFFFFFF);
    let color = "#" + hex.toString(16);
    return color;
  }
let userDetails = {}
const UsersList = () => {
    const users = useSelector(state => state.users.users)
    const toogleState = useSelector(state => state.toogle.toogleState) 
    const dispatch = useDispatch()
    let navigate = useNavigate()
    const classes = useStyles();

    
    const [open, setOpen] = useState(false);
    // const handleOpen = () => setOpen(true);
    const handleOpen = (user) => {
        setOpen(true)
        userDetails = user
    }
    const handleClose = () => setOpen(false);

    const headCells = [
        {id: 'userId', label: 'User Id'},
        {id: 'name', label: 'Name'},
        {id: 'userCode', label: 'User Code'}
    ]
    const deleteUserHandler = (id) => {
        dispatch(deleteUser(id))
        // console.log(id)
    }
    const editUserHandler = (user) => {
            // console.log(user)
            navigate('/user/edit',{ state: user })
          
    }
    useEffect(() => {
        let cls = document.getElementsByClassName('view-usersList')[0];
        if (toogleState) {
            cls.style.left = "260px";
            cls.style.transition = "all 0.5s ease";
            cls.style.width = "calc(100% - 260px)";
        }
        if (!toogleState) {
            cls.style.left = "68px"
            cls.style.width = "calc(100% - 68px)";
        }
    }, [toogleState])
    const addUser = () =>{
        navigate('/user/create')
      }
    //   console.log(userDetails);
    return (
        <div className={`view-usersList ${classes.usersList}`}>
            <MTable columns={headCells} datas={users} add={addUser}  edit={editUserHandler} deleteAction={deleteUserHandler} searchLabel="Users" handleOpen={handleOpen}/>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                    User Details:
                    </Typography>
                    {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    </Typography> */}
                        {/* {console.log(userDetails)} */}
                        {/* <Avatar>{userDetails.name[0]}</Avatar> */}
                        {/* { `${userDetails.name.split(' ')[0][0]}${userDetails.name.split(' ')[1][0]}`} */}
                        <Avatar style={{backgroundColor: randomColor()}}></Avatar>
                   <Typography>User Id - {userDetails.userId}</Typography>
                   <Typography>User Name - {userDetails.name}</Typography>
                   <Typography>User Code - {userDetails.userCode}</Typography>
                </Box>
            </Modal>
        </div>
    )
}

export default UsersList