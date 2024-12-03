import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FilterButtonProps {
  active: boolean;
  onClick: () => void;
  icon: LucideIcon;
  label: string;
}

export const FilterButton: React.FC<FilterButtonProps> = ({
  active,
  onClick,
  icon: Icon,
  label,
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg flex items-center space-x-2 ${
        active
          ? 'bg-purple-600 text-white'
          : 'bg-slate-800 text-gray-400'
      }`}
    >
      <Icon className="w-5 h-5" />
      <span>{label}</span>
    </button>
  );
};