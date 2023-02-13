import axios from "axios";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { Outlet } from "react-router-dom";

interface IPostsProps {
  id: number;
  title: string;
  body: string;
  userId: number;
};

const App = (): JSX.Element => {

  const getPosts = async (): Promise<IPostsProps[]> => {
    return await axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => res.data)
  };

  const usePosts = () => {
    return useQuery('posts', getPosts);
  }

  const posts = usePosts();

  if (posts.isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <h1>Root</h1>
      {posts.data?.map((item): JSX.Element => (
        <div key={item.id}>
          <h2>{item.title}</h2>{item.id}
          <p>{item.body}</p>
          <p>userId: {item.userId}</p>
        </div>
      ))}
      <Outlet />
    </>
  )
}

export default App;