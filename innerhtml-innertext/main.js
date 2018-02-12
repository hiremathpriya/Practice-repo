const getText = () => {
    let x = document.getElementById("myList").textContent;
    document.getElementById("demo").innerHTML = x;
};

const getHTML = () => {
    let x = document.getElementById("myList").innerHTML;
    document.getElementById("demo").innerHTML = x;
};