import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root{
        --red: #E52E4D;
        --blue: #5429CC;
        --blue-light: #6933FF;
        --green: #33CC95;
        --text-title: #363f5f;
        --text-body: #969cb3;
        --background: #F0F2F5;
        --shape: #ffffff;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    // Por padrão, o tamanho de font da app é de 16px, sendo ideal para Desktop
    html{
        @media(max-width: 1080px){
            font-size: 93.75%;  // Converte para 15px
        }

        @media(max-width: 720px){
            font-size: 87.5%;   // Converte para 14px
        }
    } 

    body{
        background: var(---background);
        -webkit-font-smooth: antialised;    // Para navegadores que usam webkits. Deixa as Fontes mais detalhadas/nítidas
    }

    body, input, textarea, button{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h4, h5, h6, strong{
        font-weight: 600;
    }

    button{
        cursor: pointer;
    }

    [disabled]{ // Tudo que estiver desabilitado
        opacity: 0.6;
        cursor: not-allowed;
    }
`