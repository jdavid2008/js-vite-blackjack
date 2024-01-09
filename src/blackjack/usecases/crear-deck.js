import _ from 'underscore';

//export const niNombre = "David Morales";

/**
 * Esta función crea un nuevo deck
 * @param {Array<string>} tiposDeCarta Ejemplo: ['C','D','H','S']
 * @param {Array<string>} tiposEspeciales Ejemplo: ['A','J','Q','K']
 * @returns Array<string>
 */
export const crearDeck = ( tiposDeCarta, tiposEspeciales) => {
    let deck = [];

    if (!tiposDeCarta || tiposDeCarta.length ===0 ) 
        throw new Error('Argumento tiposDeCarta es obligatorio como un Array de Strings');

    
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    
    return deck;
}

//export default crearDeck;

