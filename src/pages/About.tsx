import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil"
import { postList, postState } from "recoil/posts"

export default function About(): JSX.Element {
    const { postValue } = useRecoilValue(postList);
    useEffect(() => {
        console.log(postValue);
    }, [postValue]);
    return (
        <h1>About</h1>
    )
}