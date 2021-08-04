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

  return (
    <div className="container">
      <Header title='hello'/>
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
