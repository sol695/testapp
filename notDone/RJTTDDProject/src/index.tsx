import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {Hello} from './components/Hello';

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" comp='STRING' firstName='Salavat' lastName='Ism' age={11}/>,
    document.getElementById('example')
);

