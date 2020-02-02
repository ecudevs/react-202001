import React from "react";
import Post from "./Post";

export default function PostList({ posts, onLike }) {
  // debugger;
  return (
    <>
      {posts.map((item, index) => {
        return (
          <div className="row my-2">
            <div className="col-7 offset-2">
              <Post
                fotoUsuario={item.usuario.fotoUsuario}
                nombreUsuario={item.usuario.nombreUsuario}
                // fotoUsuario={""}
                // nombreUsuario={""}
                fotoPost={item.fotoPost}
                pieDeFoto={item.pieDeFoto}
                liked={item.liked}
                onLike={() => onLike(index)}
              />
            </div>
          </div>
        );
      })}
    </>
  );
}
