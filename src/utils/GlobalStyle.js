import { createGlobalStyle } from "styled-components";
import "../assets/scss/fonts.scss";

const GlobalStyle = createGlobalStyle`
    body,html{
      min-height: 100%;
      padding: 0;
      margin: 0;
      background: rgb(20, 20, 23);
      color: rgba(255, 255, 255, 0.55);
    }
    *{
      font-family: "Lato-Regular";
      -ms-overflow-style: none;
      overflow: -moz-scrollbars-none;
      &::-webkit-scrollbar { width: 0 !important }
    }
    a {
      text-decoration: none;
      color: unset;
      &:hover {
        color: unset;
      }
    }
   ul,li,dl,dt,dd{
     padding: 0;
     margin: 0;
     list-style: none;
   }
  
`;

export default GlobalStyle;
