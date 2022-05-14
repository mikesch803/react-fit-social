import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components";
import { Bookmark, Explore, Home, NotFound, Profile } from "./pages";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/bookmark' element={<Bookmark/>}/>
        <Route path="/explore" element={<Explore />} />
        <Route path="/profile" element={<Profile/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
