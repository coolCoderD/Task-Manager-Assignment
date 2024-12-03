import React from 'react';
import { TaskPriority } from '../../types/task';

interface TaskFormInputProps {
  type: 'text' | 'textarea' | 'date' | 'select';
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  options?: { value: TaskPriority; label: string }[];
}

export const TaskFormInput: React.FC<TaskFormInputProps> = ({
  type,
  value,
  onChange,
  placeholder,
  error,
  options,
}) => {
  const baseClassName = "w-full bg-slate-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500";
  const errorClassName = error ? "ring-2 ring-red-500" : "";

  if (type === 'textarea') {
    return (
      <div className="space-y-1">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`${baseClassName} ${errorClassName}`}
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>
    );
  }

  if (type === 'select' && options) {
    return (
      <div className="space-y-1">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`${baseClassName} ${errorClassName}`}
        >
          <option value="">Select priority</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>
    );
  }

  return (
    <div className="space-y-1">
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`${baseClassName} ${errorClassName}`}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};