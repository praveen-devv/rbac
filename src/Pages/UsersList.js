import React,{useState} from 'react'
import { Container, makeStyles, Paper, TableBody, TableCell, TableRow,TextField,Tooltip} from '@material-ui/core'
import {Button,Stack} from '@mui/material';
import {Link} from 'react-router-dom'
import { headCells, usersData } from './UsersData';
import {MdEdit,MdDelete} from 'react-icons/md'
import { red } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import MTable from '../components/MTable';

const useStyles = makeStyles((theme) => ({
    root: {
        width:'100vw',
        height: '100vh',
        backgroundColor: theme.palette.primary.main,
    },
    paper: {
        maxWidth: '60vw',
        minHeight: '50vh',
        margin: '9% auto',
        borderRadius: '35px 35px 5px 5px',
        boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
        [theme.breakpoints.down('md')]:{
            maxWidth: '90vw',
        },
        [theme.breakpoints.down('sm')]:{
            overflowX: 'auto'
        }
    }
}))

const UsersList = (props) => {
    const {users,setUsers} = props
    const danger = red[500];
    let navigate = useNavigate()
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    
    const classes = useStyles();
    
    return (
        <div className='userslist'>
            <MTable columns={headCells} datas={usersData}  />
        </div>
    )
}

export default UsersList
