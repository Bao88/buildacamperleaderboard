import React from 'react';
import ReactDOM from 'react-dom';
import "./css/index.css";
import registerServiceWorker from './js/registerServiceWorker';



class App extends React.Component {
    state = {list: []};

    loadData() {
        // fetch("https://fcctop100.herokuapp.com/api/fccusers/top/recent") 
        fetch("https://randomuser.me/api/?results=100")
        .then((resp) => resp.json())
        .then(data => {
            var array = data;
            console.log(array);
            this.setState({list: array.results});
            // console.log(array.results[0]);
        })
        .catch(function(error){
            console.log(error);
        })
    }

    componentDidMount() {
        this.loadData();
    }

    render(){
        const myList = this.state.list.map((person) => 
            <div key={person.email}>
                <div>Image</div>
                <div>Name</div>
                <div>Points</div>
                <div>Alltimes</div>
            </div>
            
        );
        return (
            <div>
                <h1 className="title">Top 100 in the last 30 days</h1>
                <div id="brownies">
                    {myList}
                </div>
            </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('content'));
registerServiceWorker();
