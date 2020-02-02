import React from "react";
import Input from "./common/Input";
import Button from "./common/Button";

export default function PostForm({ loading, post = {}, onChange, onSubmit }) {
  const changeInput = event => {
    post[event.target.name] = event.target.value;
    onChange(post);
  };

  const submitForm = event => {
    event.preventDefault();
    onSubmit({
      ...post
    });
  };

  return (
    <form onSubmit={submitForm} noValidate>
      <Input name="fotoPost" value={post.fotoPost} onChange={changeInput} />
      <Input name="pieDeFoto" value={post.pieDeFoto} onChange={changeInput} />
      <Button
        loading={loading}
        type="submit"
        text="Guardar"
        // onClick={() => onSubmit(post)}
      />
    </form>
  );
}
