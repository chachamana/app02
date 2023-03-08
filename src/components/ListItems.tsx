import { IconButton, List, ListItem, ListItemIcon, ListItemButton, ListItemText, Button } from "@mui/material";
import { PlayArrowRounded, DeleteRounded, EditRounded } from "@mui/icons-material";
import styles from "./App.module.scss";

type Props = {
  lists: Array<string>;
  handleClickDelete: (index: number) => void;
  handleClickEdit: (index: number) => void;
  handleDeleteAll: () => void;
};

export const ListItems = (props: Props) => {
  const { lists, handleClickDelete, handleClickEdit, handleDeleteAll } = props;
  return (
    <>
      <List className={styles.listitems__wrapper}>
        {lists.map((list, index) => {
          return (
            <ListItem disablePadding key={index}>
              <ListItemButton className={styles.listitems__listicon}>
                <ListItemIcon>
                  <PlayArrowRounded color="primary" />
                </ListItemIcon>
                <ListItemText primary={list} className={styles.listitems__each} />
              </ListItemButton>

              <IconButton edge="end" aria-label="comments" onClick={() => handleClickEdit(index)}>
                <EditRounded color="secondary" />
              </IconButton>
              <IconButton edge="end" aria-label="comments" onClick={() => handleClickDelete(index)}>
                <DeleteRounded color="secondary" />
              </IconButton>
            </ListItem>
          );
        })}

        <ListItem>
          <Button type="button" className={styles.app__button__delete} size="large" onClick={handleDeleteAll} variant="outlined" disableElevation>
            Delete All
          </Button>
        </ListItem>
      </List>
    </>
  );
};
