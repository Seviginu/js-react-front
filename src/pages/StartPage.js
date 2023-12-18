import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import { useEffect } from "react";

function StartPage() {
  const navigate = useNavigate();
  useEffect(() =>{
    if(localStorage.getItem("user"))
      navigate("/main");
    }, []);
    return (
      <div>
        <LoginForm/>
      </div>
    );
  }
  
  export default StartPage;