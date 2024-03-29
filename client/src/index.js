import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import registerServiceWorker from './registerServiceWorker';

ReactDom.render(<App />, document.getElementById('react-app'));
registerServiceWorker();