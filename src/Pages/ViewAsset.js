import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import MTable from '../components/MTable'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import {RiUploadCloudFill} from 'react-icons/ri'
import {AiFillClockCircle} from 'react-icons/ai'
import {BsFillFileBarGraphFill} from 'react-icons/bs'
import {ImUserPlus} from 'react-icons/im'
import { deleteAsset } from '../redux/actions/assetAction';
 


const useStyles = makeStyles((theme) => ({
    checkbox: {
        marginRight: '15px',
    },
    checkboxLabel: {
        fontSize: '18px',
    },
    checkboxItem: {
        display: 'flex',
        alignItems: 'center',
    },
    dialogContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    checkboxIcon: {
        marginRight: '3px',
        fontSize: '18px',
        color: 'black'
    },
    checkboxLabel: {
        color: 'black'
    },
    assets: {
        height: 'calc(100vh-60px)',
        position: 'relative',
        left: '68px',
        width: 'calc(100% - 68px)',
        padding: '30px'
    }


}));

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});



function ViewAsset() {

    const toogleState = useSelector(state => state.toogle.toogleState)
    const classes = useStyles();
    let navigate = useNavigate();
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);


  const assets = useSelector(state => state.asset.assets)
  console.log('assets>>>>>>>>>>..',assets)

    const dispatch = useDispatch()

    const handleDeleteAsset = (id) => {
        console.log('deleteid',id)
        dispatch(deleteAsset(id))
    }


    const handleClickOpen1 = () => {
        setOpen1(true);
    };

    const handleClose1 = () => {
        setOpen1(false);
    };

    const handleClickOpen2 = () => {
        setOpen2(true);
    };

    const handleClose2 = () => {
        setOpen2(false);
    };

    const addAssest = () => {
        navigate('/asset/create')
    }


    useEffect(() => {
        let cls = document.getElementsByClassName('view-asset')[0];
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


    return (
        <div className={`view-asset ${classes.assets}`}>

            
            <MTable columns={[{id:'name',label:'Entity Name'},{id:'encode',label:'Entity Code'},{id:'entype',label:'Entity Type'}]} datas={assets} edit={handleClickOpen1} add={addAssest} deleteAction={handleDeleteAsset}/>
            <Dialog
                className={classes.dialog}
                open={open1}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose1}
                aria-describedby="alert-dialog-slide-description"

            >
                <DialogTitle className={classes.dialogContainer}>
                    {"Edit Previleges"}
                    <IconButton onClick={handleClose1}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent>

                        <form>
                            <Grid container spacing={2}>
                                <Grid item xs={6} >
                                    <Item className={classes.checkboxItem}>
                                        <input className={classes.checkbox} type="checkbox" id="inlineCheckbox1" value="option1"/>
                                        <RiUploadCloudFill className={classes.checkboxIcon}/>
                                        <label className={classes.checkboxLabel}>Upload</label>
                                    </Item>
                                </Grid>
                                <Grid item xs={6}>
                                    <Item className={classes.checkboxItem}>
                                        <input className={classes.checkbox} type="checkbox" id="inlineCheckbox1" value="option1"/>
                                        <AiFillClockCircle className={classes.checkboxIcon}/>
                                        <label className={classes.checkboxLabel}>Scheduler</label>
                                    </Item>
                                </Grid>
                                <Grid item xs={6} >
                                    <Item className={classes.checkboxItem}>
                                        <input className={classes.checkbox} type="checkbox" id="inlineCheckbox1" value="option1"/>
                                        <BsFillFileBarGraphFill className={classes.checkboxIcon}/>
                                        <label className={classes.checkboxLabel}>Report</label>
                                    </Item>
                                </Grid>
                                <Grid item xs={6} >
                                    <Item className={classes.checkboxItem}>
                                        <input className={classes.checkbox} type="checkbox" id="inlineCheckbox1" value="option1"/>
                                        <ImUserPlus className={classes.checkboxIcon}/>
                                        <label className={classes.checkboxLabel}>Create User</label>
                                    </Item>
                                </Grid>
                            </Grid>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button className={classes.dialogButton} onClick={handleClickOpen2}>New</Button>
                    <Button className={classes.dialogButton} onClick={handleClose1}>Save Changes</Button>
                </DialogActions>
            </Dialog>


            <Dialog open={open2} onClose={handleClose2}>
                <DialogTitle>Add New</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We
                        will send updates occasionally.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="New Previlege"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose2}>Cancel</Button>
                    <Button onClick={handleClose2}>Save</Button>
                </DialogActions>
            </Dialog>

        </div>
    )
}

export default ViewAsset