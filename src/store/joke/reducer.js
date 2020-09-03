const initialState = {
  setup: null,
  punchline: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "SEND_PUNCHLINE": {
      return { ...state, punchline: payload };
    }
    case "SEND_SETUP": {
      return { ...state, setup: payload };
    }
    default:
      return state;
  }
};
