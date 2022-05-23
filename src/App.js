import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  Bookmark,
  Explore,
  Home,
  Landing,
  NotFound,
  Profile,
  RequireAuth,
  SinglePost,
  WithHeader,
} from "./pages";
import Mockman from "mockman-js";
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
            <Route path="/:username" element={<Profile />} />
            <Route path="/post/:PostId" element={<SinglePost />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/mock" element={<Mockman />} />
          </Route>
        </Route>
      </Routes>
      <ToastContainer autoClose={2000} />
    </div>
  );
}

export default App;
