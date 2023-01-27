import { useRouteError } from "react-router-dom";


const Error = () => {
    const err = useRouteError();
    console.log(err)
    return (
    <div>
        <h1>Oops!</h1>
        <h2>Something is wrong</h2>
        <h3>{"Error Status is "+err.status}</h3>
        <h4>{"Error Text is "+err.text}</h4>
    </div>
    )
};
export default Error;