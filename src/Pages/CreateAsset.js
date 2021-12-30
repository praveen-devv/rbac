import React,{useEffect, useState} from 'react'
import './CreateAsset.css'
import {Link} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { addAsset } from '../redux/actions/assetAction'

function CreateAsset() {


    const [encode,setEnCode] = useState('')
    const [enname,setEnName] = useState('')
    const [entype,setEnType] = useState('')


    const dispatch = useDispatch()


    
    const handleAssetSubmit = () => {

        dispatch(addAsset({'id':'2','encode':encode,'name':enname,'entype':entype}))
    }



    return (
        <div className='create-asset'>

            <div className="asset-entity">
                <form className='asset'>
                    <h4>Create Asset</h4>
                    <div className="form-group">
                        <label>Code</label>
                        <input type="text" className="form-control"  value={encode} placeholder="Enter entity code" onChange={ e => setEnCode(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Entity Name</label>
                        <input type="text" className="form-control" id="enname" value={enname} placeholder="Entity Name" onChange={e => setEnName(e.target.value)}/>
                    </div>

                    <div className="form-group">
                        <label>Entity Type</label>
                        <input type="text" className="form-control"  id="entype" value={entype} placeholder="Entity Type" onChange={ e => setEnType(e.target.value)}/>
                    </div>
                    <div className='btns'>
                        <Link className='btn btn-success' to='/asset' onClick={handleAssetSubmit}>Create</Link>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default CreateAsset
