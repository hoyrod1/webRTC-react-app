// This page will retrieve the encrypted data for the video chat the clients will access
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

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
  return <h1>Welcome {apptInfo.professionalFullName}</h1>;
};

export default MainVideoPage;
