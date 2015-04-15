
function insert_person_id(letter_to_id, number_of_person, type_id) {

	if(typeof(letter_to_id[type_id[0]][type_id[1]]) === 'undefined'){
		letter_to_id[type_id[0]][type_id[1]] = [];
	}

	if(letter_to_id[type_id[0]][type_id[1]].indexOf(number_of_person) === -1){
		letter_to_id[type_id[0]][type_id[1]].push(number_of_person);
	} 

	return letter_to_id;
};

//###############ESSE TRECHO TAMBÉM SERÁ EXECUTADO NO NOSSO TRABALHO########################

var letter_to_id = {};
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", 
	"T", "U", "V", "W", "X", "Y", "Z"];

letters.forEach(function(letter) {
	letter_to_id[letter] = {};
});
//###############ATÉ AQUI###################################################################

// INICIO DA SIMULACAO DE DADOS
// OS DADOS DE TIPO E ID DEVEM SER ARMAZENADOS NUM ARRAY ASSIM
var places1 = [["A","1"], ["D","4"], ["B","2"] , ["A","4"], ["J", "6"]]; //tipo e id da pessoa 1, por exemplo
var places2 = [["A","1"], ["F","4"], ["B","2"] , ["C","4"], ["Q", "6"]]; //tipo e id da pessoa 2
// FIM DA SIMULACAO DOS DADOS

places1.forEach(function(type_id) {
    letter_to_id = insert_person_id(letter_to_id, 1, type_id); //simulando insercao dos dados da pessoa 1
});

places2.forEach(function(type_id) {
    letter_to_id = insert_person_id(letter_to_id, 2, type_id); //simulando insercao dos dados da pessoa 2
});

console.log(letter_to_id);

//NESSA SIMULACAO POR EXEMPLO, TEREMOS
//NA CATEGORIA A, OS IDS 1 E 4...O ID 1 NAS PESSOAS 1 E 2, JA O ID 4 NA PESSOA 1

//SUPONDO A EXISTENCIA DE UMA FUNCAO cria_aresta();
letters.forEach(function(letter) {
	var ids = letter_to_id[letter];
	for(var k in ids){
		if(ids[k].length > 1){
			console.log(letter);
			console.log(ids[k]);
			cria_aresta(letter, ids[k]); //supondo que o metodo criara arestas entre os campos do tipo "letter"
										//de todas as pessoas presentes no array
		}
	}
});






