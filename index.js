const perguntas = [
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      resposta: [
        "var myVar;",
        "variável myVar;",
        "let myVar;",
      ],
      correta: 2
    },
    {
      pergunta: "O que o método 'querySelector()' faz em JavaScript?",
      resposta: [
        "Seleciona todos os elementos do documento.",
        "Seleciona o primeiro elemento que corresponde a um seletor CSS especificado.",
        "Altera o conteúdo de um elemento HTML.",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a sintaxe correta para um comentário de uma única linha em JavaScript?",
      resposta: [
        "// Este é um comentário de uma linha",
        "<!-- Este é um comentário de uma linha -->",
        "/* Este é um comentário de uma linha */",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
      resposta: [
        "==",
        "===",
        "!=",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do método 'push()' em um array em JavaScript?",
      resposta: [
        "Remove o último elemento do array.",
        "Adiciona um elemento ao final do array.",
        "Inverte a ordem dos elementos do array.",
      ],
      correta: 1
    },
    {
      pergunta: "O que o método 'parseInt()' faz em JavaScript?",
      resposta: [
        "Converte uma string em um número inteiro.",
        "Converte um número inteiro em uma string.",
        "Retorna a parte fracionária de um número.",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do operador 'typeof' em JavaScript?",
      resposta: [
        "Retorna o tipo de dado de uma expressão.",
        "Verifica se dois valores são iguais em valor e tipo.",
        "Inverte o valor de uma expressão booleana.",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do método 'slice()' em JavaScript?",
      resposta: [
        "Remove elementos de um array.",
        "Adiciona elementos a um array.",
        "Cria uma cópia superficial de uma parte de um array em um novo array.",
      ],
      correta: 2
    },
    {
      pergunta: "O que o operador '&&' faz em JavaScript?",
      resposta: [
        "Representa a operação 'ou'.",
        "Representa a operação 'não'.",
        "Representa a operação 'e'.",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do método 'toFixed()' em JavaScript?",
      resposta: [
        "Arredonda um número para o inteiro mais próximo.",
        "Formata um número usando notação científica.",
        "Formata um número com um número especificado de casas decimais.",
      ],
      correta: 2
    },
  ];
  
  const quiz = document.querySelector("#quiz");
  const template = document.querySelector("template");
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector("#acertos span")
  
  
  
  for(const item of perguntas) {
   const quizItem = template.content.cloneNode(true);
   quizItem.querySelector("h3").textContent = item.pergunta;
  
      for(let resposta of item.resposta) {
        const dt = quizItem.querySelector("dl dt").cloneNode(true);
        dt.querySelector("span").textContent = resposta;
        dt.querySelector("input").setAttribute("name", "pergunta-" + perguntas.indexOf(item))
        dt.querySelector("input").value = item.resposta.indexOf(resposta)
        dt.querySelector("input").onchange = (event) => {
          const estaCorreta = event.target.value == item.correta  
             
             corretas.delete(item)
          if(estaCorreta) {
             corretas.add(item)
          }
  
          mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas
        }
        
  
  
        
        quizItem.querySelector("dl").appendChild(dt);
      }
  
  quizItem.querySelector("dl dt").remove();
  quiz.appendChild(quizItem);
  
  }
  