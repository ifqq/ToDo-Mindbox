import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useDispatch } from 'react-redux';
import { completeTask, deleteTask } from '../../redux/actions/tasks';

function TasksList({ id, text, completed }) {
  const dispatch = useDispatch();

  const setCompleteTask = () => {
    dispatch(completeTask(id));
  };

  const handleClickDelete = (e) => {
    dispatch(deleteTask(id));
  };

  return (
    <>
      <ListItem
        style={{ borderBottom: '1px solid rgba(0,0,0 , 0.1)' }}
        secondaryAction={
          <IconButton edge='end' onClick={handleClickDelete}>
            <DeleteOutlineIcon />
          </IconButton>
        }
        disablePadding
      >
        <ListItemButton role={undefined} onClick={setCompleteTask} dense>
          <ListItemIcon>
            <Checkbox edge='start' checked={completed} />
          </ListItemIcon>
          <ListItemText primary={completed ? <strike>{text}</strike> : text} />
        </ListItemButton>
      </ListItem>
    </>
  );
}

export default TasksList;
