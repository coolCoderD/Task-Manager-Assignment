# Task Management Application

A modern, feature-rich task management application built with React, TypeScript, and Redux. This application helps users organize their tasks with a beautiful, responsive interface and persistent storage.

![Task Management App Screenshot](https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=2072)

## Features

- ✨ Modern, responsive UI with dark theme
- 📝 Create, edit, and delete tasks
- ⏰ Due date tracking with overdue detection
- 🎯 Priority levels (Low, Medium, High)
- 🔍 Filter tasks by status
- 💾 Persistent storage using localStorage
- ⌨️ Keyboard accessibility
- 📱 Mobile-friendly design

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Features in Detail](#features-in-detail)
- [Architecture](#architecture)
- [Contributing](#contributing)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/task-management-app.git

# Navigate to project directory
cd task-management-app

# Install dependencies
npm install

# Start development server
npm run dev
```

## Usage

### Creating a Task

1. Click the "+" button in the bottom right corner
2. Fill in the task details:
   - Title (required)
   - Description (required)
   - Due Date (required)
   - Priority (Low/Medium/High)
3. Click "Add Task" to save

### Managing Tasks

```typescript
// Example of creating a task using the Redux store
import { addTask } from './store/taskSlice';

const newTask = {
  id: Date.now().toString(),
  title: 'Complete project',
  description: 'Finish the task management app',
  dueDate: '2024-03-20',
  priority: 'high',
  completed: false,
  createdAt: new Date().toISOString(),
};

dispatch(addTask(newTask));
```

## Configuration

### Environment Variables

No environment variables are required for basic functionality.

### TypeScript Configuration

The project uses TypeScript with strict mode enabled. Key configurations:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "strict": true,
    "jsx": "react-jsx"
  }
}
```

## Features in Detail

### Task Filtering

Tasks can be filtered by:
- All Tasks
- Completed Tasks
- Pending Tasks
- Overdue Tasks

### Data Persistence

Tasks are automatically saved to localStorage when:
- Creating new tasks
- Updating existing tasks
- Deleting tasks
- Marking tasks as complete/incomplete

### Priority System

Tasks can be assigned one of three priority levels:
- Low (Blue)
- Medium (Yellow)
- High (Red)

## Architecture

### Tech Stack

- React 18.3
- TypeScript 5.5
- Redux Toolkit
- TailwindCSS
- Lucide Icons
- date-fns

### Project Structure

```
src/
├── components/          # React components
│   ├── TaskCard/       # Task display components
│   ├── TaskForm/       # Task creation/editing forms
│   ├── TaskFilters/    # Filtering components
│   └── common/         # Reusable UI components
├── store/              # Redux store configuration
├── hooks/              # Custom React hooks
├── services/           # External services (localStorage)
├── types/              # TypeScript type definitions
└── utils/              # Utility functions
```

## Contributing

1. Fork the repository
2. Create a feature branch
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. Commit your changes
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. Push to the branch
   ```bash
   git push origin feature/amazing-feature
   ```
5. Open a Pull Request

## Troubleshooting

### Common Issues

1. **Tasks not saving:**
   - Check if localStorage is enabled in your browser
   - Clear browser cache and reload

2. **Filters not working:**
   - Ensure Redux DevTools shows correct state
   - Verify task dates are valid

3. **UI not updating:**
   - Check Redux connection
   - Verify component re-rendering

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with ❤️ using React and TypeScript