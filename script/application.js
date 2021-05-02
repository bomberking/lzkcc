(function() {
    function mytime() {
        var a = new Date();
        var b = a.toLocaleTimeString();
        var c = a.toLocaleDateString();
        document.getElementById("dateDiv").innerHTML = c + "&nbsp" + b;
    }
    mytime();
    setTimeout(function() {
        document.querySelector('#dialogbg').style.height = window.innerHeight + "px";
        document.querySelector('#dialogbg').style.display = "none"
    }, 1);
    setInterval(function() {
        mytime()
    }, 1000);
})();

function dialogToggle() {
    var x = document.getElementById("dialogbg");
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}