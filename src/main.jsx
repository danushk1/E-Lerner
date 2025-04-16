import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import HomePage from "./pages/home.page";
import RootLayout from "./layouts/root-layout";
import MainLayout from "./layouts/main.layout";
import SignIn from "./pages/sign-in.page";
import SignUp from "./pages/sign-up.page";
import App from "./App";
import { ClerkProvider, useAuth } from "@clerk/clerk-react";
import { store } from "./lib/store";
import { Provider } from "react-redux";
import EnrollCourse from "./pages/enrollCourse.page";
import AccountPage from "./pages/account.page";
import ProtectedLayout from "./layouts/protected.layout";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error(`Clerk publishable key is not set in the environment variables.`);
}

// 🔒 This component waits for Clerk to fully load before rendering routes
function ClerkLoadedApp() {
  const { isLoaded } = useAuth();

  if (!isLoaded) return <div className="text-center p-8">Loading...</div>;

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route element={<MainLayout />}>
            <Route path="/" element={<App />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/path" element={<HomePage />} />
            <Route path="/courses/:id" element={<EnrollCourse />} />
            <Route element={<ProtectedLayout />}>
              <Route path="/account" element={<AccountPage />} />
            </Route>
          </Route>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <ClerkLoadedApp />
      </ClerkProvider>
    </Provider>
  </StrictMode>
);
