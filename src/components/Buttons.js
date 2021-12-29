import React from 'react'
import {Button} from 'react-bootstrap';


function Buttons(props) {
    return (
        <div>
            <Button variant={props.variant}>{props.name}</Button>
        </div>
    )
}

export default Buttons