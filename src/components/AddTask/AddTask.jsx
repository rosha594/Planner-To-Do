import React, { useContext, useState } from 'react'
import TaskIcon from "@mui/icons-material/TaskAltOutlined";
import { AuthContext } from '../../context/AutheContext';
import { addDoc, collection, doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from '../../firebase-config';

function AddTask({setModalStatus}) {
    const {currentUser} = useContext(AuthContext)

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [instruction, setInstruction] = useState("");
    const [dueDate, setDueDate] = useState(null);
    const [tags, setTags] = useState("");
    const [priority, setPriority] = useState(null);
    const [regular,setRegular] = useState(false);


    const addTask = async (e)=> {
        e.preventDefault();
        const res = await addDoc(collection(db, "tasks"), {
          title,
          description,
          instruction,
          dueDate,
          tags,
          priority,
          regular,
          timestamp:serverTimestamp(),
          userId:currentUser.user.uid
        });
        
        setModalStatus(false);
        alert("Task Added !")
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
            required
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
            <input name="task-priority" type="radio"   onChange={()=> setPriority("High")}/>
            High
            <input name="task-priority" type="radio"   onChange={()=> setPriority("Average")}/>
            Average
            <input name="task-priority" type="radio"   onChange={()=> setPriority("Low")}/>
            Low
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
          <label htmlFor="regulat-task">Set as Regular Task (optional)</label>
          
          <input name="regular-task" type="checkbox" style={{marginLeft:"2rem"}} onChange={()=>setRegular(true)}/>
            
          </span>

          <button type="submit" className="btn-success"><TaskIcon /><span>Add Task</span></button>
        </form>
    </div>
  )
}

export default AddTask