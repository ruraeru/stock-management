import { useEffect } from "react";
import { useRecoilValue } from "recoil"
import { postState } from "recoil/posts";

export default function User(): JSX.Element {
    const data = useRecoilValue(postState);
    useEffect(() => {
        console.log(data);
    }, [data]);
    return (
        <div>
            user
        </div>
    )
}