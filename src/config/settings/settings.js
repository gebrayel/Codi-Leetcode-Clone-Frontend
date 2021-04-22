const settings = {
    develop: {
        apiUrl: ""
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