let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')
//let respostaEsta = document.querySelector('#respostaEsta')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    alternativaD : "Alternativa D",
    correta      : "0",
}

const q1 = {
    numQuestao   : 1,
    pergunta     : "O que é hardware?",
    alternativaA : "Um conjunto de instruções digitais para um PC",
    alternativaB : "Peças eletrônicas que compõem um PC",
    alternativaC : "Um tipo de software",
    correta      : "Peças eletrônicas que compõem um PC",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "Qual é a relação entre hardware e software?",
    alternativaA : "O software é a parte física, enquanto o hardware são as instruções digitais para controlá-lo",
    alternativaB : "Eles são a mesma coisa",
    alternativaC : "O hardware é a parte física, enquanto o software são as instruções digitais para controlá-lo",
    correta      : "O hardware é a parte física, enquanto o software são as instruções digitais para controlá-lo",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "O que significa a sigla 'BIOS' em relação ao processo de inicialização de um computador?",
    alternativaA : "Basic Input/Output System",
    alternativaB : "Binary Input/Output Software",
    alternativaC : "Base Input/Output Setup",
    correta      : "Basic Input/Output System",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "Qual é a função do kernel durante o processo de boot?",
    alternativaA : "Carregar todos os programas e processos do sistema operacional",
    alternativaB : "Estabelecer uma comunicação estável entre hardware e software",
    alternativaC : "Inicializar a memória RAM e a placa de vídeo",
    correta      : "Estabelecer uma comunicação estável entre hardware e software",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "Qual é a função principal do sistema operacional em um dispositivo eletrônico?",
    alternativaA : "Realizar testes de hardware",
    alternativaB : "Atuar como um programa de proteção contra vírus",
    alternativaC : "Gerenciar e administrar todos os recursos do sistema",
    correta      : "Gerenciar e administrar todos os recursos do sistema",
}

const q6 = {
    numQuestao   : 6,
    pergunta     : "Além de computadores e notebooks, em quais outros dispositivos o sistema operacional pode ser encontrado?",
    alternativaA : "Apenas em consoles de videogame",
    alternativaB : "Apenas em celulares e tablets",
    alternativaC : "Em todos os dispositivos eletrônicos",
    correta      : "Em todos os dispositivos eletrônicos",
}

const q7 = {
    numQuestao   : 7,
    pergunta     : "O que é a principal diferença entre memória e armazenamento em computadores?",
    alternativaA : "Memória é permanente, enquanto armazenamento é temporário",
    alternativaB : "Memória refere-se a dados de curto prazo, enquanto armazenamento é para dados de longo prazo",
    alternativaC : "Memória é usada para armazenar aplicativos, enquanto armazenamento é usado para armazenar documentos",
    correta      : "Memória refere-se a dados de curto prazo, enquanto armazenamento é para dados de longo prazo",
}

const q8 = {
    numQuestao   : 8,
    pergunta     : "Por que a memória é esvaziada quando o computador é desligado, enquanto o armazenamento permanece intacto?",
    alternativaA : "Porque a memória é mais durável que o armazenamento",
    alternativaB : "Porque a memória armazena informações de longo prazo",
    alternativaC : "Porque a memória é projetada para armazenar apenas dados temporários.",
    correta      : "Porque a memória é projetada para armazenar apenas dados temporários.",
}

const q9 = {
    numQuestao   : 9,
    pergunta     : "O que é a linguagem de máquina em relação à execução de código?",
    alternativaA : "Códigos numéricos que os computadores podem executar diretamente",
    alternativaB : "Uma linguagem de programação de baixo nível",
    alternativaC : "Um sistema de numeração em base 16",
    correta      : "Códigos numéricos que os computadores podem executar diretamente",
}

const q10 = {
    numQuestao   : 10,
    pergunta     : "O que caracteriza uma linguagem de alto nível?",
    alternativaA : "Está voltada para a simbologia da máquina e é difícil de ler",
    alternativaB : "É usada apenas por programadores experientes",
    alternativaC : "Sua sintaxe é voltada para o entendimento humano e é mais fácil de aprender",
    correta      : "Sua sintaxe é voltada para o entendimento humano e é mais fácil de aprender",
}

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
}

function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta 😊"
        pontos += 1
    } else {
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada 😢"
    }

    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {
        //respostaEsta.textContent = '...'
        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 250)
    desbloquearAlternativas()
}

function fimDoJogo() {
    instrucoes.textContent = "Fim de Jogo!"
    numQuestao.textContent = ""

    let pont = ''
    pontos == 0 ? pont = 'ponto' : pont = 'pontos'

    pergunta.textContent   = "Você conseguiu " + pontos + " " + pont

    aviso.textContent = "Você conseguiu " + pontos + " " + pont

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // zerar placar
        location.reload();
    }, 2000)
}