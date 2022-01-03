import React, { useState } from 'react';
import {ImCross} from 'react-icons/im'
import {FaEdit, FaUserAlt} from 'react-icons/fa'
import { makeStyles } from '@material-ui/core/styles';
import  AddButton  from './AddButton'
import Tooltip from '@mui/material/Tooltip';
import { Search } from "@material-ui/icons";
import SearchInput from './SearchInput';
import TableSortLabel from '@mui/material/TableSortLabel';
// import Box from '@mui/material/Box';
// import { visuallyHidden } from '@mui/utils';
// import {BiPlusMedical} from 'react-icons/bi'
import { 
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Avatar,
    Grid,
    Typography,
    TablePagination,Toolbar,
    InputAdornment,
 } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper:{
    borderRadius:15,
    padding:'20px'
  },
  table: {
    minWidth: 650,
    '& thead th': {
      color: '#ffffff',
  },
  '& thead th:hover': {
    color: '#ffffff',
  },
  },
  tableContainer: {
      borderRadius: 15,
      maxWidth: '90vw',
      boxSizing:'border-box',
      borderLeft:'1px solid rgba(224, 224, 224, 1)',
      borderRight:'1px solid rgba(224, 224, 224, 1)'
  },
  tableHeader:{
    // background:'#590037',
    background: '#3c8dbc'
  },
  tableHeaderCell: {
      fontWeight: 'bold',
      color: theme.palette.getContrastText(theme.palette.primary.light),
      fontSize:'17px',
  },
  avatar: {
      backgroundColor:'#8267BE',
      color: theme.palette.getContrastText(theme.palette.primary.light),
  },
  name: {
      fontWeight: 'bold',
      color: '#000',
      fontSize:'17px'
  },
  tooltip:{
    fontSize:'18px',
    marginRight:'10px',
    marginLeft:'10px',
    cursor:'pointer'
  },
  toolbar:{
    marginTop:'25px',
    marginBottom:'20px',
    display:'flex',
    justifyContent:'space-between'
  },
  label:{
    borderRadius:'15px',
    // backgroundColor:'#590037',
    backgroundColor: "#3c8dbc",
    color:'#ffffff',
    marginTop:'-40px',
    width:'fit-content',
    padding:'5px 20px',
  },
  addButton:{
    marginTop:'20px',
  },

  '@media only screen and (max-width: 600px)': {
    toolbar :{
      flexDirection:'column',
      alignItems:'flex-start'
    },
    addButton:{
      marginTop:'20px',
    }

  }
}));
//fixed different background colors for the avatar.
function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash); //eslint-disable-line no-bitwise
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff; //eslint-disable-line no-bitwise
    color += `00${value.toString(16)}`.substr(-2);
  }
   /* eslint-enable no-bitwise */
  // console.log("avatar colorrrr------",color)
  return color;
}
function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name)
      // bgcolor: `${stringToColor(name)}`,
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}
// if we want random colors for avatars
function randomColor() {
  let hex = Math.floor(Math.random() * 0xFFFFFF);
  let color = "#" + hex.toString(16);
// console.log("random avatar color-----",color)
  return color;
}


function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}


function MTable({columns,datas,edit,add,deleteAction,searchLabel, handleOpen}) {
  // console.log("columns:",columns,"datsd",datas,">>>>>")
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [order, setOrder] = useState();
  const [orderBy, setOrderBy] = useState();
  const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };

  const handleSearch = e => {

    let target = e.target;
        setFilterFn({
            fn: items => {
                if (target.value === "")
                    return items;
                else
                    // return items.filter(item => item.name.toLowerCase().includes(target.value))
                    return items.filter(item => Object.values(item).join(" ").toLowerCase().includes(target.value.toLowerCase()))
                    // return Object.values(data).join(" ").toLowerCase().includes(target.toLowerCase())
            }
        })
  }
  const createSortHandler = (property) =>{
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const recordsAfterPagingAndSorting = () => {
    return stableSort(filterFn.fn(datas), getComparator(order, orderBy)).slice(page * rowsPerPage, (page + 1) * rowsPerPage)
  }

  // console.log("RRRRRRRRRRRRRRRRRRRRRRRRR",stableSort(datas, getComparator(order, orderBy)))

  let label = searchLabel ? searchLabel : "Employees" 
  return (
    <Paper className={classes.paper}>
        <h3 className={classes.label}>{label}</h3>
        <Toolbar className={classes.toolbar}>
            <SearchInput 
                className={classes.searchBox} 
                label={`Search ${label}`}
                InputProps={{
                    startAdornment: (<InputAdornment position="start">
                        <Search />
                    </InputAdornment>)
                }}
                onChange={handleSearch}
            />

            <AddButton onClick={add} classname={classes.addButton} />  
          </Toolbar>
            <TableContainer  className={classes.tableContainer}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead className={classes.tableHeader}>
                  <TableRow>
                      {
                          columns.map((colData)=>(
                            <TableCell key={colData.id} className={classes.tableHeaderCell} sortDirection={orderBy === colData.id ? order : false}>
                              
                              <TableSortLabel
                                active={orderBy === colData.id}
                                direction={orderBy === colData.id ? order : 'asc'}
                                onClick={()=> {createSortHandler(colData.id)}}
                                className={classes.tableSortLabel}
                              >{colData.label}
                              </TableSortLabel>
                              
                            </TableCell>
                          ))
                      }
                      <TableCell className={classes.tableHeaderCell} >Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody >
                    {

                        recordsAfterPagingAndSorting().map((rowData,index)=>(
                            <TableRow key={rowData.id} style={index % 2? { background : "#" }:{ background : "white" }} >
                                {
                                    columns.map((column)=>{
                                        const value= rowData[column.id];
                                        var avatar=false;
                                        if(column.id==='name')avatar=true
                                        // console.log("Value>>>>",value)
                                        // console.log(rowData)
                                        return(
                                            avatar ?  <TableCell key={column.id}>
                                                        <Grid container>
                                                          <Grid item lg={2}>
                                                              {/* <Avatar alt={value} src='.' className={classes.avatar}/> */}
                                                              <Avatar {...stringAvatar(rowData.name)} style={{backgroundColor: randomColor()}}/>
                                                          </Grid>
                                                          <Grid item lg={10} style={{display:'flex',alignItems:'center'}}>
                                                          <Typography className={classes.name} >{value}</Typography>
                                                          </Grid>
                                                        </Grid>
                                                      </TableCell> :
                                                      <TableCell key={column.id}>{value}</TableCell>
                                        )
                                    })
                                }
                                <TableCell>
                                    <Tooltip title="View" placement='top' arrow onClick={() =>handleOpen(rowData)}>  
                                      <span><FaUserAlt style={{color:'green'}} className={classes.tooltip} /></span>
                                    </Tooltip>
                                    <Tooltip title="Edit" placement='top' arrow onClick={() => edit(rowData)}> 
                                      <span><FaEdit style={{color:'orange'}} className={classes.tooltip} /></span>
                                    </Tooltip>



                                    <Tooltip title="Delete" placement='top' arrow onClick={()=>deleteAction(rowData.id)} > 
                                      <span><ImCross style={{color:"red"}} className={classes.tooltip} /></span>
                                    </Tooltip>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 15]}
                component="div"
                count={datas.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onRowsPerPageChange={handleChangeRowsPerPage}
                onPageChange={handleChangePage}
            />
          </Paper>
  );
}

export default MTable;