import { Link } from "react-router-dom"


export default function SignUp() {
    return (
        <div className="SignUp">
            <form>
                <input type="text" />
                <input type="password" />
                <input type="password" />
                <button type="submit">sign up</button>
            </form>
            <h1>
                go to <Link to="/login">Login</Link>
            </h1>
        </div>
    );
}