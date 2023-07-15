import React, { useState } from "react";
import "./RightSideBar.css";
import UserProfile from "../../Pages/UserProfile/UserProfile";
import Progress from "@mui/icons-material/LeaderboardRounded";
import Upcoming from "@mui/icons-material/FileUploadRounded";
import InputModal from "../InputModal/InputModal";

function RightSideBar() {
  const [userStatus, setStatus] = useState(false);
  const [modalOpened, setModalStatus] = useState(false);
  return (
    <div className="rightSidebar">
      {userStatus ? (
        <UserProfile />
      ) : (
        <div className="noUserBlock">
          <button   onClick={() => {
              setModalStatus(true);
            }}>Log In</button>
          <InputModal
            modalOpened={modalOpened}
            setModalStatus={setModalStatus}
            userStatus={userStatus}
            inputFormat={"Log In"}
          />
          <div style={{position:'absolute',top:"15rem",}}>
            <div className="progress">
              <h3>
                Track Your Progress...
                <Progress sx={[{ color: "purple", fontSize: "2rem" }]} />
              </h3>
            </div>
            <div className="upcoming">
              <h3>
                See Upcoming Tasks....
                <Upcoming sx={[{ color: "purple", fontSize: "2rem" }]} />
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RightSideBar;
