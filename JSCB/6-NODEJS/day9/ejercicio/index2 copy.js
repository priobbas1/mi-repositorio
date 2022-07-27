'use strict';

/**
 * Vamos a hacer un programa que transforme un array
 * en un objeto a un formato que se pide más abajo
 * 
 * Cuando ejecutes el programa, lo harás como:
 *  node index.js
 * 
 * Y el output puede ser:
 *  - :) si todo va bien
 *  - :( si el formato no es el correcto
 */


/**
 * Tenemos esto:
 *  Un array con los datos de una nota
 *    (id, title, content, created_at, updated_at, tagId, tag)
 *  En este array tenemos el id de la misma nota, lo único que cambia 
 *  son los datos del tag (tagId y tag)
 *  
 *  Este array no va a cambiar nunca, tiene 2 elementos y solo estos dos
 *  (puesto que es para realizar un ejercicio y no queremos sobre complicarlo)
 * 
 *  Una nota (o artículo) puede tener varios tags. Fíjate que el id de la nota
 *  es el mismo
 */
const rawNotes = [
  {
      "id": "0705593c-ce52-4d03-8676-7a3cadf40803",
      "title": "How to code in JS",
      "content": "Mozilla Developer Network",
      "created_at": "2019-12-16T20:46:38.000Z",
      "updated_at": null,
      "tagId": "1",
      "tag": "js"
  },
  {
      "id": "0705593c-ce52-4d03-8676-7a3cadf40803",
      "title": "How to code in JS",
      "content": "Mozilla Developer Network",
      "created_at": "2019-12-16T20:46:38.000Z",
      "updated_at": null,
      "tagId": "2",
      "tag": "dev"
  }
];

/**
 * Crear una función que devulva un object con los datos de una nota y sus tags
 * como array (porque 1 nota puede tener varios tags)
 * Más abajo, hay una variable llamada 'expectedResult' que tiene el formato exacto
 * que tiene que devolver esta función después de transformar el array dado
 * @param {Array} rawNota
 * @returns {Object} { atributos de la nota, tags: [{ tagIdN, tagN }] }
 */
function noteMapper(rows) {

  //console.log(Object.values(rows[0]));
  /*for(const valor of Object.values(rows[0])){
    console.log(valor);
  }*/
  let objetoNotasId = {};
  let objetoNotas1 = {};
  let objetoNotas2 = {};
  let arrayNotasTags = [];

for (const propiedad in rows[0]) {
  
  if(rows[0][propiedad] === rows[1][propiedad]){
    objetoNotasId [propiedad] = rows[0][propiedad];
    
  }
  else{
    objetoNotas1[propiedad]=rows[0][propiedad];
    objetoNotas2[propiedad]=rows[1][propiedad];
  }  
}
  arrayNotasTags.push(objetoNotas1, objetoNotas2);
  objetoNotasId.tags=arrayNotasTags;
  //let objetoNotasId = (JSON.parse(JSON.stringify(rows.shift())));
  //objetoNotasId[1].id="8";
  //console.log(objetoNotasId);
  //console.log(rows);  

  //delete objetoNotasId.tag;
  //delete objetoNotasId.tagId;

  //console.log(objetoNotasId);

  //console.log(Object.entries(objetoNotasId));

  /*if (rows[0].id === rows[1].id){
    const arrayTagIds = rows.map(nota => nota.tagId);
    console.log(arrayTagIds);
    const arrayTags = rows.map(nota => nota.tag);
    console.log(arrayTags);
  }*/

  return objetoNotasId;
}

  noteMapper(rawNotes);
/**
 * No tocar este código
 */
//const note = noteMapper(rawNotes);

const expectedResult = {
    "id": "0705593c-ce52-4d03-8676-7a3cadf40803",
    "title": "How to code in JS",
    "content": "Mozilla Developer Network",
    "created_at": "2019-12-16T20:46:38.000Z",
    "updated_at": null,
    tags: [{
      "tagId": "1",
      "tag": "js"
    }, {
      "tagId": "2",
      "tag": "dev"
    }]
};

/**
 * test
 */
/*if (JSON.stringify(note) === JSON.stringify(expectedResult)) {
  console.log(':)');
} else {
  console.error(':(');
}*/