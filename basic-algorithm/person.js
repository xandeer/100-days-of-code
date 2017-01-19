var Person = function(firstAndLast) {
  var firstName = firstAndLast.split(' ')[0];
  var lastName = firstAndLast.split(' ')[1];

  this.getFirstName = function getFirstName() {
    return firstName;
  };

  this.getLastName = function getLastName() {
    return lastName;
  };

  this.getFullName = function getFullName() {
    return firstName + ' ' + lastName;
  };

  this.setFirstName = function setFirstName(first) {
    firstName = first;
  };

  this.setLastName = function setLastName(last) {
    lastName = last;
  };

  this.setFullName = function setFullName(firstAndLast) {
    firstName = firstAndLast.split(' ')[0];
    lastName = firstAndLast.split(' ')[1];
  };
};

Person.prototype = {
  constructor: Person,
  getFirstName: function() {
    return this.firstName;
  },
  getLastName: function() {
    return this.lastName;
  },
  getFullName: function() {
    return this.firstName + ' ' + this.lastName;
  },
  setFirstName: function(first) {
    this.firstName = first;
  },
  setLastName: function(last) {
    this.lastName = last;
  },
  setFullName: function(firstAndLast) {
    this.firstName = firstAndLast.split(' ')[0];
    this.lastName = firstAndLast.split(' ')[1];
  }
};

module.exports = Person;
