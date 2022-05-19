import React, { useState } from 'react';
//import ToDoList from './ToDoList';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Tooltip from '@material-ui/core/Tooltip';
import CancelIcon from '@mui/icons-material/Cancel';


const App = () => {
     //intial input state
     const [inputList,setInputList] = useState("");
    // new state with object Items
     const [Items,setItems] = useState([]);

     const inputItem = (event) => {
         
        setInputList(event.target.value);
     }

     const itemList = () => {
        setItems( (oldVal) => {   // access value of Items object
            console.log(oldVal);
            return [...oldVal, inputList];
        })
        setInputList(""); ///input field empty
     }
     
     const deleteItem = (id) => {
          alert(id);
        setItems((oldVal) => {
               return oldVal.filter((Arr,index)=>{
                   return index !== id;
               });
        });
     }

    return(
        <>
          <div className="main_div">
              <div className="cenrer_div">
                  <br/>
                  <h1 className="todo_heading">To Do List</h1>
                  <input type="text" 
                         placeholder="add item"
                         className="input_css"
                         value={inputList}
                         onChange={inputItem} />
                  <Tooltip title="add item">       
                  <Button className="addbtn" variant="contained" 
                          color="success" onClick={itemList}>
                  <AddIcon />
                  </Button>
                  </Tooltip>
               <ol>
                  { Items.map((itemVal,index) => {
                    //   return <ToDoList 
                    //            key={index}
                    //            id={index}
                    //            list={itemVal}
                    //            onSelect= {deleteItem}
                    //            />
                   
                     return(
                         <>
                         <div>
                         <Tooltip title="cancel item"> 
                         <Button className="cancelbtn" 
                          onClick={()=>{deleteItem(index)}}>
                          <CancelIcon />
                         </Button>
                         </Tooltip>
                         <li>{itemVal}</li>
                         </div>
                         </>
                        ) 
                   })
 
                  } 
              </ol>          
             </div>  
          </div>
        </>
    );
}
export default App;