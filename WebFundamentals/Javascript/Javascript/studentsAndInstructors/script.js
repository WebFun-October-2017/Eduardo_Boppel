
var students = [
  { first_name: 'Michael', last_name: 'Jordan'} ,
  { first_name: 'John', last_name: 'Rosales'} ,
  { first_name: 'Mark', last_name: 'Guillen'} ,
  { first_name: 'KB', last_name: 'Tonel'} ,
];


for(var i = 0; i < students.length; i++) {
  var name = students[i].first_name +" "+students[i].last_name;
  console.log(name);
}





// OPTIONAL

var users = {
  'Students': [
    { first_name: 'Michael', last_name: 'Jordan'} ,
    { first_name: 'John', last_name: 'Rosales'} ,
    { first_name: 'Mark', last_name: 'Guillen'} ,
    { first_name: 'KB', last_name: 'Tonel'} ,
  ],
  'Instructors': [
    { first_name: 'Michael', last_name: 'Choi'} ,
    { first_name: 'Martin', last_name: 'Puryear'} ,
  ]
}

for (var key in users) {
  console.log(key);

  var obj = users[key];

  for(var i = 0; i < obj.length; i++) {
    var name = users[key][i].first_name;
    var lastname = users[key][i].last_name;
    var length = name.length + lastname.length;
    console.log(i+1 + " - " + name + " " + lastname + " - " + " " + length);
  }
}
