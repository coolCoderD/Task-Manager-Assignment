import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  onClick?: () => void;
  type?: 'button' | 'submit';
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  icon: Icon,
  children,
  className = '',
}) => {
  const baseStyles = 'flex items-center justify-center rounded-lg transition-colors';
  
  const variantStyles = {
    primary: 'bg-purple-600 hover:bg-purple-700 text-white',
    secondary: 'bg-slate-800 hover:bg-slate-700 text-gray-400',
    danger: 'bg-red-600 hover:bg-red-700 text-white',
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {Icon && <Icon className="w-5 h-5 mr-2" />}
      {children}
    </button>
  );
};