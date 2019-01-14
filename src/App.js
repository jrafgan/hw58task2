import React, {Component} from 'react';
import './App.css';
import Alert from "./ui/Alert/Alert";

class App extends Component {

    state = {
        show: true,
    };
    types = ['primary', 'success', 'danger', 'warning'];
    counter = 0;

    close() {
        let copy = this.state.show;
        copy = false;
        this.setState({show: copy});
        this.counter < 3 ? this.counter++ : this.counter = 0;
        this.changeAlert();
    }

    changeAlert() {
        setTimeout(()=> {
            let copy = this.state.show;
            copy = true;
            this.setState({show: copy});
        }, 1000)
    }

    dismiss() {
        alert('You clicked on Close button ')
    }

    render() {
        if (this.types[this.counter] === 'warning' || 'danger') {

        }

        return (
            <div className="App">
                <Alert
                    show={this.state.show}
                    type={this.types[this.counter] }
                    onClick={this.close = this.close.bind(this)}
                    dismiss={this.dismiss}
                />
            </div>
        );
    }
}

export default App;
