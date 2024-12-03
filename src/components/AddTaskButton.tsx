import React from 'react';
import { Plus } from 'lucide-react';

interface AddTaskButtonProps {
  onClick: () => void;
}

export const AddTaskButton: React.FC<AddTaskButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 right-8 bg-purple-600 hover:bg-purple-700 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-colors"
      aria-label="Add new task"
    >
      <Plus className="w-6 h-6" />
    </button>
  );
};