import React from 'react';
import { Edit, Trash2 } from 'lucide-react';

interface TaskActionsProps {
  onEdit: () => void;
  onDelete: () => void;
}

export const TaskActions: React.FC<TaskActionsProps> = ({ onEdit, onDelete }) => {
  return (
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
  );
};