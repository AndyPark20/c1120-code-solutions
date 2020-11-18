/* exported getInitialsOfPerson */

function getInitialsOfPerson(person) {

  var personFirstName =person.firstName;
  var firstInitial=personFirstName[0]

  var personLastName =person.lastName;
  var lastInitial =personLastName[0];

  var fullInitial =firstInitial + lastInitial;
  return fullInitial;

}
