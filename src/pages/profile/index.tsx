import { useDispatch } from "../../hooks";
import { clearAuth } from "../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";


export default function ProfilePage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div className="ProfilePage">
            <h1>
                go to <button onClick={() =>(dispatch(clearAuth()) , navigate('/')) }>logout</button>
            </h1>
        </div>
    );
}