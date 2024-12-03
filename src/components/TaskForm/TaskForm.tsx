import React, { useState, useEffect } from 'react';
import { Plus, Save } from 'lucide-react';
import { TaskFormInput } from './TaskFormInput';
import { Task, TaskFormData, TaskPriority } from '../../types/task';
import { validateTaskForm } from '../../utils/validation';
import { Button } from '../common/Button';

interface TaskFormProps {
  onSubmit: (data: TaskFormData) => void;
  initialData?: Task;
  isEditing?: boolean;
}

const priorityOptions = [
  { value: 'low' as TaskPriority, label: 'Low' },
  { value: 'medium' as TaskPriority, label: 'Medium' },
  { value: 'high' as TaskPriority, label: 'High' },
];

export const TaskForm: React.FC<TaskFormProps> = ({
  onSubmit,
  initialData,
  isEditing = false,
}) => {
  const [formData, setFormData] = useState<TaskFormData>({
    title: '',
    description: '',
    dueDate: '',
    priority: 'medium',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title,
        description: initialData.description,
        dueDate: initialData.dueDate,
        priority: initialData.priority,
      });
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateTaskForm(formData);

    if (validationErrors.length > 0) {
      const errorMap: Record<string, string> = {};
      validationErrors.forEach((error) => {
        const [field] = error.toLowerCase().split(' ');
        errorMap[field] = error;
      });
      setErrors(errorMap);
      return;
    }

    onSubmit(formData);
    if (!isEditing) {
      setFormData({
        title: '',
        description: '',
        dueDate: '',
        priority: 'medium',
      });
    }
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <TaskFormInput
        type="text"
        value={formData.title}
        onChange={(value) => setFormData({ ...formData, title: value })}
        placeholder="Task title"
        error={errors.title}
      />
      <TaskFormInput
        type="textarea"
        value={formData.description}
        onChange={(value) => setFormData({ ...formData, description: value })}
        placeholder="Task description"
        error={errors.description}
      />
      <TaskFormInput
        type="date"
        value={formData.dueDate}
        onChange={(value) => setFormData({ ...formData, dueDate: value })}
        error={errors.dueDate}
      />
      <TaskFormInput
        type="select"
        value={formData.priority}
        onChange={(value) => setFormData({ ...formData, priority: value as TaskPriority })}
        options={priorityOptions}
        error={errors.priority}
      />
      <Button
        type="submit"
        variant="primary"
        icon={isEditing ? Save : Plus}
        className="w-full"
      >
        {isEditing ? 'Update Task' : 'Add Task'}
      </Button>
    </form>
  );
};