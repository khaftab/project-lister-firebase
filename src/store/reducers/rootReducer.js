import { combineReducers } from "redux";
import authReducers from "./authReducers";
import projectReducer from "./projectReducer";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  auth: authReducers,
  project: projectReducer,
});

export default rootReducer;
