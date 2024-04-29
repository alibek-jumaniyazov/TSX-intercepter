import { Link } from "react-router-dom";


export default function HomePage() {
    return (
        <div className="HomePage">
            <h1>
                Hello go to <Link to="/login">Login</Link> or{" "}
                <Link to="sign-up">Sign Up</Link>{" "}
            </h1>
        </div>
    );
}
