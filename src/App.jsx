import { useState } from 'react'
import "./App.css"
import Tasks from './components/Tasks';

function App() {

  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange =(e) => {
    setNewTask(e.target.value);
  }

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      isCompleted: false,
    }
    setTodoList([...todoList, task]);
  }

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  }

  return (
    <div>
      <div className=''>
        <input onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='list'>
        {todoList.map((task) => {
          return <div>
            <Tasks name={task.taskName} id={task.id} deleteTask={deleteTask}/>
          </div>
        })}
      </div>
    </div>
  )
}

export default App