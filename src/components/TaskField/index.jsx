import React from 'react';
import TextField from '@mui/material/TextField';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, setTaskValue } from '../../redux/actions/tasks';

import styles from './TaskField.module.scss';

export const TaskField = () => {
  const [isError, setIsError] = React.useState(false);
  const dispatch = useDispatch();
  const { taskField } = useSelector((state) => state.tasks);

  const handleChangeInput = (e) => {
    if (e.target.value.length >= 3) {
      setIsError(false);
    }
    dispatch(setTaskValue(e.target.value));
  };

  const handlePressEnter = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (taskField.length < 3) {
        setIsError(true);
      } else {
        dispatch(addTask(taskField));
        dispatch(setTaskValue(''));
      }
    }
  };

  return (
    <TextField
      label='Что нужно сделать?'
      variant='standard'
      value={taskField}
      error={isError}
      onChange={(e) => handleChangeInput(e)}
      onKeyDown={handlePressEnter}
      className={styles.field}
      helperText={isError ? 'Слишком короткое имя задачи' : ''}
    />
  );
};
