// This page will retrieve the encrypted data for the video chat the clients will access
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import "./VideoComponents.css";
import CallInfo from "./CallInfo";
import ChatWindow from "./ChatWindow";
import ActionButtons from "./ActionButtons";

const MainVideoPage = () => {
  // Get query string finder hook
  const [searchParams, setSearchParams] = useSearchParams();
  // Set the state for the user with an appointment
  const [apptInfo, setApptInfo] = useState({});

  useEffect(() => {
    // Retrieve the key from the URL parameter
    const token = searchParams.get("token");
    console.log(token);
    // Fetch the decoded token
    const fetchDecodedToken = async () => {
      const resp = await axios.post("https://localhost:8000/validate-link", {
        token,
      });
      console.log(resp.data);
      setApptInfo(resp.data);
    };
    fetchDecodedToken();
  }, []);
  return (
    <div className="main-video-page">
      <div className="video-chat-wrapper">
        <video id="large-feed" autoPlay controls playsInline></video>
        <video id="own-feed" autoPlay controls playsInline></video>
        {apptInfo.professionalsFullName ? (
          <CallInfo apptInfo={apptInfo} />
        ) : (
          <></>
        )}
        <ChatWindow />
      </div>
      <ActionButtons />
    </div>
  );
};

export default MainVideoPage;
