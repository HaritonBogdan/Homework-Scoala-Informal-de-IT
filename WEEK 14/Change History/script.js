console.log("opened");
const changeHistory = () => {
  const state = { page_id: 1, user_ID: 5 };
  const url = "replaced-state.html";
  history.replaceState(state, "", url);
};
