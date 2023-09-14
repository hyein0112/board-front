import { uploadType } from "./board";

export interface DeleteBookType {
  id: number;
}

export interface MemberListType {
  id: string;
  name: string;
  phone_number: string;
  profile_picture?: string;
}

export interface MemberType {
  id: string;
  name: string;
  profile_picture?: string;
  writePost?: uploadType[];
}
