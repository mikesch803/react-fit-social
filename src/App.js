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

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route element={<WithHeader />}>
          <Route path="/home" element={<Home />} />
          <Route path="/bookmark" element={<Bookmark />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
