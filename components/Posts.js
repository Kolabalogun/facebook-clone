import Post from "./Post";

const Posts = () => {
  const posts = [
    {
      id: 1,
      username: "akinola_kb",
      userImg: "https://links.papareact.com/3ke",
      img: "https://links.papareact.com/3ke",
      caption: "SUBSCRIBE AND DESTROY THE LIKE BUTTON for YT Algorithm!",
    },
  ];
  return (
    <div>
      {posts?.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
};

export default Posts;
