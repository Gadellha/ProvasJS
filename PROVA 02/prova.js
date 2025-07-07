
let idade = parseInt(prompt("Digite sua idade:"));
let status = prompt("Já Possui Registro??  Digite '1' para SIM ou '2' para NÃO ").toLowerCase();

let maiorIdade = idade ;
if (idade >= 18){
    alert('Você é maior de idade!');
} else {
    alert('Você é menor de idade.')
}

switch (status) {
    case "1":
       alert("Bem-vindo(a)!");
        break;
    case "2":
        alert("Por favor, complete seu registro.");
        break;
    default:
        alert("Status desconhecido.");
}


if (idade >=18 && status === "1") {
    alert("Acesso completo.");
} else if (idade < 18 || status !== "1"){
    alert("Acesso limitado.");
}
