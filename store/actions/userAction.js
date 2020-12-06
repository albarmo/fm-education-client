const baseUrl = `http://localhost:5000`;

export const userLogin = (username, pwd) => {
  return (dispatch) => {
    let password = pwd.toString();
    fetch(`${baseUrl}/user/login`, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("user login data >>>", data);
        dispatch({
          type: "USER_LOGIN",
          payload: {
            access_token: data.access_token,
            username: username,
          },
        });
      })
      .catch((error) => {
        console.log("ERROR >>> LOGIN", error.message);
      });
  };
};

export const userRegister = (inputRegister) => {
  const { username, email, password } = inputRegister;
  console.log(username, password, email);
  return (dispatch) => {
    fetch(`${baseUrl}/user/register`, {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((dataRegister) => {
        console.log("success register new users", dataRegister);
        dispatch({
          type: "USER_REGISTER",
          payload: {
            username: dataRegister.username,
          },
        });
      })
      .then((error) => {
        console.log(error);
      });
  };
};

export const getCourseList = () => {
  return (dispatch) => {
    fetch(`${baseUrl}/course`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "<<< course fetch");
        dispatch({
          type: "GET_COURSE",
          payload: { data },
        });
      });
  };
};

export const clearAll = () => {
  return (dispatch) => {
    dispatch({
      type: "CLEAR_ALL",
    });
  };
};
