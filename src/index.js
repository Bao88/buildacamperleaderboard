import React from 'react';
import ReactDOM from 'react-dom';
import "./css/index.css";
import registerServiceWorker from './js/registerServiceWorker';



class Data extends React.Component {
     state = {list: []};
    loadData(which) {
        // console.log("called");
        var url = which ? "https://fcctop100.herokuapp.com/api/fccusers/top/recent":"https://fcctop100.herokuapp.com/api/fccusers/top/alltime";
        fetch(url) 
        // fetch("https://randomuser.me/api/?results=100")
        .then((resp) => resp.json())
        .then(data => {
            var array = data;
            console.log(array);
            this.setState({list: array});
            // console.log(array.results[0]);
        })
        .catch(function(error){
            console.log(error);
        })
    }

    componentDidMount() {
        this.loadData(true);
    }

    render() {
        const myList = this.state.list.map((person, index) => 
            <div key={person.username}>
                <span>{index+1}</span>
                <img src={person.img} alt={person.img}/>
                <span>{person.username}</span>
                <span>{person.recent}</span>
                <span>{person.alltime}</span>
            </div>
        );
        return myList
    }
}

class App extends React.Component {
    state = {bool: true};

    loadRecent = () => {
        this.setState({bool: true});
        console.log("load recent");
    }

    loadAlltime = () => {
        this.setState({bool: false});
        console.log("load alltime");
    }
    render(){
        const titles = {
            width: "580px"
        };
        const click = {
            cursor: "pointer"
        }

        return (
            <div>
                <h1 className="title">Top 100 in the last 30 days</h1>
                <div id="brownies">
                    <div className="resultTitle">
                        <span>#</span>
                        <div></div>
                        <span style={titles}>Camper name</span>
                        <span onClick={() => {this.data.loadData(true)}} style={click}>Recent</span>
                        <span onClick={() => {this.data.loadData(false)}} style={click}>Alltime</span>
                    </div>
                    <Data ref={instance =>  {this.data = instance;}}/>
                </div>
            </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('content'));
registerServiceWorker();
