import { atom } from "recoil";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SearchData = atom<any[]>({
  key: "SearchData",
  default: [],
});

export { SearchData };
