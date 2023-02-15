import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { IPostTypes, postState, testValue } from "recoil/posts";
import axios from "axios";


export default function Home(): JSX.Element {
    const postId = useParams().postId;
    const getPosts = async (): Promise<IPostTypes[]> => {
        return await axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => res.data)
    };
    const setTest = useSetRecoilState(testValue);
    const [postData, setPostData] = useRecoilState(postState);
    const usePosts = () => {
        return useQuery('posts', getPosts, {
            onSuccess: data => {
                setPostData(data);
            }
        });
    }

    useEffect(() => {
        console.log("posts", postData);
    }, [postData]);

    const posts = usePosts();

    if (posts.isLoading) {
        return <h1>Loading...</h1>
    }

    return (
        <>
            <h1>Posts</h1>
            <button onClick={() => setTest(prev => !prev)}>reverse</button>
            {posts.data?.map((item): JSX.Element => (
                <div key={item.id}>
                    <h2>{item.title}</h2>{item.id}
                    <p>{item.body}</p>
                    <p>userId: {item.userId}</p>
                </div>
            ))}
        </>
    )
}