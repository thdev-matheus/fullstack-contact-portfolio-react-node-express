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
        --dark-purple: #562155;
        --medium-purple: #72577c;
        --grey-purple: #8e8ca3;
        --grey-green: #a9c2c9;
        --light-green: #c5f7f0;
        --white: #ecf0f1;


        --toastify-color-dark: var(--medium-purple);
        --toastify-color-success: #7cb342;
        --toastify-color-error: #f44336;

        --toastify-font-family: "Ubuntu";

        --toastify-text-color-dark: var(--white);


        // Used when no type is provided
        --toastify-color-progress-dark: var(--light-green);
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

        background-color: var(--dark-purple);
        color: var(--white);
    }
`;
