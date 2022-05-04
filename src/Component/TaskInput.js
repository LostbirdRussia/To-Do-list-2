import React from 'react';

class TaskInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: ''
        };
    }


    addTask = () => {
        const { input } = this.state;
        if(input) {
            this.props.addTask(input);
            this.setState({ input: ''});
        }  
    };


    handeleEnter = event => {
        if (event.key === 'Enter') this.addTask();
    };


    inputChange = event => {
        this.setState({ input: event.target.value});
    };


    render() {
        const { input } = this.state;
        // const ActionBt = () => <div>{!TaskInput.done ? <p>х</p></div>;

        return (
            <div className="task-input">
                <input 
                onKeyPress={this.handeleEnter}
                onChange={this.inputChange} 
                value={input}
                ></input>
                <button onClick={this.addTask}>ADD</button> 
                {/* кнопка add */}
            </div>
        );
    }
}

export default TaskInput;