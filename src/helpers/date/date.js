/**
 * Validar si la fecha indicada es superior
 * al día actual
 * @param {String} date Fecha en string
 * @returns True si la fecha es superior al día
 * de hoy
 */
const validateDate = (date) => {
    let actualDate = new Date(
        "20" + date.substring(2),
        +date.substring(0, 2),
        0
    );
    let today = new Date();
    return actualDate >= today;
};

export default {
    validateDate,
}