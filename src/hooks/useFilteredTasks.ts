import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Task } from '../types/task';

export const useFilteredTasks = (tasks: Task[]) => {
  const filter = useSelector((state: RootState) => state.tasks.filter);

  return tasks.filter((task) => {
    switch (filter) {
      case 'completed':
        return task.completed;
      case 'pending':
        return !task.completed;
      case 'overdue':
        return !task.completed && new Date(task.dueDate) < new Date();
      default:
        return true;
    }
  });
};