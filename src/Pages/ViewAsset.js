import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import MTable from '../components/MTable'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
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
    assets:{
      height:'calc(100vh-60px)',
      position: 'relative',
      left:'68px',
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
    return <Slide direction="down" ref={ref} {...props} />;
  });

 

function ViewAsset() {

  const toogleState = useSelector(state => state.toogle.toogleState) 
  const classes = useStyles();
  let navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const addAssest = () =>{
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
            
            <MTable columns={[{id:'name',label:'Entity Name'},{id:'encode',label:'Entity Code'},{id:'entype',label:'Entity Type'}]} datas={[{'name':'smartrepo','encode':'smrt1','entype':'app'},{'name':'smartrepo','encode':'smrt1','entype':'app'},{'name':'smartrepo','encode':'smrt1','entype':'app'},{'name':'smartrepo','encode':'smrt1','entype':'app'},{'name':'smartrepo','encode':'smrt1','entype':'app'},{'name':'smartrepo','encode':'smrt1','entype':'app'},{'name':'smartrepo','encode':'smrt1','entype':'app'},{'name':'smartrepo','encode':'smrt1','entype':'app'},{'name':'smartrepo','encode':'smrt1','entype':'app'},{'name':'smartrepo','encode':'smrt1','entype':'app'},{'name':'smartrepo','encode':'smrt1','entype':'app'},{'name':'smartrepo','encode':'smrt1','entype':'app'},{'name':'smartrepo','encode':'smrt1','entype':'app'}]} edit={handleClickOpen} add={addAssest} />

            <Dialog
                className={classes.dialog}
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleCloseDialog}
                aria-describedby="alert-dialog-slide-description"

            >
                <DialogTitle className={classes.dialogContainer}>
                    {"Add Previleges"}
                    <IconButton onClick={handleCloseDialog}>
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
                                        <label className={classes.checkboxLabel} for="inlineCheckbox1">Upload</label>
                                    </Item>
                                </Grid>
                                <Grid item xs={6}>
                                    <Item className={classes.checkboxItem}>
                                        <input className={classes.checkbox} type="checkbox" id="inlineCheckbox1" value="option1"/>
                                        <AiFillClockCircle className={classes.checkboxIcon}/>
                                        <label className={classes.checkboxLabel}  for="inlineCheckbox1">Scheduler</label>
                                    </Item>
                                </Grid>
                                <Grid item xs={6} >
                                    <Item className={classes.checkboxItem}>
                                        <input className={classes.checkbox} type="checkbox" id="inlineCheckbox1" value="option1"/>
                                        <BsFillFileBarGraphFill className={classes.checkboxIcon}/>
                                        <label className={classes.checkboxLabel}  for="inlineCheckbox1">Report</label>
                                    </Item>
                                </Grid>
                                <Grid item xs={6} >
                                    <Item className={classes.checkboxItem}>
                                        <input className={classes.checkbox} type="checkbox" id="inlineCheckbox1" value="option1"/>
                                        <ImUserPlus className={classes.checkboxIcon}/>
                                        <label className={classes.checkboxLabel}  for="inlineCheckbox1">Create User</label>
                                    </Item>
                                </Grid>
                            </Grid>
                        </form>
                </DialogContent>
                <DialogActions>
                    <Button className={classes.dialogButton} onClick={handleCloseDialog}>New</Button>
                    <Button className={classes.dialogButton} onClick={handleCloseDialog}>Save</Button>
                </DialogActions>
            </Dialog>



        </div>
    )
}

export default ViewAsset