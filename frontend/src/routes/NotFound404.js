import { Link } from "react-router-dom";

const NotFound404 = () => {
  return (
    <div>
      <h1>404: Page Not Found</h1>
      <Link to="/">Go Back To Home Page</Link>
    </div>
  );
};

export default NotFound404;
