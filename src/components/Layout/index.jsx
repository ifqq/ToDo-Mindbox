import React from 'react';
import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Footer } from '../Footer';
import { TaskField } from '../TaskField';

import styles from './Layout.module.scss';

function Layout() {
  return (
    <Box
      component='form'
      sx={{
        '& > :not(style)': { m: 1, width: '40ch', margin: '0 auto' },
      }}
      noValidate
      autoComplete='off'
    >
      <div className={styles.layout}>
        <h1>todos</h1>
        <TaskField />
        <Outlet />
        <Footer />
      </div>
    </Box>
  );
}

export default Layout;
