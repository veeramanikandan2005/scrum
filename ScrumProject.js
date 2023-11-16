
    function check() {
    var t1 = document.getElementById('pword').value;
    var t2 = document.getElementById('word').value;
    if(t1 == t2) 
    { 
        display("SIGN UP.....SUCCESSFULL!!!!!!!!")
        window.location.href ="http://127.0.0.1:5500/shshankvanshkapapa.html";
        return true; 
    }
    alert("Warning!! passwords must match!!!");
    return false;
}