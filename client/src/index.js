import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Provider from "./CycloContext"
import { StyleSheetManager } from 'styled-components';
import isPropValid from "@emotion/is-prop-valid";

const shouldForwardProp = (propName, target) => {
    if (typeof target === "string") {
        // For HTML elements, forward the prop if it is a valid HTML attribute
        return isPropValid(propName);
    }
    // For other elements, forward all props
    return true;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider>
        <StyleSheetManager shouldForwardProp={shouldForwardProp}>
            <App />
        </StyleSheetManager>
    </Provider>
);