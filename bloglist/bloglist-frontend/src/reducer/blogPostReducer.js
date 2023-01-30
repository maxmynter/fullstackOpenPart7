import blogService from "../services/blogs";
const blogPostReducer = (state = [], action) => {
  switch (action.type) {
    case "GET":
      return action.blogs;
    default:
      return state;
  }
};

export const getBlogs = () => {
  return async (dispatch) => {
    const blogs = await blogService.getAll();
    dispatch({ type: "GET", blogs });
  };
};

export default blogPostReducer;
