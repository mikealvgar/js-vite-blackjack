/**
 * 
 * @param {String} carta 
 * @returns {Number}
 */
export const valorCarta = ( carta ) => {

    if (!carta) {
        console.warn('No hay carta');
    }

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}