import { addTask, clearCompleted } from '../actions/tasks';
import { tasksReducer } from './tasks';

const state = {
  tasks: [
    { id: 1, text: 'Тестовая задача #1', completed: false },
    { id: 2, text: 'Тестовая задача #2', completed: true },
    { id: 3, text: 'Тестовая задача #3', completed: false },
    { id: 4, text: 'Тестовая задача #4', completed: true },
  ],
};

it('length of tasks should be incremented', () => {
  // 1. test data
  let action = addTask('Новая задача');

  // 2. action
  let newState = tasksReducer(state, action);

  // 3. expectation
  expect(newState.tasks.length).toBe(5);
});

it('text of new task should be correct', () => {
  // 1. test data
  let action = addTask('Новая задача');

  // 2. action
  let newState = tasksReducer(state, action);

  // 3. expectation
  expect(newState.tasks[4].text).toBe('Новая задача');
});

it('after deleting length of messages should be decrement', () => {
  // 1. test data
  let action = clearCompleted();

  // 2. action
  let newState = tasksReducer(state, action);

  // 3. expectation
  expect(newState.tasks.length).toBe(2);
});
