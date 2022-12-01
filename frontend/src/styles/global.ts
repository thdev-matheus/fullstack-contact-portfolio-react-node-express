import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        
        border: none;
        outline: none;

        box-shadow: 0 0 0 0;
        box-sizing: border-box;

        font-family: "Ubuntu";
    }

    :root {
        --black: #2c3e50;
        --white: #ecf0f1;
        --gray: #95a5a6;
        --silver: #bdc3c7;
        --light-pink: #fd79a8;
        --pink: #e84393;
        --red: #ff3030;

        --toastify-color-dark: #455a64;
        --toastify-color-success: #7cb342;
        --toastify-color-error: #f44336;

        --toastify-font-family: "Ubuntu";

        --toastify-text-color-dark: var(--silver);


        // Used when no type is provided
        --toastify-color-progress-dark: #263238;
        --toastify-color-progress-success: var(--toastify-color-success);
        --toastify-color-progress-error: var(--toastify-color-error);
    }

    body {
        width: 100vw;
        height: 100vh;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        overflow: hidden auto;

        background-color: var(--black);
        color: var(--silver);
    }
`;
