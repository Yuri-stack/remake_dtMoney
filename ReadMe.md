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

