import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addRole } from '../redux/actions/roleActions'
import TextField from '@mui/material/TextField';
import './CreateRole.css'
function CreateRole() {

    const [roleName, setRoleName] = useState('')
    const [roleCode, setRoleCode] = useState('')

    let navigate = useNavigate();

    const dispatch = useDispatch()

    const createRole = () =>{
        dispatch(addRole({'roleid':'2','name':roleName,'rolecode':roleCode}))
        navigate('/roles')
    }

    return (
        <div className='createrole'>
            <form className='role-form'>
                <h4>Create Role</h4>
                <div className="form-group">
                    <label>Role Name</label>
                    <input type="text" className="form-control" id="encode" value={roleName} placeholder="Enter role name" required onChange={e => setRoleName(e.target.value)} />
                 </div>
                <div className="form-group">
                    <label>Role Code</label>
                    <input type="text" className="form-control" id="enname" value={roleCode} placeholder="Enter the role code" required onChange={e => setRoleCode(e.target.value)} />
                </div>
                <div className='btns'>
                    <button type="submit" className="btn btn-primary" onClick={createRole}>Create Role</button>
                </div>
                
            </form>
        </div>
    )
}

export default CreateRole
