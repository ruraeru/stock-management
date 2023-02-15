import axios from "axios";
import { useQuery } from "react-query";
import { atom, selector } from "recoil";

export interface IPostTypes {
  id: number;
  body: string;
  title: string;
  userId: number;
}

export const postState = atom<IPostTypes[]>({
  key: "posts",
  default: [],
});

export const testValue = atom({
  key: "test",
  default: false,
});
