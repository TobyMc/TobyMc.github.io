var c = 0;


function counter() {
    var anchor = document.getElementById("anchor");

    c = c + 1;
    anchor.innerHTML = c;

    console.log('called counter')

}

setTimeout(counter(), 10000);
