/* exported getFullNameOfPerson */
function getFullNameOfPerson(person) {

    var personFirstName = person.firstName;
    var personLastName = person.lastName;
    var fullName = personFirstName + ' ' + personLastName;
    return fullName;
}
