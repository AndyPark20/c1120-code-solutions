/* exported student */

var student = {
  firstName: 'Andy',
  lastName:'Park',
  subject: 'Eating',
  getFullName:function(){
    return this.firstName + ' ' + this.lastName;
  },
  getIntroduction:function(){
    var result = 'Hello, my name is ' + this.firstName + ' ' + this.lastName + ' and I am studying ' + this.subject + '.'
    return result;
  }
};
