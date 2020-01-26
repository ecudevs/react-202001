import React from "react";
import Post from "./Post";

export default function PostList({ posts, onLike }) {
  return (
    <>
      {posts.map((item, index) => (
        <div className="row my-2">
          <div className="col-7 offset-2">
            <Post
              fotoUsuario={item.fotoUsuario}
              fotoPost={item.fotoPost}
              nombreUsuario={item.nombreUsuario}
              pieDeFoto={item.pieDeFoto}
              liked={item.liked}
              onLike={() => onLike(index)}
            />
          </div>
        </div>
      ))}
    </>
  );
}
