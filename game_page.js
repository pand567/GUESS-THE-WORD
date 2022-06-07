pl1n = localStorage.getItem("p1n");
pl2n = localStorage.getItem("p2n");

pl1s = 0;
pl2s = 0;

document.getElementById("p1n").innerHTML = pl1n + " : ";
document.getElementById("p2n").innerHTML = pl2n + " : ";

document.getElementById("p1s").innerHTML = pl1s;
document.getElementById("p2s").innerHTML = pl2s;

document.getElementById("pq").innerHTML = "Question turn - " + pl1n;
document.getElementById("pa").innerHTML = "Answer turn - " + pl2n;
 
qt = "player1";
at = "player2";
function send(){
    gw = document.getElementById("word").value;
    word = gw.toLowerCase();
    console.log("word in lowercase = " + word);

    charAt1 = word.charAt(1);
    console.log(charAt1);

    ld2 = Math.floor(word.length/2);
    charAt2 = word.charAt(ld2);
    console.log(charAt2);

    lm1 = word.length - 1;
    charAt3 = word.charAt(lm1);
    console.log(charAt3);

    rc1 = word.replace(charAt1, "_");
    rc2 = rc1.replace(charAt2, "_");
    rc3 = rc2.replace(charAt3, "_");
    console.log(rc3);

    qw = "<h4 id='word_display'> Q." + rc3+"</h4>";
    ib = "<br> Answer : <input type='text' id='input_check_box'>";
    cb = "<br><br><button class='btn btn-info' onclick = 'check()'> Check</button>";
    row = qw + ib + cb;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";

}
  

function check(){
    ga = document.getElementById("input_check_box").value;
    a = ga.toLowerCase();
    console.log("answer in lower case - " + a);
    if(a == word){
        if(at == "player1"){
            pl1s = pl1s +1;
            document.getElementById("p1s").innerHTML = pl1s;
        }
        else{
            pl2s = pl2s +1;
            document.getElementById("p2s").innerHTML = pl2s; 
        }
    }
        if(qt == "player1"){
            qt="player2"
            document.getElementById("pq").innerHTML = "question turn - " + pl2n;
        }
        else{
            qt="player1"
            document.getElementById("pq").innerHTML = "question turn - " + pl1n;
        }
        if(at == "player1"){
            at="player2"
            document.getElementById("pa").innerHTML = "answer turn - " + pl2n;
        }
        else{
            at="player1"
            document.getElementById("pa").innerHTML = "answer turn - " + pl1n;
        }
        document.getElementById("output").innerHTML = "";
    
}
