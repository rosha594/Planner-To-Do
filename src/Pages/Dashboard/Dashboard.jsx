import React from "react";
import "./Dashboard.css";
import { useState } from "react";
import Button from "@mui/material/Button";
import TaskIcon from "@mui/icons-material/TaskAltOutlined";
import InputModal from "../../components/InputModal/InputModal";
import TodaysTask from "../../components/TaskList/TaskList";

function Dashboard() {
  const [userStatus, setUserStatus] = useState(false);
  const [todos, setTodos] = useState([
    {
      heading: "Task2bhthytjjuykuiilo;po;po'p'",
      description:"This is task is need to be done task is need to be donetask is need to be donetask is need to be done",
      instruction:`1. Start doing it 
                   2. then start to do `,
      tag:"College",
      priority:"low",
      status:20,
      Due_Date: "12/3/2023",
    },
    {
      heading: "Task2",
      description:"This is task is need to be done task is need to be donetask is need to be donetask is need to be done",
      instruction:`1. Start doing it 
                   2. then start to do `,
      tag:"College",
      priority:"low",
      status:39,
      Due_Date: "12/3/2023",
    },
    {
      heading: "Task2",
      description:"This is task is need to be done task is need to be donetask is need to be donetask is need to be done",
      instruction:`1. Start doing it 
                   2. then start to do `,
      tag:"College",
      priority:"average",
      status:59,
      Due_Date: "12/3/2023",
    },
    {
      heading: "Task2",
      description:"This is task is need to be done task is need to be donetask is need to be donetask is need to be done",
      instruction:`1. Start doing it 
                   2. then start to do `,
      tag:"College",
      priority:"normal",
      status:13,
      Due_Date: "12/3/2023",
    },
    {
      heading: "Task2",
      description:"This is task is need to be done task is need to be donetask is need to be donetask is need to be done",
      instruction:`1. Start doing it 
                   2. then start to do `,
      tag:"College",
      priority:"high",
      status:45,
      Due_Date: "12/3/2023",
    },
    {
      heading: "Task2",
      description:"This is task is need to be done task is need to be donetask is need to be donetask is need to be done",
      instruction:`1. Start doing it 
                   2. then start to do `,
      tag:"College",
      priority:"low",
      status:20,
      Due_Date: "12/3/2023",
    },
    
    {
      heading: "Task3",
      description:"This is task is need to be done",
      instruction:``,
      tag:"College",
      priority:"normal",
      status:99,
      Due_Date: "12/3/2023",
    },
    {
      heading: "Task4",
      description:"This is task is need to be done",
      instruction:`1.do`,
      tag:"College",
      priority:"low",
      status:90,
      Due_Date: "12/3/2023",
    },
    {
      heading: "Task4",
      description:"This is task is need to be done",
      instruction:`1.do`,
      tag:"College",
      priority:"average",
      status:50,
      Due_Date: "12/3/2023",
    },
    {
      heading: "Task4",
      description:"This is task is need to be done",
      instruction:`1.do`,
      tag:"College",
      priority:"high",
      status:20,
      Due_Date: "12/3/2023",
    },
  ]);

  const [modalOpened, setModalStatus] = useState(false);
  return (
    <div className="dashboard">
      {userStatus ? (
        <div className="userMode">n</div>
      ) : (
        <div className="guestMode">
          <button
            className="btn-success"
            onClick={() => {
              setModalStatus(true);
            }}
          >
            <TaskIcon />
            Add New Task
          </button>
          <InputModal
            modalOpened={modalOpened}
            setModalStatus={setModalStatus}
            userStatus={userStatus}
            inputFormat={"Add New Task"}
          />
          <TodaysTask task={"Today's Task"}todos={todos} format={"list"}/>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
