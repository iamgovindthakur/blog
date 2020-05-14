import jsonPlaceholder from "../apis/jsonPlaceholder";

// export const fetchPosts = () => {
//   return async function (dispatch, getState) {
//     const response = await jsonPlaceholder.get("/posts");
//     dispatch({ type: "FETCH-POST", payload: response });
//   };
// };

// we can write above action creator as an arrow function as below

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");
  dispatch({ type: "FETCH_POST", payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};
// export const fetchPosts = async() => {
//   const response = await jsonPlaceholder.get("/posts");

//   return {
//     type: "FETCH-POST",
//     payload: response,
//   };
// };
