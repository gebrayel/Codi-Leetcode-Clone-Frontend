const settings = {
    develop: {
        apiUrl: "https://codi-backends.herokuapp.com/"
    },
    production: {
        apiUrl: ""
    }
}

const getCurrentSettings = (flag) => {
    if(flag) return settings.staging;
    return settings.production;
}

export default getCurrentSettings(true);