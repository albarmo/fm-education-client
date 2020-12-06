let initialState = {
  username: "",
  access_token: "",
  course: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      return {
        ...state,
        access_token: action.payload.access_token,
        username: action.payload.username,
      };

    case "USER_REGISTER":
      return {
        ...state,
        username: action.payload.username,
      };

    case "GET_COURSE":
      return { ...state, course: action.payload.data };

    case "CLEAR_ALL":
      console.log("clear all");
      return {
        ...state,
        username: "",
        access_token: "",
        course: [],
      };

    default:
      return state;
  }
};

export default reducer;
