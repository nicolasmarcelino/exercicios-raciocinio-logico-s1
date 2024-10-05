function exercicio1() {

}

function exercicio2() {
    let a = 5;
    let b = 4;
    let c = 9;
    let d;

    document.write("O valor inicial de a é " + a + "<br>");
    document.write("O valor inicial de b é " + b + "<br>");
    document.write("O valor inicial de c é " + c + "<br>" + "<br>");

    d = b;
    b = a;
    a = c;
    c = d;

    document.write("O valor final de a é " + a + "<br>");
    document.write("O valor final de b é " + b + "<br>");
    document.write("O valor final de c é " + c + "<br>");
}

function exercicio3() {
    let idade = 0;
    let altura = 0;
    let n = 0;
    let j = 0;

    while (n < 15) {
        idade += Number(prompt("Idade:"));
        altura = Number(prompt("Altura (em cm):"));
        if (altura >= 170) {
            j++;
        }
        n++;
    }

    let media = idade / n;

    document.write("Média de idades: "+media);
    document.write("<br>");
    document.write("Qtd. de pessoas com altura igual ou superior a 1.70m: "+j);
}