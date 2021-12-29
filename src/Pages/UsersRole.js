import React, { useEffect, useState } from 'react'
import { Button, Card, Dropdown, DropdownButton, Modal, Table } from 'react-bootstrap'
import { BiPlusMedical } from 'react-icons/bi'
import { ImSearch } from 'react-icons/im'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './ListRoles.css'
import {FaUserAlt, FaCloudUploadAlt} from 'react-icons/fa'
import {RiDeleteBin5Fill} from 'react-icons/ri'


function UsersRole() {


    const [roles, setRoles] = useState([{id:'1',name:'Admin',code:'adm01'},{id:'1',name:'Admin',code:'adm01'},{id:'1',name:'Admin',code:'adm01'},{id:'1',name:'Admin',code:'adm01'}])  
    const toogleState = useSelector(state => state.toogle.toogleState)

    const [show, setShow] = useState(false);
    const [profileshow, setProfileShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleProfileClose = () => setProfileShow(false);
    const handleProfileShow = () => setProfileShow(true);

    useEffect(() => {
        let cls=document.getElementsByClassName('users-role')[0];
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

    return (
        <div className='users-role'>
            <h3>Users and Roles</h3>
          <div className="input-group">
            <div className="form-outline">
              <input type="search" id="form1" className="form-control" placeholder='Search an User' />
              <button type="button" className="btn btn-primary">
                <ImSearch />
              </button>
              <DropdownButton id="dropdown-basic-button" variant='info' title="Admin" style={{marginLeft:'20px'}}>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>
            </div>
            <div className='addbutton'>
              <button type="button" className="btn btn-primary" style={{marginRight:'10px'}} onClick={handleShow}>Add<BiPlusMedical style={{margin:'5px 0px 7px 5px'}}/></button>
              <button type="button" className="btn btn-success"><FaCloudUploadAlt style={{margin:'5px 7px 7px 5px'}} />Bulk Upload</button>
              
            </div>
          </div>
          
          <Table striped hover bordered>
            <thead>
              <tr >
                <th>ID</th>
                <th>User Name</th>
                <th>User Code</th>
                <th>Delete</th>
                <th>View Users</th>
              </tr>
            </thead>
            <tbody>
              {
                roles.map((role,i) => (
                  <tr>
                    <td>{role.id}</td>
                    <td style={{color:'#007bff',cursor:'pointer'}} onClick={handleProfileShow} ><strong>{role.name}</strong></td>
                    <td>{role.code}</td>
                    <td style={{cursor:'pointer',textAlign:"center"}}><RiDeleteBin5Fill /></td>
                    <td style={{textAlign:"center",color:'#007bff',cursor:'pointer'}} onClick={handleProfileShow}><i class="fas fa-eye" ></i></td>
                  </tr>
                ))
              }
            </tbody>
          </Table>
          <Modal show={show} onHide={handleClose} centered style={{textAlign:'center'}} >
            <Modal.Header closeButton style={{padding:'10px'}}>
              <Modal.Title>Add User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <label style={{fontWeight:'bold',marginRight:'10px'}}>User ID</label>
              <input type="text"  placeholder='Enter user ID/name' />
            </Modal.Body>
            <Modal.Footer style={{border:'none',display:'flex',justifyContent:'center'}}>
              <Link to='/roles/users'>
                <Button variant="primary">
                  Add
                </Button>
              </Link>
            </Modal.Footer>
          </Modal>
          <Modal show={profileshow} onHide={handleProfileClose}  centered style={{textAlign:'center'}} dialogClassName="mymodal"
              aria-labelledby="example-custom-modal-styling-title" >
            <Modal.Body>
            <Modal.Header closeButton style={{border:'none',padding:'0px'}}>
            </Modal.Header>
            <Card style={{ width: '18rem', border:'none'}} className='text-center'  >
              <FaUserAlt style={{fontSize:'80px',position:'relative',left:'50%',transform:'translate(-50%)'}} />
              <Card.Body>
                <Card.Title>Employee Name<p style={{fontSize:'16px',color:'#a8a6a0'}}>Admin</p></Card.Title>
                <Card.Text style={{display:'flex',justifyContent:'center',textAlign:'left',fontSize:'18px'}} >
                  <table>
                    <tr style={{width:'30px'}}><td style={{width:'30px'}}><strong>User ID:</strong></td><td>12345</td></tr>
                    <tr><td><strong>User code:</strong></td><td>12345</td></tr>
                    <tr><td><strong>Role ID:</strong></td><td>asd</td></tr>
                    <tr><td><strong>Role Code:</strong></td><td>asd</td></tr>
                  </table> 
                </Card.Text>
              </Card.Body>
            </Card>
            </Modal.Body>
          </Modal>
        </div>
    )
}

export default UsersRole
