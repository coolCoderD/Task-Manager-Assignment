import { TaskFormData } from '../types/task';

export const validateTaskForm = (data: Partial<TaskFormData>): string[] => {
  const errors: string[] = [];

  if (!data.title?.trim()) {
    errors.push('Title is required');
  } else if (data.title.length < 3) {
    errors.push('Title must be at least 3 characters long');
  }

  if (!data.description?.trim()) {
    errors.push('Description is required');
  }

  if (!data.dueDate) {
    errors.push('Due date is required');
  } else {
    const dueDate = new Date(data.dueDate);
    if (isNaN(dueDate.getTime())) {
      errors.push('Invalid due date');
    }
  }

  if (!data.priority) {
    errors.push('Priority is required');
  }

  return errors;
};