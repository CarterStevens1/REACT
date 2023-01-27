import Post from "./Post";
import { useLoaderData } from "react-router-dom";
import classes from "./PostList.module.css";

function PostList() {
  const posts = useLoaderData();
 
//   useEffect(() => {
//     async function fetchPosts() {
//       setIsFetching(true);

//       setPosts(resData.posts);
//       setIsFetching(false);
//     }
//     fetchPosts();
//   }, []);

//   function addPostHandler(postData) {
//    
//     setPosts((existingPosts) => [postData, ...existingPosts]);
//   }

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.id} id={post.id} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div className={classes.noPosts}>
          <h2>There are no posts yet!</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}

export default PostList;
