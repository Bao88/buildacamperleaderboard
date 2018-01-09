import React from 'react';
import ReactDOM from 'react-dom';
import "./css/index.css";
import registerServiceWorker from './js/registerServiceWorker';

class App extends React.Component {
    render(){
        return (
            <div>
                "hello world"
            </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('content'));
registerServiceWorker();
