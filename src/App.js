import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  Bookmark,
  Explore,
  Home,
  Landing,
  NotFound,
  Profile,
  WithHeader,
} from "./pages";
import Mockman from "mockman-js";
import { RequireAuth } from "./pages/auth/RequireAuth";
import { injectStyle } from "react-toastify/dist/inject-style";
import { ToastContainer } from "react-toastify";

function App() {
  
  if (typeof window !== "undefined") {
    injectStyle();
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route element={<RequireAuth />}>
          <Route element={<WithHeader />}>
            <Route path="/home" element={<Home />} />
            <Route path="/bookmark" element={<Bookmark />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/mock" element={<Mockman />} />
          </Route>
        </Route>
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
