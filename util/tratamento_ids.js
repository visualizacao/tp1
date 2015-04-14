
function insert_person_id(id_to_person, number_of_person, id) {

	if(typeof(id_to_person[id]) === 'undefined'){
		id_to_person[id] = [];
	}

	if(id_to_person[id].indexOf(number_of_person) === -1){
		id_to_person[id].push(number_of_person);
	} 

	console.log(id_to_person);
	return id_to_person;
};

//###############IMPORTANTE########################
// Ainda falta o tratamento por categoria, a ideia é que haja um id_to_person para cada categoria

var id_to_person = {};

var places1 = ["2", "4", "6", "8", "10"]; //ids da pessoa 1, por exemplo
var places2 = ["1", "4", "7", "10", "13"]; //ids da pessoa 2
var places_all = [];

places_all.push(places1);
places_all.push(places2);

places_all.forEach(function(places, number_of_person) {
    places.forEach(function(id) {
    	id_to_person = insert_person_id(id_to_person, number_of_person+1, id);
    });
});

console.log(id_to_person);



