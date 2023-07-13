import React, { useState } from 'react'
import TaskIcon from "@mui/icons-material/TaskAltOutlined";

function AddTask({userStatus}) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [instruction, setInstruction] = useState("");
    const [dueDate, setDueDate] = useState(null);
    const [tags, setTags] = useState("");
    const [priority, setPriority] = useState("");
    const [status, setStatus] = useState("");


    const addTask = (e)=> {
        e.preventDefault();
        }

  return (
    <div>
        <form className="modal-form" onSubmit={addTask}>
          <label htmlFor="task-title">Task Title</label>
          <input
            name="task-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Add Title Here"
          />
          <label htmlFor="task-description">Task Description (optional)</label>
          <input
            name="task-description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Add Description Here"
          />
          <label htmlFor="task-instruction">Task Instructions (optional)</label>
          <input
            name="task-instruction"
            value={instruction}
            onChange={(e) => setInstruction(e.target.value)}
            placeholder="Add Task Instructions.."
          />
          <label htmlFor="task-tags">Give Tags (optional)</label>
          <input
            name="task-tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="Add Tags.."
          />
          <label htmlFor="task-priority">Set Priority Level (optional)</label>
          <span>
            <input name="task-priority" type="radio" />
            Normal
            <input name="task-priority" type="radio" />
            High
            <input name="task-priority" type="radio" />
            Average
            <input name="task-priority" type="radio" />
            Low
          </span>
          <span>
          <label htmlFor="task-dueDate">Set Due Date (optional)</label>
          {userStatus ? (
            <input
              type="date"
              onChange={(e) => setDueDate(e.target.value)}
              name="task-dueDate"
            />
          ) : (
            <span onClick={() => alert("login")} className="btn-direct">
              Log In to set Due Date
            </span>
          )}
          </span>

          <span>
          <label htmlFor="regulat-task">Set Priority Level (optional)</label>
          
            <input name="regular-task" type="checkbox" style={{marginLeft:"2rem"}}/>
            Regular Task
          </span>

          <button type="submit" className="btn-success"><TaskIcon /><span>Add Task</span></button>
        </form>
    </div>
  )
}

export default AddTask