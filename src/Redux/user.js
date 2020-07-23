let initialState = {
  currentUser: {},
  Authenticated: undefined,
  registerd: undefined,
};

export default function user(state = initialState, action) {
  console.log("action", action);
  let stateCopy = JSON.parse(JSON.stringify(state));
  const { type, payload } = action;
  switch (type) {
    case "register":
      stateCopy.registerd = true;
      return stateCopy;

    default:
      return stateCopy;
  }
}
