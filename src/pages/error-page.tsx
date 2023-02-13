import { useRouteError } from "react-router-dom"

export default function ErrorPage(): JSX.Element {
    // const error = useRouteError();
    // console.log(error);
    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occured.</p>
            <p>
                {/* <i>{error}</i> */}
            </p>
        </div>
    )

}