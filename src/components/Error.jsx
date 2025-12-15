import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div>Some thing Went Wrong{error.status}</div>
  )
}

export default Error ;