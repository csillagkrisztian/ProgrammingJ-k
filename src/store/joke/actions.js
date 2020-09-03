export const sendPunchline = (data) => {
  return { type: "SEND_PUNCHLINE", payload: data };
};

export const sendSetup = (data) => {
  return {
    type: "SEND_SETUP",
    payload: data,
  };
};
