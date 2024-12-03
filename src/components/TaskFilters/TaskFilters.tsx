import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListFilter, CheckCircle2, Clock, AlertCircle } from 'lucide-react';
import { setFilter } from '../../store/taskSlice';
import { RootState } from '../../store/store';
import { FilterButton } from './FilterButton';

export const TaskFilters: React.FC = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state: RootState) => state.tasks.filter);

  const filters = [
    { id: 'all', label: 'All', icon: ListFilter },
    { id: 'completed', label: 'Completed', icon: CheckCircle2 },
    { id: 'pending', label: 'Pending', icon: Clock },
    { id: 'overdue', label: 'Overdue', icon: AlertCircle },
  ] as const;

  return (
    <div className="flex space-x-4">
      {filters.map((filter) => (
        <FilterButton
          key={filter.id}
          active={currentFilter === filter.id}
          onClick={() => dispatch(setFilter(filter.id))}
          icon={filter.icon}
          label={filter.label}
        />
      ))}
    </div>
  );
};