import React,{useState,useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, makeStyles, Paper, TableBody, TableCell, TableRow,TextField,Tooltip} from '@material-ui/core'
import {Button,Stack} from '@mui/material';
import {Link} from 'react-router-dom'
// import { headCells, usersData } from './UsersData';
import {MdEdit,MdDelete} from 'react-icons/md'
import { red } from '@mui/material/colors';
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

// const Item = styled(Paper)(({ theme }) => ({
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));


// const Transition = React.forwardRef(function Transition(props, ref) {
//     return <Slide direction="down" ref={ref} {...props} />;
//   });

const UsersList = () => {
    const users = useSelector(state => state.users.users)
    const toogleState = useSelector(state => state.toogle.toogleState) 
    const dispatch = useDispatch()
    let navigate = useNavigate()
    
    const classes = useStyles();
    const headCells = [
        {id: 'userId', label: 'User Id'},
        {id: 'name', label: 'Name'},
        {id: 'userCode', label: 'User Code'}
    ]
    const deleteUserHandler = (id) => {
        dispatch(deleteUser(id))
        // console.log(id)
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
    return (
        <div className={`view-usersList ${classes.usersList}`}>
            <MTable columns={headCells} datas={users} add={addUser} deleteAction={deleteUserHandler} searchLabel="Search User"/>
        </div>
    )
}

export default UsersList