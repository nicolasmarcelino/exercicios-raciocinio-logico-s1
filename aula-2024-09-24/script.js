function exercicio1() {
    let count = 1;
    let number = 7;
    while (count < 11) {
        document.write(number+" x "+count+" = "+(number*count)+"<br>");
        count++;
    }
}

function exercicio2() {
    let count = 0;
    while (count < 5) {
        let number = prompt("Insira um número:");
        document.write("Valor lido: "+number+"<br>");
        count++;
    }
}

function exercicio3() {
    let count = 0;
    while (count < 5) {
        let number = prompt("Insira um número:");
        if (number % 2 != 0) {
            document.write("Valor lido: "+number+" (ímpar)"+"<br>");
        } else {
            document.write("Valor lido: "+number+" (par)"+"<br>");
        }
        count++;
    }
}