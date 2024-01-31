document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var formData = new FormData(this);
    var userData = {};
    formData.forEach(function(value, key){
        userData[key] = value;
    });
    console.log(userData); 
});
