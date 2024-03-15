
/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import {useState} from 'react';
import {SafeAreaView} from 'react-native';
import ToDoForm from './Components/ToDoForm';
import ToDoList from './Components/ToDoList';


function App() {
  const TaskstoDo = [
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ];
  const addTask = (taskText) => {
    setTasks([...tasks, taskText]);
  };
const [tasks, setTasks] = useState(TaskstoDo);
  return (
    <SafeAreaView>
      <ToDoForm addTask={addTask} />
      <ToDoList tasks={tasks}/>
    </SafeAreaView>
  );
}


export default App;