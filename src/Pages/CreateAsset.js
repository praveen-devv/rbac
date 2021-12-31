import React,{useEffect} from 'react'
import './CreateAsset.css'
import {Link} from 'react-router-dom'

function CreateAsset() {

    return (
        <div className='create-asset'>

            <div className="asset-entity">
                <form className='asset'>
                    <h4>Create Asset</h4>
                    <div className="form-group">
                        <label>Code</label>
                        <input type="text" className="form-control" id="encode" placeholder="Enter entity code"/>
                    </div>
                    <div className="form-group">
                        <label>Entity Name</label>
                        <input type="text" className="form-control" id="enname" placeholder="Entity Name"/>
                    </div>
                    <div className="form-group">
                        <label>Entity Type</label>
                        <input type="text" className="form-control" id="entype" placeholder="Entity Type"/>
                    </div>
                    <div className='btns'>
                        <Link className='btn btn-success' to='/asset'>Create</Link>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default CreateAsset
