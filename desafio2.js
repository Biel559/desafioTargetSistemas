//Escreva um programa que verifique, em uma string, 
//a existência da letra ‘a’, seja maiúscula ou 
//minúscula, além de informar a quantidade de 
//vezes em que ela ocorre.

function countLetterA(str) {
    // Transforma a string em letras minúsculas para deixar mais fácil a busca
    const lowerStr = str.toLowerCase();
    
    // Variável para contar o número de vezes que 'a' aparece
    let count = 0;

    // Itera sobre cada caractere da string
    for (let i = 0; i < lowerStr.length; i++) {
        if (lowerStr[i] === 'a') {
            count++;
        }
    }

    return count;
}

// Exemplo
const inputString = "Bom diaaaa!";

// Chama a função para contar as ocorrências
const count = countLetterA(inputString);

// Exibe o resultado
if (count > 0) {
    console.log(`A letra 'a' (maiúscula ou minúscula) aparece ${count} vezes na string.`);
} else {
    console.log("A letra 'a' (maiúscula ou minúscula) não foi encontrada na string.");
}
