import React from 'react';
import TasksList from '../../components/TasksList';
import { useSelector } from 'react-redux';

function Tasks() {
  const { tasks } = useSelector((state) => state.tasks);
  const { filterBy } = useSelector((state) => state.filter);

  const didMountRef = React.useRef(false);

  // Сохранение в localstorage не будет работать корректно из-за React.StrictMode. (В gh-pages React.StrictMode отключен)
  React.useEffect(() => {
    if (didMountRef.current)
      localStorage.setItem('tasks', JSON.stringify(tasks));
    else didMountRef.current = true;
  }, [tasks]);

  const filteredTasks = tasks.filter((obj) => {
    if (filterBy === 'completed') {
      return obj.completed;
    } else if (filterBy === 'active') {
      return !obj.completed;
    } else {
      return true;
    }
  });

  return filteredTasks.map((obj) => (
    <TasksList
      key={obj.id}
      id={obj.id}
      text={obj.text}
      completed={obj.completed}
    />
  ));
}

export default Tasks;
