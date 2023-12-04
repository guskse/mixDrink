import Wrapper from "../assets/wrappers/ErrorPage";  //styled components

import { Link, useRouteError } from "react-router-dom";
import img from "../assets/not-found.svg";




const Error = () => {
  const error = useRouteError();
  console.log(error);

  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="Not Found"></img>
          <h3>Ohh!</h3>
          <p>We can't find the page you're looking for...</p>
          <Link to="/">Back Home</Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div>
        <h3>Something went wrong</h3>
      </div>
    </Wrapper>
  );
};

export default Error;
