import React, { useEffect, useState } from 'react'
import './ListRoles.css'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { deleteRole } from '../redux/actions/roleActions'
import MTable from '../components/MTable'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme)=>({
  listroles:{
      height:'calc(100vh-60px)',
      position:'relative',
      left:'68px',
      width: 'calc(100% - 68px)',
      padding: '30px'
  }
}))

function ListRoles() {

  // const [roles, setRoles] = useState([{}])
  const roles = useSelector(state => state.role.roles)
  console.log("ROLEEEEEEEEEEEEEEEEEEEEEEEE",roles)
  const dispatch = useDispatch()
  // console.log("roles from store>>>>",roles)
  const toogleState = useSelector(state => state.toogle.toogleState)
  const classes = useStyles();
  let navigate = useNavigate()

  const handledeleteRole = (e) =>{
    console.log("eventtttttttttt",e.target.parentElement.parentElement.parentElement)
    // dispatch(deleteRole(id))
  }
  const columns=[{id:'name',label:'Role Name'},{id:'rolecode',label:'Role Code'}]

    useEffect(() => {
        let cls=document.getElementsByClassName('listroles')[0];
        if(toogleState){
            cls.style.left="260px";
            cls.style.transition="all 0.4s ease";
            cls.style.width="calc(100% - 260px)";
        }
        if(!toogleState){
            cls.style.left="68px"
            cls.style.width="calc(100% - 68px)";
        }
        
    }, [toogleState])

    const addRole = () =>{
      navigate('/roles/create')
    }

    return (
      <div className={`listroles ${classes.listroles}`}>
           <MTable columns={columns} datas={roles} add={addRole} deleteAction={handledeleteRole} />
        </div>
    )
}

export default ListRoles
