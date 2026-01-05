function validate(){

    let errors = "";

    // Check if first name field is empty
    let firstName = document.getElementById("firstName").value;
    if(firstName == ""){
        // Add first name error to list 
        errors = errors + "<li>Please enter First Name</li>";
    }

    // Check if last name field is empty
    let lastName = document.getElementById("lastName").value;
    if(lastName == ""){
        // Add last name error to list 
        errors = errors + "<li>Please enter Last Name</li>";
    }

    let age = document.getElementsByName("age");
    let ageSelected = false; 
    for (let i = 0; i < age.length; i++){
        // if(age[i].checked){
        if(age[i].checked == true){
            ageSelected = true;
        }
    }
    // if(ageSelected == false)
    if (!ageSelected){
        errors = errors + "<li>Please select Age Group</li>";
    }
    
    if (errors != ""){
        document.getElementById("errorList").innerHTML = errors;
        document.getElementById("errorDiv").classList.remove("hidden");
        return false;
    }
    else {
        document.getElementById("errorList").innerHTML = "";
        document.getElementById("errorDiv").classList.add("hidden");
        return true;
    }
}