import { LoginPage, SingUp, Home } from "../../page/index.js";
import App from "../../App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import PageNotFound from "../Errors/PageNotFound.jsx";
import { Rule } from "postcss";
import UnauthorizedPermission from "../Errors/UnAuthorized.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<SingUp />} />
      <Route path="unauthorized" element={<UnauthorizedPermission />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

export { router };
