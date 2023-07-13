import React, { useState } from 'react'
import TaskList from '../../components/TaskList/TaskList'
import './MissedTask.css'


function MissedTask() {
  const [userStatus, setStatus] = useState(true);
  const [todos, setTodos] = useState([
    {
      heading: "Task2bhthytjjuykuiilo;po;po'p'",
      description:
        "This is task is need to be done task is need to be donetask is need to be donetask is need to be done",
      instruction: `1. Start doing it 
                   2. then start to do `,
      tag: "College",
      priority: "low",
      status: 20,
      Due_Date: "12/3/2023",
    },
    {
      heading: "Task2",
      description:
        "This is task is need to be done task is need to be donetask is need to be donetask is need to be done",
      instruction: `1. Start doing it 
                   2. then start to do `,
      tag: "College",
      priority: "low",
      status: 39,
      Due_Date: "12/3/2023",
    },
    {
      heading: "Task2",
      description:
        "This is task is need to be done task is need to be donetask is need to be donetask is need to be done",
      instruction: `1. Start doing it 
                   2. then start to do `,
      tag: "College",
      priority: "average",
      status: 59,
      Due_Date: "12/3/2023",
    },
    {
      heading: "Task2",
      description:
        "This is task is need to be done task is need to be donetask is need to be donetask is need to be done",
      instruction: `1. Start doing it 
                   2. then start to do `,
      tag: "College",
      priority: "normal",
      status: 13,
      Due_Date: "12/3/2023",
    },
    {
      heading: "Task2",
      description:
        "This is task is need to be done task is need to be donetask is need to be donetask is need to be done",
      instruction: `1. Start doing it 
                   2. then start to do `,
      tag: "College",
      priority: "high",
      status: 45,
      Due_Date: "12/3/2023",
    },
    {
      heading: "Task2",
      description:
        "This is task is need to be done task is need to be donetask is need to be donetask is need to be done",
      instruction: `1. Start doing it 
                   2. then start to do `,
      tag: "College",
      priority: "low",
      status: 20,
      Due_Date: "12/3/2023",
    },

    {
      heading: "Task3",
      description: "This is task is need to be done",
      instruction: ``,
      tag: "College",
      priority: "normal",
      status: 99,
      Due_Date: "12/3/2023",
    },
    {
      heading: "Task4",
      description: "This is task is need to be done",
      instruction: `1.do`,
      tag: "College",
      priority: "low",
      status: 90,
      Due_Date: "12/3/2023",
    },
    {
      heading: "Task4",
      description: "This is task is need to be done",
      instruction: `1.do`,
      tag: "College",
      priority: "average",
      status: 50,
      Due_Date: "12/3/2023",
    },
    {
      heading: "Task4",
      description: "This is task is need to be done",
      instruction: `1.do`,
      tag: "College",
      priority: "high",
      status: 20,
      Due_Date: "12/3/2023",
    },
  ]);
  return (
    <div className='missedTask'>
      {userStatus?<div>
        {todos.length===0?<div><h4>There is no Missed Task... Your are on Progress...!</h4></div>:
          <TaskList task={"Missed Tasks"} todos={todos} format={"tasks"} />
        }
      </div>:<div className="noRegularTaskUser">
      <button className='btnLogin'>Log In</button>
        </div>}
    </div>
  )
}

export default MissedTask