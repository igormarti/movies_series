import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    *{
        padding:0;
        margin:0;
        outline:0;
        box-sizing:border-box;
    }

    html, body, #root{
        min-height:100%;
    }

    body{
        background-image:url("/assets/img/newmu_base_set_dsk.jpg");
        background-repeat: no-repeat;
        background-position:right;
        background-size:cover;
        background-color:#000;
        -webkit-font-smoothing:antialiased !important;
    }

    border-style,input, button{
        color:#222;
        font-size: 14px;
        font-family: Arial, Helvetica, sans-serif;
    }

    button{
        cursor: pointer;
    }

`;
