// tweet posts

import UserType from "./UserType";

type ImageType = {
  imageId: number;
  link: string;
};

export default interface PostType {
  Images: ImageType[];
  User: UserType;
  content: string;
  createdAt: string;
  postId: number;
}
