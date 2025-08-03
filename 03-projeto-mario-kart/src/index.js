// Modified by Fabio Toledo Bonemer De Salvi

// Objects
const player1 = {
    NOME: "Mario",
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
    PONTOS: 0,
};

const player2 = {
    NOME: "Luigi",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 4,
    PONTOS: 0,
};

// Async functions
async function rollDice(){
    return Math.floor(Math.random() * 6) + 1;
}

// Switch Case
async function getRandomBlock(){
    let random = Math.random()
    let result

    // Switch case
    switch (true) {
        case random < 0.33:
            result = "RETA";
            break;
        case random < 0.66:
            result = "CURVA";
            break;
        default:
            result = "CONFRONTO";
    }

    return result;
}

// Functions Chains
async function playRaceEngine(character1, character2){
    // For
    // const -> não pode ser modificado
    // let -> pode ser modificado
    for(let round = 1; round <= 5; round++) {
        console.log(`🏁 Rodada ${round}`);

        // Sortear bloco
        let block = await getRandomBlock()
        console.log(`Bloco: ${block}`);

        // rolar os dados
        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();

        // teste de habilidade
        let totalTestSkill1 = 0;
        let totalTestSkill2 = 0;

        // Testando Blocos - if
        if(block == "RETA"){
                totalTestSkill1 = diceResult1 + character1.VELOCIDADE;
                totalTestSkill2 = diceResult2 + character2.VELOCIDADE;

                await logRollResult(
                    character1.NOME, 
                    "velocidade",
                    diceResult1,
                    character1.VELOCIDADE
                );

                await logRollResult(
                    character2.NOME, 
                    "velocidade",
                    diceResult2,
                    character2.VELOCIDADE
                );
        }          

        if(block == "CURVA"){
                totalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE;
                totalTestSkill2 = diceResult2 + character2.MANOBRABILIDADE;

                await logRollResult(
                    character1.NOME, 
                    "manobrabilidade",
                    diceResult1,
                    character1.MANOBRABILIDADE
                );

                await logRollResult(
                    character2.NOME, 
                    "manobrabilidade",
                    diceResult2,
                    character2.MANOBRABILIDADE
                );            
        }   

        if(block == "CONFRONTO"){
            // Escopo de variáveis
            let powerResult1 = diceResult1 + character1.PODER;
            let powerResult2 = diceResult2 + character2.PODER;

            console.log(`${character1.NOME} confrontou com ${character2.NOME}! 🥊!`);

            await logRollResult(
                character1.NOME, 
                "poder",
                diceResult1,
                character1.PODER
            );

            await logRollResult(
                character2.NOME, 
                "poder",
                diceResult2,
                character2.PODER
            );       

            // Diminuindo Ifs - If ternario
            /*character2.PONTOS -=
                powerResult1 > powerResult2 && character2.PONTOS > 0 ? 1 : 0;*/

            // Condição Dupla - If Combinado
            if (powerResult1 > powerResult2 && character2.PONTOS > 0) {
                console.log(
                    `${character1.NOME} venceu o confronto! ${character2.NOME} perdeu 1 ponto 🐢!`
                );
                character2.PONTOS--;
            }
            
            /*if (powerResult1 > powerResult2) {
                if (character2.PONTOS > 0) {
                    character2.PONTOS--;
                }
            } */

            // Diminuindo Ifs - If ternario
            /*character1.PONTOS -=
                powerResult1 < powerResult2 && character1.PONTOS > 0 ? 1 : 0;*/

            // Condição Dupla - If Combinado
            if (powerResult1 < powerResult2 && character1.PONTOS > 0) {
                console.log(
                    `${character2.NOME} venceu o confronto! ${character1.NOME} perdeu 1 ponto 🐢!`
                );                
                character1.PONTOS--;
            }

            /*if (powerResult1 < powerResult2) {
                if (character1.PONTOS > 0) {
                    character1.PONTOS--;
                }
            }*/   
            
            // Diminuindo Ifs - If ternario
            console.log(
                powerResult1 == powerResult2
                ? "Confronto empatado! Nenhum ponto foi perdido!"
                : ""
            );
            /*if (powerResult1 == powerResult2) {
                console.log("Confronto empatado! Nenhum ponto foi perdido!");
            }*/           
        }           

        // Verificando o vencedor.
        // Winner - Else If's
        if (totalTestSkill1 > totalTestSkill2) {
            console.log(`${character1.NOME} marcou um ponto!`);
            character1.PONTOS++;
        } else if (totalTestSkill1 < totalTestSkill2) {
            console.log(`${character2.NOME} marcou um ponto!`);
            character2.PONTOS++;
        }

        console.log("-----------------------------------------");

    }

}

// Encapsulate
async function logRollResult(characterName, block, diceResult, attribute) {
    // Javascript Expressions: $ {
    //                              a + b
//                              }
    console.log(`${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${
        attribute} = ${           
            diceResult + attribute
        }`);
}

// Game Over - Clean Ifs
async function declareWinner(character1, character2) {
    console.log("Resultado final:");
    console.log(`${character1.NOME}: ${character1.PONTOS} ponto(s).`);
    console.log(`${character2.NOME}: ${character2.PONTOS} ponto(s).`);

    // If encadeado
    if (character1.PONTOS > character2.PONTOS) 
        console.log(`\n${character1.NOME} venceu a corrida! Parabéns! 🏆!`);
    else if ((character2.PONTOS > character1.PONTOS)) 
        console.log(`\n${character2.NOME} venceu a corrida! Parabéns! 🏆!`);        
    else 
        console.log("A corrida terminou em empate!");
    
}

// Auto invoke
(async function main() {
    console.log(`🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando...\n`)

    await playRaceEngine(player1, player2);
    await declareWinner(player1, player2);
})();

/*
// Or
async function main() {
    console.log(`🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando...\n`)

    await playRaceEngine(player1, player2);
    await declareWinner(player1, player2);
}

main();
*/

// To insert icon press "win" + ".".

/*
    - Confronto
        - sortear aleatoriamente se é um casco (-1 ponto) ou uma bomba (-2 pontos)
        - quem vence o confronto ganha um turbo (+ 1 ponto) aleatoriamente.
*/
