import React from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@mui/material/Button';


const ToDoList = (props) => {
    return(
        <>
        <div>
        <Tooltip title="cancel item">       
                  <Button className="cancelbtn" 
                          onClick={()=>{
                              props.onSelect(props.id)
                          }}>
                  <CancelIcon />
                  </Button>
                  </Tooltip>
        <li>{props.list}</li>
        </div>
        </>
     ) 
}

export default ToDoList;