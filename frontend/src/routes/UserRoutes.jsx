import SignIn from "@/pages/SignIn";
import { Route } from "react-router";

export const GuestRoutes = [
  <Route element={<GuestLayout />} key="guest">
    <Route element={<SignIn />} />
  </Route>,
];
