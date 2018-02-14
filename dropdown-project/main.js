document.addEventListener("DOMContentLoaded", function() {

    alert("dom loaded");
});

alert('loading main.js');

const getText = () => {

    console.log('working');
    /*
    var display =  document.getElementById("display1").textContent += 
        document.getElementById("myName").value
    console.log(myName.value);
    document.getElementById("display1").textContent += 
    document.getElementById("classId").value  
    console.log(classId.value);
    */

    const name = document.getElementById("myName").value;
    const classValue = document.getElementById("classId").value;

    if (classValue == 'C1') {

        document.getElementById("c1").innerHTML += "<b>" + name + "</b>";
    } else if (classValue == "C2") {

        document.getElementById("c2").innerHTML += "<b>" + name + "</b>";
    }  else if (classValue == "C3") {

        document.getElementById("c3").innerHTML += "<b>" + name + "</b>";
    }

}
var person = {
    firstName:"priya", 
    lastName:"Hiremath", 
    age: 40, 
    fullName: function(){
        return this.firstName + " " + this.lastName;
        console.log("its working");
    }
}

const displayFullName = () => {
    console.log("i am working");
    document.getElementById("Demo").innerHTML = person.fullName()
    //person.firstName + "" + person.lastName;
    console.log("i am working too");
}

alert('script finished running, this is hte last line');

