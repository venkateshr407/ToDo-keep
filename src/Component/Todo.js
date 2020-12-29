import React, { Component } from 'react'
import styles from '../Component/todos.module.css';
import svg from '../assest/todo2.svg';


export default class Todo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            todoText:"",
        }
    }

    addTodo = (e) =>{
        e.preventDefault();
        this.props.addTodo(this.state.todoText)
        this.setState({todoText:''})
    }
    
    render() {
        const day = new Date().getDay();
        const days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ];
        let display = days[day];
        return (
            <div>
                <div className={styles.heading}>
                    <img className={styles.svg} src={svg}/>
                    <h1>{display}'s task</h1>
                </div>
            <div className={styles.todo}>
                <div>
                    <form onSubmit={this.addTodo}>
                        <input
                            type="text"
                            placeholder="what you do today?"
                            value={this.state.todoText}
                            onChange={(e) => this.setState({todoText:e.target.value})}
                        />
                    </form>
                </div>
            </div>
          
            </div>
        )
    }
}
