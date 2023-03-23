import { Link } from "react-router-dom";
import "./error.css";

function Error() {
    return (
        <div className="not-found">
            <h2>Page not found!</h2>
            <Link to="/" className="back">
                Back to home page
            </Link>
        </div>
    );
}

export default Error;
