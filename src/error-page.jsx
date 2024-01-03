import { useRouteError } from "react-router-dom";

/** Note that useRouteError {@link https://reactrouter.com/en/main/hooks/use-route-error useRouteError} provides the error that
 *  was thrown. When the user navigates to routes
 *  that don't
 *  exist you'll get an {@link https://reactrouter.com/en/main/utils/is-route-error-response error response} with a
 *  "Not Found" statusText.*/
export default function ErrorPage () {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
