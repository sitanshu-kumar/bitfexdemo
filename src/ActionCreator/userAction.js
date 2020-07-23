import API from "../config/api";

let Action = {};
//action function for registration
Action.signup = (data) => {
  console.log(data);
  return async (dispatch) => {
    try {
      let value = await API.post("/users/sign_up", data);
      console.log("value", value);
      if (value.data.status === true) {
        /* dispatch({ type: "register", payload: true });
        dispatch({
          type: "resetError",
        });*/
      }
    } catch (error) {
      dispatch({
        type: "notify",
        payload: {
          type: "warn",
          msg: "Some error occured",
        },
      });
    }
  };
};

export default Action;
