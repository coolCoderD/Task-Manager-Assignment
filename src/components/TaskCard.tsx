import React from 'react';
import { format } from 'date-fns';
import { CheckCircle2, Circle, Trash2, Edit } from 'lucide-react';
import { Task } from '../types/task';

interface TaskCardProps {
  task: Task;
  onComplete: () => void;
  onDelete: () => void;
  onEdit: () => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({
  task,
  onComplete,
  onDelete,
  onEdit,
}) => {
  return (
    <div className="bg-slate-800 rounded-lg p-4 mb-4">
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
            <p className="text-gray-500 text-xs mt-1">
              Due: {format(new Date(task.dueDate), 'MMM dd, yyyy')}
            </p>
          </div>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={onEdit}
            className="text-gray-400 hover:text-purple-500 transition-colors"
          >
            <Edit className="w-5 h-5" />
          </button>
          <button
            onClick={onDelete}
            className="text-gray-400 hover:text-red-500 transition-colors"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};