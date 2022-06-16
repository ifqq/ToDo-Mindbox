import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import Active from './pages/Active';
import Completed from './pages/Completed';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<All />} />
        <Route path='/active' element={<Active />} />
        <Route path='/completed' element={<Completed />} />
      </Route>
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
}

export default App;
