import _ from 'underscore';

// Esta función crea un nuevo deck

/**
 * Esta función crea un nuevo deck 
 * @param {Array} tiposCarta Ejemplo: ['C','D','H','S'];
 * @param {Array} especialesCartas Ejemplo: ['A','J','Q','K'];
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposCarta, especialesCartas) => {

    if( !tiposCarta || tiposCarta.length === 0) throw new  Error('tiposCarta es obligatorio como un arreglo de string');

    if( !especialesCartas || especialesCartas.length === 0) throw new  Error('especialesCartas es obligatorio como un arreglo de string');

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposCarta ) {
        for( let esp of especialesCartas ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}
