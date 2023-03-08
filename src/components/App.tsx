import React, { useState } from "react";
import { ListItems } from "./ListItems";
import { ThemeProvider, Typography, Box, Button, TextField } from "@mui/material";
import { Add } from "@mui/icons-material";
import styles from "./App.module.scss";
import AppColor from "./AppColor";
import { StyledEngineProvider } from "@mui/material/styles";

function App() {
  const [memo, setMemo] = useState<string>("");
  const [lists, setLists] = useState<string[]>([]);
  const [editing, setEditing] = useState(false);
  const [editingID, setEditingID] =useState<number>(-1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setMemo(e.target.value);
  };

  const handleClickAdd = () => {
    if (memo.length===0) {
      alert( "Please write first 💡");
    }
    else if(editing){
      setLists(lists.map((list,index)=> {
        if(index===editingID){
          return memo;
        }
        return list;
      }));
      setMemo("");
      setEditing(false);
      setEditingID(-1);
    }
   else{
    const newLists = [...lists, memo];
    setLists(newLists);
    setMemo("");}
  };

  const handleClickDelete = (index: number) => {
    const newLists = [...lists].filter((list, listIndex) => listIndex !== index);
    setLists(newLists);
  };

  const handleClickEdit = (index: number) => {
    const specificMemo = [...lists].filter((list, listIndex) => listIndex === index);
    setEditingID(index);
    setEditing(true);
    setMemo(specificMemo.toString());
  };

  const handleDeleteAll=()=>{
    setLists([]);
  }

  return (
    <ThemeProvider theme={AppColor}>
      <StyledEngineProvider injectFirst>
        <div className={styles.app}>
          <Typography variant="h2" className={styles.app__heading}>
            To Do List
          </Typography>
          <Box className={styles.app__wrapper}>
            <TextField
              fullWidth
              className={styles.app__textfield}
              id="outlined-basic"
              value={memo}
              onChange={handleChange}
              placeholder="write list here!"
            />
            <Button type="button" className={styles.app__button} onClick={handleClickAdd} variant="contained" disableElevation>
              <Add />
            </Button>
          </Box>
          {lists.length>0 ?
          <ListItems lists={lists} handleClickDelete={handleClickDelete} handleClickEdit={handleClickEdit} handleDeleteAll={handleDeleteAll}/>:''}
        </div>
      </StyledEngineProvider>
    </ThemeProvider>
  );
}

export default App;
