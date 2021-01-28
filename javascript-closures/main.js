
function graduate(credential) {
  return function (fullName) {
    return fullName + ',' + credential;
  };
}

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

console.log('Medical School', medicalSchool('Andy Park'));
console.log('Lawschool', lawSchool('Andy Park'));
