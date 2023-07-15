import React, { useContext, useState } from "react";
import Upcoming from "@mui/icons-material/FileUploadRounded";
import { Slider } from "@mantine/core";
import { AuthContext } from "../../context/AutheContext";

function UpdateTask() {

  const {currentUser} = useContext(AuthContext)
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [instruction, setInstruction] = useState("");
  const [dueDate, setDueDate] = useState(null);
  const [tags, setTags] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");
  const [value, setValue] = useState(0);
  const [mark, setmark] = useState(false)

  const addTask = (e) => {
    e.preventDefault();
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
        
          <span>
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
          </span>
          <span>
            <label htmlFor="task-dueDate">Set Due Date (optional)</label>
            {currentUser ? (
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
          <label htmlFor="regulat-task">Regular Task(optional)</label>
          <input
            name="regular-task"
            type="checkbox"
            style={{ marginLeft: "2rem" }}
          />
        </span>
        <span>
          <label htmlFor="marke-as-completed">Mark as completed</label>
          <input
            name="marke-as-completed"
            type="checkbox"
            style={{ marginLeft: "2rem" }}
            onChange={()=> setmark(!mark)}
          />          
        <span style={{marginLeft:'2rem'}}>Set Progress <Slider aria-label="Volume" value={mark?100:value} sx={{width:'30%',display:"inline-flex"}} onChange={handleChange} /></span>
        </span>

        <button type="submit" className="btn-success">
          <Upcoming />
          <span>Update Task</span>
        </button>
      </form>
    </div>
  );
}

export default UpdateTask;
