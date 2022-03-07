import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from 'styled-components';

import App from './App';
import Style, {theme} from "./style";

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Style/>
            <App/>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
