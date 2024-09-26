function exercicio1() {

    let nota1 = Number(prompt("Nota 1:"));


    while (nota1 < 0 || nota1 > 10) {
        alert("O valor deve ser de 0 a 10.")
        nota1 = Number(prompt("Nota 1:"));    
    }

    let nota2 = Number(prompt("Nota 2:"));
    while (nota2 < 0 || nota2 > 10) {
        alert("O valor deve ser de 0 a 10.")
        nota2 = Number(prompt("Nota 2:"));    
    }

    document.write("Média: "+((nota1+nota2)/2).toFixed(1));
}

function exercicio2() {
    let gramas = Number(prompt("Massa inicial:"));
    let s = 0;

    while (gramas >= 2) {
        gramas = gramas - (gramas * 0.12);
        s = s + 140;
    }

    document.write(s+" segundos")
}

function exercicio3() {
    let num = 12;
    let count = 1;
    while (count != num) {
        if (num % count == 0) {
            document.write(count+"<br>");
        }
        count++;
    }
}