import { Task } from '../types/task';

const STORAGE_KEY = 'task-management-data';

interface StorageData {
  tasks: Task[];
  lastUpdated: string;
}

export const loadFromStorage = (): StorageData | null => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return null;
    
    const parsedData = JSON.parse(data) as StorageData;
    
    // Validate the structure of loaded data
    if (!Array.isArray(parsedData.tasks)) {
      console.error('Invalid data structure in localStorage');
      return null;
    }
    
    return parsedData;
  } catch (error) {
    console.error('Error loading data from localStorage:', error);
    return null;
  }
};

export const saveToStorage = (tasks: Task[]): void => {
  try {
    const data: StorageData = {
      tasks,
      lastUpdated: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving data to localStorage:', error);
  }
};