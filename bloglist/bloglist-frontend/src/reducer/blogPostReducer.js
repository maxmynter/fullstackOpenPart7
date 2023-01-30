import blogService from "../services/blogs";
const blogPostReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_BLOGS":
      return action.blogs;
    default:
      return state;
  }
};

export const getBlogs = () => {
  return async (dispatch) => {
    const blogs = await blogService.getAll();
    dispatch({ type: "GET_BLOGS", blogs });
  };
};

export default blogPostReducer;
