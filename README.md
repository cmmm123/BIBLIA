# Guia da Mostra Bíblica + Bíblia Sagrada (Boa Terra)

Site estático, sem build, para hospedar no Netlify (ou qualquer hospedagem de arquivos).

| Endereço | O que é |
|---|---|
| `/` | **Guia da Mostra**: 5 estandes em ordem, com resumo, galeria, curiosidades e quiz. No final, convite para instalar o app. |
| `/biblia/` | **Bíblia Sagrada** (73 livros), com leitura, busca, explorar e a aba Fé. Instalável como app (PWA). |

## Estrutura

```
index.html              página do guia (só a estrutura)
css/                    estilos do guia (base.css, guia.css)
js/
  config.js             constantes (nº de estandes, link do app)
  arte/                 ilustrações SVG (base.js = ferramentas; estande-N.js = desenhos de cada estande)
  dados/estandes.js     textos dos 5 estandes (títulos, resumo, curiosidades, legendas)
  dados/quiz.js         perguntas do quiz (3 por estande)
  app/                  lógica do guia: núcleo, navegação, quiz, tema, instalação, eventos
img/                    logos, mockup do app e fotos opcionais (veja img/LEIA-ME.txt)
biblia/
  index.html            página do app da Bíblia
  css/                  estilos (app.css, instalar.css)
  data/                 livros.js, biblia-almeida.js (texto), versiculos.js
  js/                   base, estado, voz, telas, busca, conteúdo, módulos da aba Fé, principal
manifest.webmanifest    dados do app instalável
sw.js                   service worker (funciona offline)
netlify.toml, _headers  configuração do Netlify
```

Os arquivos JS são scripts comuns carregados em ordem pelo `index.html` de cada página; a ordem importa.

## Como editar

- **Textos dos estandes:** `js/dados/estandes.js`.
- **Perguntas do quiz:** `js/dados/quiz.js` (cada pergunta tem `q`, opções `o`, índice da certa `c` e explicação `e`).
- **Fotos reais:** coloque `e{estande}-{0..5}.jpg` em `img/` e liste em `img/fotos.json`.
- **Ao publicar mudanças:** altere o número da versão `V` em `sw.js` para os aparelhos atualizarem o cache.

## Publicar no Netlify

Conecte o repositório, deixe o comando de build vazio e use `.` como diretório de publicação (já configurado em `netlify.toml`). Em HTTPS, o botão "Instalar" do guia instala o app da Bíblia.

## Créditos

Texto bíblico: Almeida (domínio público) e livros deuterocanônicos de domínio público digitalizados (a numeração segue a edição digitalizada; o texto pode ter pequenos erros de digitalização).
Logos: projeto Boa Terra e Centro Educacional Ágape.
