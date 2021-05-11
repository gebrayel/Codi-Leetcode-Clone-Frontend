import axios from 'axios';

const endpoint = "/login/";

/**
 * Obtener el objeto usuario
 * @param {String} user Objeto con la información del usuario
 * @param {Function} setUser almacenar el usuario en la variable global
 * @returns {Array} Info del usuario
 */
const postLogin = async (user, setUser) => {
    const userInfo = {
        google_id: user.uid,
        name: user.displayName,
        pic_url: user.photoURL,
    };
    try{
        const response = await axios.post(endpoint, {
            user: userInfo,
        });
        setUserLocally(userInfo, setUser);
        return response.data;
    }
    catch(error){
        return error;
    }
}

/**
 * Establecer el usuario de manera local y global
 * @param {JSON} user Objeto con la información del usuario
 * @param {Function} setUser almacenar el usuario en la variable global
 */
const setUserLocally = (user, setUser) => {
    localStorage.setItem('user', JSON.stringify(user));
    setUser(user);
}

export default {
    postLogin,
}