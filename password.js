function checkPassword() {
    //capture the user entered password from the input eleement
    var passwordBoxObject= document.getElementById("passwordBox");
    //use console.dir to find the value property of the passwordBoxObject element object//
    console.dir(passwordBoxObject);
    var passwordEntered = passwordBoxObject.value;
    console.log("User entered password: ",passwordEntered);

    //check if the password is correct
    var passwordOfficial = "codeclub1";
    if (passwordEntered == passwordOfficial) {
        //allow navigation to members page
        console.log("Allow");
        window.location.assign("members.html");
    } else {
        //block navigation to members page
        console.log("Block!");
        var paragraphObject = document.getElementById("incorrect-password");
        /*set the styling CSS rule of color first before displaying the text on the screen,
        so that the text doesn't appear black before changing into desired color,
        but it is optional as the transition happen very fast. */
        paragraphObject.style.color = "#f7022b";
        /*add text property to the paragraphObject element object(incorrect-paragraph element)*/
        paragraphObject.innerHTML = "The password you entered is inccorect. Please try again!";
        /* document.getElementById("incorrect-password").innerHTML = "The password you entered is incorrect."; */
    }
}