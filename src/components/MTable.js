import React, { useState } from 'react';
import {ImCross} from 'react-icons/im'
import {FaEdit, FaUserAlt} from 'react-icons/fa'
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@mui/material/Tooltip';
import { Search } from "@material-ui/icons";
import SearchInput from './SearchInput';
import TableSortLabel from '@mui/material/TableSortLabel';
import Box from '@mui/material/Box';
import { visuallyHidden } from '@mui/utils';
import {BiPlusMedical} from 'react-icons/bi'
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
  },
  tableContainer: {
      borderRadius: 15,
      maxWidth: '90vw',
      boxSizing:'border-box',
      borderLeft:'1px solid rgba(224, 224, 224, 1)',
      borderRight:'1px solid rgba(224, 224, 224, 1)'
  },
  tableHeader:{
    background:'#590037',
    
  },
  tableHeaderCell: {
      fontWeight: 'bold',
      color: theme.palette.getContrastText(theme.palette.primary.light),
      fontSize:'17px',
  },
  avatar: {
      // backgroundColor: theme.palette.primary.light,
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
    marginBottom:'20px',
    display:'flex',
    justifyContent:'space-between'
  }
}));

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
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


function MTable({columns,datas,edit,add,deleteAction}) {
  console.log("columns:",columns,"datsd",datas,">>>>>",edit)
  const classes = useStyles();
  const [rowDatas, setRowDatas] = useState(datas)
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('name');

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSearch = e => {
    let target = e.target.value;
    // if(target.length>3){
    const filteredRows = datas.filter((data)=>{
      return data.name.toLowerCase().includes(target)
    })
    setRowDatas(filteredRows)
  // }
  }
  const createSortHandler = (property) => (event) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };


  return (
    <Paper className={classes.paper}>
        <Toolbar className={classes.toolbar}>
            <SearchInput 
                label="Search Employees"
                InputProps={{
                    startAdornment: (<InputAdornment position="start">
                        <Search />
                    </InputAdornment>)
                }}
                onChange={handleSearch}
            />
            <button type="button" className="btn btn-primary" onClick={add} >Add<BiPlusMedical style={{margin:'5px 0px 10px 5px'}}/></button>
        </Toolbar>
            <TableContainer  className={classes.tableContainer}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead className={classes.tableHeader}>
                  <TableRow>
                      {
                          columns.map((colData)=>(
                            <TableCell key={colData.id} className={classes.tableHeaderCell} sortDirection={orderBy === colData.id ? order : false}>
                              {colData.label}
                              <TableSortLabel
                                active={orderBy === colData.id}
                                direction={orderBy === colData.id ? order : 'asc'}
                                onClick={createSortHandler(colData.id)}
                                className={classes.tableSortLabel}
                              >
                                
                                {orderBy === colData.id ? (
                                  <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                  </Box>
                                ) : null}
                                
                              </TableSortLabel>
                              
                            </TableCell>
                          ))
                      }
                      <TableCell className={classes.tableHeaderCell} >Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody >
                    {
                        stableSort(rowDatas, getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((rowData,index)=>(
                            <TableRow key={rowData.roleid} style={index % 2? { background : "#FBF2FF" }:{ background : "white" }} >
                                {
                                    columns.map((column)=>{
                                        const value= rowData[column.id];
                                        var avatar=false;
                                        if(column.id==='name')avatar=true
                                        console.log("Value>>>>",value)
                                        return(
                                            avatar ?  <TableCell>
                                                        <Grid container>
                                                          <Grid item lg={2}>
                                                              <Avatar alt={value} src='.' className={classes.avatar}/>
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
                                    <Tooltip title="View" placement='top' arrow>  
                                      <span><FaUserAlt style={{color:'green'}} className={classes.tooltip} /></span>
                                    </Tooltip>
                                    <Tooltip title="Edit" placement='top' arrow onClick={edit}> 
                                      <span><FaEdit style={{color:'orange'}} className={classes.tooltip} /></span>
                                    </Tooltip>
                                    <Tooltip title="Delete" placement='top' arrow onClick={deleteAction} > 
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
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </Paper>
  );
}

export default MTable;