import PostList from "./PostList";
import WithData from "./WithData";

const PostListWithData = WithData(PostList, "https://jsonplaceholder.typicode.com/posts");

export default PostListWithData;