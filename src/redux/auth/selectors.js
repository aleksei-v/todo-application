export const selectUser = state => state.auth.user;

export const selectStatusError = state => state.auth.error;

export const selectStatusIsLoggedIn = state => state.auth.isLoggedIn;

export const selectStatusIsLoading = state => state.auth.isLoading;

export const selectStatusIsRefreshing = state => state.auth.isRefreshing;

