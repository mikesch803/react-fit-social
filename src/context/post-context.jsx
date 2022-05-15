import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/posts");
        if (response.status === 200) {
          setPost(response.data.posts);
        }
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
return (

    <PostContext.Provider value={{ post }}>{children}</PostContext.Provider>
    )
};

export const usePostContext = () => useContext(PostContext);
