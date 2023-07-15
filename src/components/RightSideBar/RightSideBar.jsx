import React, { useContext, useState } from "react";
import "./RightSideBar.css";
import UserProfile from "../../Pages/UserProfile/UserProfile";
import Progress from "@mui/icons-material/LeaderboardRounded";
import Upcoming from "@mui/icons-material/FileUploadRounded";
import InputModal from "../InputModal/InputModal";
import { AuthContext } from "../../context/AutheContext";

function RightSideBar() {
  const {currentUser} = useContext(AuthContext)
  console.log(currentUser)
  const [userStatus, setStatus] = useState(false);
  const [modalOpened, setModalStatus] = useState(false);
  return (
    <div className="rightBlock">
        {currentUser ? (
          <UserProfile user={currentUser}/>
        ) : (
          <>
            <button className="btn-login"  onClick={() => {
              setModalStatus(true);
            }}>Log In</button>
          <InputModal
            modalOpened={modalOpened}
            setModalStatus={setModalStatus}
            inputFormat={"Log In"}
          />
          </>
        )}
      </div>
  );
}

export default RightSideBar;
