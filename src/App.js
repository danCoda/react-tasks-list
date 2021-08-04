import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';

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
        reminder: true
    }
  ]);

  // Delete task.
  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <div className="container">
      <Header title='hello'/>
      { tasks.length > 0 ? 
        (
          <Tasks tasks={tasks} onDelete={deleteTask} /> 
        )
        : 
        ('No tasks to show...') 
      }
    </div>
  );
}

export default App;
