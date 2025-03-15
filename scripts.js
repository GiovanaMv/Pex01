AOS.init();

document.getElementById("impactoForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtendo os valores do formulário
    const quantidadeGarrafas = document.getElementById("quantidade").value;
    const diasEnergia = document.getElementById("energia").value;

    // Cálculos simples
    const aguaEconomizada = quantidadeGarrafas * 0.5; // Supondo que cada garrafa plástica reciclada economize 0.5L de água
    const co2Evitado = quantidadeGarrafas * 0.02; // Supondo que cada garrafa plástica reciclada evite 0.02Kg de CO2
    const energiaEconomizada = diasEnergia * 1; // Supondo que o uso de energia sustentável economize 1kWh por dia

    // Exibindo os resultados
    document.getElementById("aguaEconomizada").querySelector("span").textContent = aguaEconomizada;
    document.getElementById("co2Evitado").querySelector("span").textContent = co2Evitado;
    document.getElementById("energiaEconomizada").querySelector("span").textContent = energiaEconomizada;

    document.getElementById("resultado").style.display = "block";
});


document.getElementById("calculadoraValorForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtendo os valores do formulário
    const material = document.getElementById("material").value;
    const quantidade = parseFloat(document.getElementById("quantidade").value);

    // Definindo os valores por quilo (estimativa)
    const precos = {
        ferro: 2.5,   // preço estimado por quilo (exemplo)
        plastico: 3.0, // preço estimado por quilo
        papel: 1.2,    // preço estimado por quilo
        vidro: 1.5,    // preço estimado por quilo
        aluminio: 4.0  // preço estimado por quilo
    };

    // Calculando o valor total
    if (quantidade > 0) {
        const valorTotal = quantidade * precos[material];
        document.getElementById("valorTotal").textContent = `R$ ${valorTotal.toFixed(2)}`;
        document.getElementById("resultado-valor").style.display = "block";
    } else {
        alert("Por favor, insira uma quantidade válida.");
    }
});
