import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --white: #FFFFFF;
        --black: #111111;
        --red-1: #F40000;
        --red-alpha: rgba(255, 0, 0, 0.07);
        --gradient-1: linear-gradient(270deg, #F40000 0%, #FE7190 100%);
        --gradient-2: linear-gradient(270deg, #E10000 0%, #E90031 100%);; 
        --pink-1: #FE7190;
        --blue-1: #363B59;
        --blue-alpha: #363b59ee;
        --blue-2: #9599B5;
        --gray-1: #57585B;
        --gray-2: #999999;
        --gray-3: #CCCCCC;
        --gray-4: #E5E5E5;
        --gray-5: #F2F2F2;
        --yellow: #FCB468;
        --alert: #FCB468;

    }

    @font-face {
        font-family: "HurmeGeometricSans3", sans-serif;
        src: url("../fonts/HurmeGeometricSans3 Light.otf");
        font-weight: 300;
    }

    @font-face {
        font-family: "HurmeGeometricSans3", sans-serif;
        src: url("../fonts/HurmeGeometricSans3.otf");
        font-weight: 400;
    }

    @font-face {
        font-family: "HurmeGeometricSans3", sans-serif;
        src: url("../fonts/HurmeGeometricSans3 SemiBold.otf");
        font-weight: 600;
    }

    @font-face {
        font-family: "HurmeGeometricSans3", sans-serif;
        src: url("../fonts/HurmeGeometricSans3 Bold.otf");
        font-weight: 700;
    }

    @font-face {
        font-family: "HurmeGeometricSans3", sans-serif;
        src: url("../fonts/'HurmeGeometricSans3 Black.otf'");
        font-weight: 900;
    }

    @font-face {
        font-family: 'Roboto Condensed', sans-serif;
        src: url("'https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap");
    }

    @font-face {
        font-family: "UbuntuRegular", sans-serif;
        src: local('UbuntuRegular'), url("../fonts/'Ubuntu-Regular.ttf") format('ttf');
        font-weight: 700;
    }

    h1, h2, h3, h4 {
        margin: 0;
    }
`;
