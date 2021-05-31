// no parameter
var person = {
    firstname: "Jun",
    lastname: "Lee",
    id: 1234,
    fullName: function () {
        return this.firstname + " " + this.lastname;
    }
};
console.log( person.fullName() );

// has parameter
var person1 = {
    fullName: function () {
        return this.firstname + " " + this.lastname;
    }
}
var person2 = {
    firstname: "Jun",
    lastname: "Lee"
}
console.log( person1.fullName( person2 ) );