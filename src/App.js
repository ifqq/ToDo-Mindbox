import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Tasks from './pages/Tasks';

function App() {
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
