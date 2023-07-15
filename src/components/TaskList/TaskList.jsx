import React, { useState } from "react";
import "./TaskList.css";
import InputModal from "../../components/InputModal/InputModal";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';



function TaskList({ task,todos, format }) {
  
  const [modalOpened, setModalStatus] = useState(false);
  const setClass = (priority) => {
    if (priority === "low") return format + " low";
    else if (priority === "normal") return format;
    else if (priority === "average") return format + " average";
    else if (priority === "high") return format + " high";
  };

  const setProgress = (status) => {
    if (status <= 20) return `${format} progress-bar p-20`;
    else if (status <= 70 && status > 20) return `${format} progress-bar p-70`;
    else if (status <= 90 && status > 70) return `${format} progress-bar p-90`;
    else if (status <= 100 && status > 90) return `${format} progress-bar p-100`;
  };


  return (
    <>
    <div style={{ width: "100%", height: "100%" }} >
      {todos.length!== 0 ? (
        <>
          <h2 style={{ float:"left"}}>{task}</h2>
          <div className="taskList">
            {todos.map((todo) => (
             
                
                <div className={setClass(todo.priority)} style={{height:task==="Completed Tasks"?"8rem":""}}>
                <span>{todo.heading}</span>
                <span>{todo.description}</span>
                {todo.tag===""?<span>No Tags</span>:<span>{todo.tag}</span>}
                {todo.priority === "" ? (
                  <span></span>
                ) : (
                  <span>Priority : {todo.priority}</span>
                )}
                <div class="progress-bar__container">
                  <span
                    class={setProgress(todo.status)}
                    style={{ width: `${todo.status}%` }}
                  ></span>
                </div>
                {task!=="Completed Tasks"?
                <span className='buttons'>
                <EditIcon className="btn-edit" onClick={() => {
      setModalStatus(true);
    }}/>
                <DeleteIcon className="btn-delete"/>
                
                </span>
                :""}
              </div>
              
            ))}
          </div>
        </>
      ) : (
        <h1 style={{ width: "50rem", height: "10rem", margin: "3rem auto 0px auto" }}>
          No {task==="Today's Task"?"Task for Today":`${task}`}  {task==="Completed Tasks"?". Complete One !":`${task==="Missed Tasks"?"!":". Add New One!"}`}
        </h1>
      )}
    </div>
    {task==="Completed Tasks"?<></>:
      <InputModal
            modalOpened={modalOpened}
            setModalStatus={setModalStatus}
            inputFormat={"Update Task"}
          />}
    
    
    
    </>
  );
}

export default TaskList;
