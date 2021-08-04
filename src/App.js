import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

const App = () => {

  const [tasks, setTasks] = useState([
    {
        id:1,
        text:"Eat food",
        day:"Monday 12th June",
        reminder: true
    },
    {
        id:2,
        text:"Shower",
        day:"Wednesday 15th June",
        reminder: true
    },
    {
        id:3,
        text:"Sleep",
        day:"Saturday 18th June",
        reminder: false
    }
  ]);

  // Add task.
  const addTask = task => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };
    setTasks([ ...tasks, newTask ]);
  }

  // Delete task.
  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  // Toggle reminder. 
  const toggleReminder = id => {
    setTasks(tasks.map(task => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header title='hello'/>
      <AddTask onAdd={addTask} />
      { tasks.length > 0 ? 
        (
          <Tasks 
            tasks={tasks} 
            onDelete={deleteTask} 
            onToggle={toggleReminder}
          /> 
        )
        : 
        ('No tasks to show...') 
      }
    </div>
  );
}

export default App;
