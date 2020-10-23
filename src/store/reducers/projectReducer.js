const initialState = {
  projects: [
    {
      id: 1,
      title: "Welcome the redux application",
      content: "Reudx is state management syetem for simplyflyig the state.",
    },
    {
      id: 2,
      title: "Welcome the redux application",
      content: "Reudx is state management syetem for simplyflyig the state.",
    },
    {
      id: 3,
      title: "Welcome the redux application",
      content: "Reudx is state management syetem for simplyflyig the state.",
    },
  ],
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log(action.payload);
      return state;
    case "CREATE_PROJECT_FAILED":
      console.log(action.payload);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
