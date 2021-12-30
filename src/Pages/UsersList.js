import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import { Container, makeStyles, Paper, TableBody, TableCell, TableRow,TextField,Tooltip} from '@material-ui/core'
import {Button,Stack} from '@mui/material';
import {Link} from 'react-router-dom'
import { headCells, usersData } from './UsersData';
import {MdEdit,MdDelete} from 'react-icons/md'
import { red } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import MTable from '../components/MTable';

const useStyles = makeStyles((theme) => ({
    checkbox:{
        marginRight:'15px',
    },
    checkboxLabel:{
        fontSize:'18px',
    },
    checkboxItem:{
        display:'flex',
        alignItems:'center',

    },
    dialogContainer:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between'
    },
    checkboxIcon:{
        marginRight:'3px',
        fontSize:'18px',
        color:'black'
    },
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

const UsersList = (props) => {
    const toogleState = useSelector(state => state.toogle.toogleState) 
    const {users,setUsers} = props
    const danger = red[500];
    let navigate = useNavigate()
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    
    const classes = useStyles();
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
            <MTable columns={headCells} datas={usersData} add={addUser} />
        </div>
    )
}

export default UsersList