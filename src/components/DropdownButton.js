import React from 'react'
import { Button,ButtonGroup,Dropdown} from 'react-bootstrap';
import Buttons from './Buttons';
import './Reports.css'

function DropdownButton(props) {
    return (
        <div>
            <Dropdown as={ButtonGroup} className='drop-success'>
                <Buttons variant={props.buttonVariant} name={props.buttonName} />
                <Dropdown.Toggle split variant={props.variant} id="dropdown-split-basic" />   
                <Dropdown.Menu>
                    {
                        props.items.map((name)=>(
                            <Dropdown.Item href="#/action-2">{name}</Dropdown.Item>
                        ))
                    }
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default DropdownButton
