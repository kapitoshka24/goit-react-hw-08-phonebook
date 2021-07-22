const getIsAuthenticated = (state) => state.auth.isAuthenticated;
const getUsername = (state) => state.auth.user.name;
const getIsFetching = (state) => state.auth.isFetching;

export default { getIsAuthenticated, getUsername, getIsFetching };
