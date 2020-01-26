let defaultState = {
  loading: false,
  post: {},
  posts: [
    {
      fotoUsuario:
        "https://miro.medium.com/fit/c/60/60/1*85AoiyLeFdu9Qqhr4niO3Q.jpeg",
      fotoPost:
        "https://miro.medium.com/max/1800/1*D_6-cDTYzw9TJqrI35umyw.jpeg",
      nombreUsuario: "thianlopezz",
      pieDeFoto: "Trabajando ando"
    },
    {
      fotoUsuario:
        "https://miro.medium.com/fit/c/60/60/1*85AoiyLeFdu9Qqhr4niO3Q.jpeg",
      fotoPost:
        "https://miro.medium.com/max/1800/1*D_6-cDTYzw9TJqrI35umyw.jpeg",
      nombreUsuario: "danmatlam",
      pieDeFoto: "Salida"
    },
    {
      fotoUsuario:
        "https://miro.medium.com/fit/c/60/60/1*85AoiyLeFdu9Qqhr4niO3Q.jpeg",
      fotoPost:
        "https://miro.medium.com/max/1800/1*D_6-cDTYzw9TJqrI35umyw.jpeg",
      nombreUsuario: "miguelaifer",
      pieDeFoto: "Por fin"
    }
  ]
};

const postReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_POSTS":
      return { ...state, loading: true };
    case "GET_POSTS_SUCCESS":
      return { ...state, loading: false, posts: action.posts };
    case "POSTS_UPDATE":
      debugger;
      return { ...state, posts: [...action.posts] };
    default:
      return { ...state };
  }
};
export default postReducer;
