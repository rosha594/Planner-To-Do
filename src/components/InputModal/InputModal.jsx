import { useDisclosure } from "@mantine/hooks";
import { Modal, useMantineTheme } from "@mantine/core";

import { useState } from "react";
import "./InputModal.css";
import AddTask from "../AddTask/AddTask";
import UpdateTask from "../UpdateTask/UpdateTask";
import AuthPage from "../AuthPage/AuthPage";

function InputModal({ modalOpened, setModalStatus, userStatus,inputFormat }) {
  const theme = useMantineTheme();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [instruction, setInstruction] = useState("");
  const [dueDate, setDueDate] = useState(null);
  const [tags, setTags] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");

  const format = inputFormat;
 
 
  return (
    
    <div className="modal">
      <Modal
        opened={modalOpened}
        onClose={() => setModalStatus(false)}
        title={inputFormat==="Log In"?"":inputFormat}
        overlayProps={{
          color:
            theme.colorScheme === "dark"
              ? theme.colors.dark[9]
              : theme.colors.gray[2],
          opacity: 0.55,
          blur: 3,
        }}
        size={inputFormat==="Log In"?"lg":"lg"}
      >
        
        
       
        {inputFormat==="Update Task"&&<UpdateTask userStatus={userStatus}/>}
        {inputFormat==="Add New Task"&&<AddTask setModalStatus={setModalStatus}/>}
        {inputFormat==="Log In"&&<AuthPage setModalStatus={setModalStatus}/>}
        
        

      </Modal>
    </div>
  );
}

export default InputModal;
