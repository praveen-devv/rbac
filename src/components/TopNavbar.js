import React from 'react'
import {CgProfile} from 'react-icons/cg'
import './TopNavbar.css'
import {Link} from 'react-router-dom';
import {MdPermIdentity} from 'react-icons/md'

function TopNavbar(props) {

    return (
        <div className='topnavbar'>
            <div className='topnavbar-left'>
                    {props.menu}
            </div>
            <div className='topnavbar-right'>
                <div className='profile-details'>
                    <p className='empname'>Praveen</p>
                    <p className='emptype'>Employee <span><MdPermIdentity /></span></p>
                </div>
                <div className='profile'>
                    <CgProfile className='profile-icon' />
                    <p>Logout</p>
                </div>
            </div>
        </div>
    )
}

export default TopNavbar
