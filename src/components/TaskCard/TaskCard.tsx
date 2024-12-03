import React from 'react';
import { format } from 'date-fns';
import { CheckCircle2, Circle } from 'lucide-react';
import { Task } from '../../types/task';
import { TaskActions } from './TaskActions';

interface TaskCardProps {
  task: Task;
  onComplete: () => void;
  onDelete: () => void;
  onEdit: () => void;
}

const priorityColors = {
  low: 'bg-blue-500',
  medium: 'bg-yellow-500',
  high: 'bg-red-500',
};

export const TaskCard: React.FC<TaskCardProps> = ({
  task,
  onComplete,
  onDelete,
  onEdit,
}) => {
  const isOverdue = new Date(task.dueDate) < new Date() && !task.completed;

  return (
    <div className="bg-slate-800 rounded-lg p-4 mb-4 relative overflow-hidden">
      <div className={`absolute top-0 left-0 w-1 h-full ${priorityColors[task.priority]}`} />
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <button
            onClick={onComplete}
            className={`${
              task.completed ? 'text-purple-500' : 'text-gray-400'
            } hover:text-purple-600 transition-colors`}
          >
            {task.completed ? (
              <CheckCircle2 className="w-6 h-6" />
            ) : (
              <Circle className="w-6 h-6" />
            )}
          </button>
          <div>
            <h3
              className={`text-lg font-semibold ${
                task.completed ? 'text-gray-500 line-through' : 'text-white'
              }`}
            >
              {task.title}
            </h3>
            <p className="text-gray-400 text-sm">{task.description}</p>
            <div className="flex items-center space-x-2 mt-1">
              <p className={`text-xs ${isOverdue ? 'text-red-400' : 'text-gray-500'}`}>
                Due: {format(new Date(task.dueDate), 'MMM dd, yyyy')}
              </p>
              <span className={`text-xs px-2 py-0.5 rounded ${priorityColors[task.priority]} bg-opacity-20 text-${task.priority === 'medium' ? 'yellow' : task.priority}-400`}>
                {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
              </span>
            </div>
          </div>
        </div>
        <TaskActions onEdit={onEdit} onDelete={onDelete} />
      </div>
    </div>
  );
};