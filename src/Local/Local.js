const root = {
    thema : 'thema',
    token : 'token'
}

export default {
    getThema : () => localStorage.getItem(root.thema),
    setThema : (thema) => localStorage.setItem(root.thema,thema),
    getToken : () => localStorage.getItem(root.token),
    setToken : (data) => localStorage.setItem(root.token,data),
}