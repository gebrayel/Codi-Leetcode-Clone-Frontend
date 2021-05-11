const settings = {
    develop: {
        apiUrl: "http://127.0.0.1:3000"
    },
    production: {
        apiUrl: "https://codi-backends.herokuapp.com/"
    }
}

const getCurrentSettings = (flag) => {
    if(flag) return settings.develop;
    return settings.production;
}

export default getCurrentSettings(true);