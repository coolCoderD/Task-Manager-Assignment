import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task, TaskFilter } from '../types/task';
import { loadFromStorage, saveToStorage } from '../services/localStorage';

interface TaskState {
  tasks: Task[];
  filter: TaskFilter;
  loading: boolean;
  error: string | null;
}

// Load initial state from localStorage or use default values
const loadInitialState = (): TaskState => {
  const storedData = loadFromStorage();
  return {
    tasks: storedData?.tasks || [],
    filter: 'all',
    loading: false,
    error: null,
  };
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState: loadInitialState(),
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
      state.error = null;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.unshift(action.payload);
      state.error = null;
      saveToStorage(state.tasks);
    },
    updateTask: (state, action: PayloadAction<Task>) => {
      const index = state.tasks.findIndex((task) => task.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = action.payload;
        saveToStorage(state.tasks);
      }
      state.error = null;
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      state.error = null;
      saveToStorage(state.tasks);
    },
    setFilter: (state, action: PayloadAction<TaskFilter>) => {
      state.filter = action.payload;
    },
    hydrateTasks: (state, action: PayloadAction<Task[]>) => {
      state.tasks = action.payload;
      state.error = null;
    },
  },
});

export const {
  setLoading,
  setError,
  addTask,
  updateTask,
  deleteTask,
  setFilter,
  hydrateTasks,
} = taskSlice.actions;

export default taskSlice.reducer;