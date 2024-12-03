import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { loadFromStorage } from '../services/localStorage';
import { hydrateTasks, setError } from '../store/taskSlice';

export const useLocalStorage = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  useEffect(() => {
    const storedData = loadFromStorage();
    
    if (storedData) {
      try {
        dispatch(hydrateTasks(storedData.tasks));
      } catch (error) {
        dispatch(setError('Failed to load saved tasks'));
      }
    }
  }, [dispatch]);

  return { tasks };
};