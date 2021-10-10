## Revisão de Conceitos

 - Por que usar Export Function ao invés de Export Default? <br>
 Dessa maneira quem define o nome do componente é o próprio componente que Exporta, e não quem o importa. Assim temos mais segurança e evitamos erros ao reutilizar componentes.

 <br>

 - Onde está a Configuração do Webpack? <br>
 Package.json > Dependencies > React-Scripts

<br>

- Por que usar Styled Components? <br>
- - Organização de códigos;
- - Permite unicidade no CSS, para que um estilo não afete outro;
- - Componentes herdam CSS assim como no SASS;

<br>

- Por que usar Template Literals (``) no Styled Components? <br>
Dessa forma podemos passar variaveis e até funções para dentro do CSS

<br>

- Por que diminuir o font size(fs) da pág? O que é REM e por que usar?<br>
- - Para dispositivos com resoluções diferentes, medidas diferentes.
- - REM é uma medida que usamos para definir o tamanho dos objetos.
- - Usa % para modificar o tamanho da fs, pois caso o usuario usa uma config para ajustar o tamanho das fonts o percentual faz essa modificação conforme a necessidade.
- - 1 REM equivale a tamanho do fs da página. Se eu diminuo o tamanho do fs, essa modificação impacta no REM que por sua vez impacta no tamanho dos objetos envolvidos, fazendo com que a aplicação fique mais responsiva.

<br>

Dica: Coloque o código: <link rel="preconnect" href=""> no começo do Index para as fonts serem a primeira coisa a ser carregada, otimizando até 25% o carregamento das mesmas

<br>

MirageJS: Construção de um API Fake simulando um backend
    * Banco de Dados Integrado
    * Relacionamentos
    * Preenchimento com dados ficticios

<br>

Por que Axios ao invés de Fetch? <br>
    No Fetch temos que:
    * colocar a requisição inteira. Ex: http://localhost:3000/api/transactions
    * transformar a resposta da requisição em JSON
<br>
    Axios:
    * interceptar requisições, caso precisamos mudar info antes do Front pegar
<br>
    Por que começar funções com Handle?
    É um Pattern que indica que uma função é executada a partir de alguma ação do usuário
<br>
    Para que Contextos?
    Contextos são usados quando você precisa passar informações de um componente para outro, independente da ordem hierarquica deles, de modo que um componente filho, possa passar uma informação para um componente pai ou componentes irmãos