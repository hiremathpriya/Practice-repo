function addName(){
    console.log("is it working");
    const name = document.getElementById("name").value;
    console.log("still working " + name);
    //document.getElementById("list").innerText += name + "\n";
    const str = "<li>" + name + "</li>";
    document.getElementById("list").innerHTML += str;
    document.getElementById("name").value = "";
    document.getElementById("name").maxLength= 20;
   // document.write(addName.addList)
    
     
        
    
};
