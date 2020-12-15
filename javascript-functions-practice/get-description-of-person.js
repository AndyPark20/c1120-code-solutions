/* exported getDescriptionOfPerson */

function getDescriptionOfPerson(person){

  var personName = person.name;
  var personOccupation = person.occupation;
  var personBirthPlace= person.birthPlace;
  var personInfo = personName + ' is a ' + personOccupation + ' from ' + personBirthPlace +'.';
  return personInfo;

}
