import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil"
import { testValue } from "recoil/posts";

export default function About(): JSX.Element {
    const test = useRecoilValue(testValue);
    useEffect(() => {
        console.log("About", test);
    }, [test]);
    return (
        <div>
            <h1>About</h1>
        </div>
    )
}