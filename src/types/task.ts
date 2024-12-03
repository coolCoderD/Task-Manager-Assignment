export type TaskPriority = 'low' | 'medium' | 'high';

export interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  priority: TaskPriority;
  completed: boolean;
  createdAt: string;
}

export interface TaskFormData {
  title: string;
  description: string;
  dueDate: string;
  priority: TaskPriority;
}

export type TaskFilter = 'all' | 'completed' | 'pending' | 'overdue';