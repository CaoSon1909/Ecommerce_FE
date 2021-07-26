//return user data from local storage
export const getUser = () => {
    const userStr = localStorage.getItem('USER')
    if (userStr) return (JSON).parse(userStr)
}

//remove user from localstorage
export const removeUser = () => {
    localStorage.removeItem('USER')
}

//set user to local storage
export const setUser = (user) => {
    localStorage.setItem('USER', user);
}