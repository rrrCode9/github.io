setInterval(() => {

    let date = new Date()
    document.getElementById("clock").innerHTML = date.getHours() + " : " 
    + date.getMinutes() + " : " 
    + date.getSeconds() + "  HRS"


}, 100)