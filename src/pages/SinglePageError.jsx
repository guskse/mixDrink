import { useRouteError } from "react-router-dom";

const singlePageError = () => {
  const error = useRouteError();
  console.log(error);
  return <h2>There was an error...</h2>;
};

export default singlePageError;
