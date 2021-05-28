import axios from 'axios';

const endpoint = "/login/";

/**
 * Obtener el objeto usuario
 * @param {String} user Objeto con la información del usuario
 * @param {Function} setUser almacenar el usuario en la variable global
 * @returns {Array} Info del usuario
 */
const postLogin = async (user, setUser, setIsLoading) => {
    const userInfo = {
        google_id: user.uid,
        name: user.displayName,
        pic_url: user.photoURL,
    };
    try{
        setIsLoading(true);
        const response = await axios.post(endpoint, {
            user: userInfo,
        });
        if(response.data[0]){
            userInfo['pic_url'] = response.data[0]['pic_url'];
            userInfo['name'] = response.data[0]['name']
        }
        userInfo['is_admin'] = response.data[0]['is_admin'] ? response.data[0]['is_admin'] : false;
        setUserLocally(userInfo, setUser);
        setIsLoading(false);
        return response.data;
    }
    catch(error){
        setIsLoading(false);
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