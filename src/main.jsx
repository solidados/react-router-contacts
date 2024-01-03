import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";

// routes
import Root from "./routes/root/Root.jsx";
import { rootAction } from './routes/root/rootAction.js'
import { rootLoader } from './routes/root/rootLoader.js'

import Contact from "./routes/contact/Contact.jsx";
import { contactLoader } from "./routes/contact/contactLoader.js";
import { contactAction } from "./routes/contact/contactAction.js";

import EditContact from "./routes/contact/edit/EditContact.jsx";
import { editAction } from "./routes/contact/edit/editAction.js";
import { destroyAction } from "./routes/contact/destroy/destroyAction.js";

// pages
import Index from "./routes/Index.jsx";
import ErrorPage from "./error-page.jsx";
import DestroyContactError from "./routes/contact/destroy/DestroyContactError.jsx";

// styles
import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
      loader={rootLoader}
      action={rootAction}
      errorElement={<ErrorPage />}
    >
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Index />} />
        <Route
          path="contacts/:contactId"
          element={<Contact />}
          loader={contactLoader}
          action={contactAction}
        />
        <Route
          path="contacts/:contactId/edit"
          element={<EditContact />}
          loader={contactLoader}
          action={editAction}
        />
        <Route
          path="contacts/:contactId/destroy"
          errorElement={<DestroyContactError />}
          action={destroyAction}
        />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

/**
 * [
 *   {
 *     path: '/',
 *     element: <Root />,
 *     errorElement: <ErrorPage />,
 *     loader: rootLoader,
 *     action: rootAction,
 *     children: [
 *       {
 *         errorElement: <ErrorPage />,
 *         children: [
 *           {
 *             index: true,
 *             element: <Index />,
 *           },
 *           {
 *             path: "contacts/:contactId",
 *             element: <Contact />,
 *             loader: contactLoader,
 *             action: contactAction,
 *           },
 *           {
 *             path: "contacts/:contactId/edit",
 *             element: <EditContact />,
 *             loader: contactLoader,
 *             action: editAction
 *           },
 *           {
 *             path: "contacts/:contactId/destroy",
 *             errorElement: <DestroyContactError />,
 *             action: destroyAction
 *           },
 *         ]
 *       },
 *     ],
 *   }
 * ]*/
