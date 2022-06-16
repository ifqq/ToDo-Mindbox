export const setTaskValue = (taskValue) => ({
  type: 'SET_TASK_VALUE',
  payload: taskValue,
});

export const addTask = (taskValue) => ({
  type: 'ADD_TASK',
  payload: taskValue,
});

export const completeTask = (taskId) => ({
  type: 'COMPLETE_TASK',
  payload: taskId,
});

export const deleteTask = (taskId) => ({
  type: 'DELETE_TASK',
  payload: taskId,
});

export const clearCompleted = () => ({
  type: 'CLEAR_COMPLETED',
});
