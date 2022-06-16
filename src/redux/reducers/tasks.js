const initialState = {
  taskField: '',
  tasks: [],
};

export function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_TASK_VALUE':
      return {
        ...state,
        taskField: action.payload,
      };
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id:
              state.tasks.length !== 0
                ? state.tasks[state.tasks.length - 1].id + 1
                : 1,
            text: action.payload,
            completed: false,
          },
        ],
      };

    case 'COMPLETE_TASK':
      const newTasks = state.tasks.map((obj) => {
        return obj.id === action.payload
          ? {
              ...obj,
              completed: !obj.completed,
            }
          : obj;
      });
      return {
        ...state,
        tasks: newTasks,
      };

    case 'DELETE_TASK':
      const deleteTask = state.tasks.filter((obj) => obj.id !== action.payload);
      return {
        ...state,
        tasks: deleteTask,
      };

    case 'CLEAR_COMPLETED':
      const completedTask = state.tasks.filter((obj) => !obj.completed);
      return {
        ...state,
        tasks: completedTask,
      };

    default:
      return state;
  }
}
