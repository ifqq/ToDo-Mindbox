import React from 'react';
import { Tabs, Tab } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/actions/filter';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { clearCompleted } from '../../redux/actions/tasks';

const filterIndex = {
  all: 0,
  active: 1,
  completed: 2,
};

export const Footer = () => {
  const dispatch = useDispatch();
  const filterBy = useSelector((state) => state.filter.filterBy);
  const navigate = useNavigate();

  const handleChangeFilter = (_, newIndex) => {
    const status = Object.keys(filterIndex)[newIndex];
    dispatch(setFilter(status));
    if (newIndex === 0) {
      navigate('/');
    } else if (newIndex === 1) {
      navigate('/active');
    }
    if (newIndex === 2) {
      navigate('/completed');
    }
  };

  const handleClickClear = () => {
    dispatch(clearCompleted());
  };

  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Tabs onChange={handleChangeFilter} value={filterIndex[filterBy]}>
        <Tab label='Все' />
        <Tab label='Активные' />
        <Tab label='Завершённые' />
      </Tabs>
      <div style={{ textAlign: 'right' }}>
        <Button variant='text' size='small' onClick={handleClickClear}>
          Clear completed
        </Button>
      </div>
    </Box>
  );
};
