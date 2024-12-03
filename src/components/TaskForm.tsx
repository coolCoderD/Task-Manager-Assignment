import React, { useState } from 'react';
import { Plus } from 'lucide-react';

interface TaskFormProps {
  onSubmit: (title: string, description: string, dueDate: string) => void;
}

export const TaskForm: React.FC<TaskFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && description && dueDate) {
      onSubmit(title, description, dueDate);
      setTitle('');
      setDescription('');
      setDueDate('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 bg-slate-800 p-4 rounded-lg">
      <div className="space-y-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task title"
          className="w-full bg-slate-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Task description"
          className="w-full bg-slate-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="w-full bg-slate-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 transition-colors"
        >
          <Plus className="w-5 h-5" />
          <span>Add Task</span>
        </button>
      </div>
    </form>
  );
};