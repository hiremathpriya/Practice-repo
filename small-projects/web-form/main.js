function submitResponse(){
    
    let result = document.getElementById("message").value;
    
    console.log("is it working" + result);
    document.getElementById("userMessage").innerText = result;
    document.getElementById("lastName").value = "Hiremath";
}