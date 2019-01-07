import { Component } from "react";
import ReactDOM from "react-dom";
import Header from '../components/Header.js';
import '../scss/app.scss'

class HelloMessage extends Component {
    render() {
        return <div>
            <div className="container">
                <Header></Header>
                <h1>This is he h1 {this.props.name}</h1>
            </div>
        </div>
    }
}

let App = document.getElementById("app");

ReactDOM.render(<HelloMessage name="Yomi" />, App);