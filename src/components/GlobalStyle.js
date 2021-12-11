import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        font-family: 'Inter', sans-serif;
        background: #1B1B1B;
    }
 button {
    font-weight: bold;
    font-size: 1.1rem;
    cursor:pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    font-family: 'Inter', sans-serif;
    &:hover {
      background: #23d997;
      color: white;
    }
  }
    a{
        font-size: 1.1rem;
        
    }
    h2{
      font-weight:lighter;
        font-size: 4rem;
    }
    h3{
      color:white;
    }
    p{
        font-size: 1.6rem;
        line-height: 150%;
    }
    h4{
      font-weight:bold;
        font-size: 2rem;
    }
      span {
    font-weight: bold;
    color: #23d997;
  }

`

export default GlobalStyle
