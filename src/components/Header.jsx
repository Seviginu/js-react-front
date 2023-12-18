
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
        

const Header = (hits) => {
    const user = localStorage.getItem("user");
    const navigate = useNavigate();

    const onLogout = (e) => {
        localStorage.clear();
        navigate("/");
    }
    return (
        <div className="header">
            <p>Current user: {user}</p>
            <Button label="Logout" onClick={onLogout}/>
        </div>
        
    )
}

export default Header;