import React, { useState } from "react";
import { Link } from "react-router-dom";
import { filterPost } from "../actions/postActions";
import { connect } from "react-redux";
import Input from "./common/Input";

function Navbar({ posts, filterPost }) {
  const [inputValue, setInputValue] = useState("");

  const changeInput = event => {
    setInputValue(event.target.value);
    filterPost(posts, event.target.value);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Ecusocial
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="navbar-brand" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="navbar-brand" to="/todo">
              Perfil
            </Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <Input value={inputValue} onChange={changeInput} />
        </form>
      </div>
    </nav>
  );
}

const mapStateToProps = ({ postState }) => {
  return {
    posts: postState.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    filterPost: (posts, texto) => filterPost(dispatch, posts, texto)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
