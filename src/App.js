import React from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Tasks from './pages/Tasks';
import { setTasks } from './redux/actions/tasks';

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    let state = localStorage.getItem('tasks');
    console.log(JSON.parse(state));
    if (state) {
      dispatch(setTasks(JSON.parse(state)));
    }
  }, []);
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Tasks />} />
        <Route path='/active' element={<Tasks />} />
        <Route path='/completed' element={<Tasks />} />
      </Route>
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
}

export default App;
