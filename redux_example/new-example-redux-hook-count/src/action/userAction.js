const setUser = (userObj) => ({
    type:"SET_USER",
    userObj,
})

const logOut = () => ({
    type: "LOG_OUT",
})

export default {
    setUser,
    logOut,
}