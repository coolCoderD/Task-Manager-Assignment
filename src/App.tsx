import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, updateTask, deleteTask } from './store/taskSlice';
import { TaskCard } from './components/TaskCard/TaskCard';
import { TaskForm } from './components/TaskForm/TaskForm';
import { TaskFilters } from './components/TaskFilters/TaskFilters';
import { AddTaskButton } from './components/AddTaskButton';
import { Modal } from './components/common/Modal';
import { Task, TaskFormData } from './types/task';
import { useFilteredTasks } from './hooks/useFilteredTasks';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const dispatch = useDispatch();
  const { tasks } = useLocalStorage();
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const filteredTasks = useFilteredTasks(tasks);

  const handleAddTask = (formData: TaskFormData) => {
    const newTask: Task = {
      id: Date.now().toString(),
      ...formData,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    dispatch(addTask(newTask));
    setIsModalOpen(false);
  };

  const handleUpdateTask = (formData: TaskFormData) => {
    if (editingTask) {
      const updatedTask: Task = {
        ...editingTask,
        ...formData,
      };
      dispatch(updateTask(updatedTask));
      setEditingTask(null);
      setIsModalOpen(false);
    }
  };

  const handleCompleteTask = (task: Task) => {
    dispatch(updateTask({ ...task, completed: !task.completed }));
  };

  const handleDeleteTask = (id: string) => {
    dispatch(deleteTask(id));
  };

  const handleEditClick = (task: Task) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setEditingTask(null);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl font-bold mb-4">Task Management</h1>
            <TaskFilters />
          </header>

          <div className="space-y-4">
            {filteredTasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onComplete={() => handleCompleteTask(task)}
                onDelete={() => handleDeleteTask(task.id)}
                onEdit={() => handleEditClick(task)}
              />
            ))}
            {filteredTasks.length === 0 && (
              <p className="text-center text-gray-400 py-8">No tasks found</p>
            )}
          </div>

          <AddTaskButton onClick={() => setIsModalOpen(true)} />

          <Modal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            title={editingTask ? 'Edit Task' : 'Add New Task'}
          >
            <TaskForm
              onSubmit={editingTask ? handleUpdateTask : handleAddTask}
              initialData={editingTask}
              isEditing={!!editingTask}
            />
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default App;