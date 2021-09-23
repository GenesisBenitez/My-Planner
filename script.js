var form = document.getElementById("myForm")

form.addEventListener("submit", function(e){
    e.preventDefault();
    var input = document.getElementById("tasksInput");
    var output = document.getElementById("output")
    console.log(input.value);
    output.innerHTML = input.value;
})