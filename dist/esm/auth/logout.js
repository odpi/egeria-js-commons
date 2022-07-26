export const logout = (logoutCallback) => {
    localStorage.removeItem('currentJwt');
    console.log('LOGGED OUT');
    if (logoutCallback) {
        logoutCallback();
    }
};
