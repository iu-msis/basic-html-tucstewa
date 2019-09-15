var waitingApp = new Vue({
el: '#patientWaitingApp',
data: {
"patients":
    {
      "name": {
        "first": "",
        "last": ""
      },
      "location": {
        "street": "",
        "city": "",
        "state": "",
        "postcode": ""
        },
      "email": "",

      "dob": {
        "date": "",
        "age": ""
        },

      "picture": {
        "large": "",
        "medium": "",
        "thumbnail": ""
      },
      "nat": ""

  },

},
methods: {
fetchPatients() {
fetch('https://randomuser.me/api/?nat')
.then(response=>response.json())
.then(json=>{waitingApp.patients=json.results[0]});
//.then(function(response){ console.log(response.json())});
//.then(function(response) {return response.json()})
//.then(function(json) {waitingApp.people = json});

}
},
created: function() {
this.fetchPatients();
}

});
