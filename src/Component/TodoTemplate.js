import React, { Component } from 'react'
import styles from '../Component/todos.module.css';
export default class TodoTemplate extends Component {
    state = {
        date: new Date()
    }
  
    render() {
        return (
            <div className={styles.main}>
                <div className={styles.content} style={{backgroundColor:this.props.todoData.status?'#00ffaa':null}}>
                    <p style={{color:this.props.todoData.status?'#000':null, 
                               fontWeight:this.props.todoData.status?'bold':null,
                               textDecoration:this.props.todoData.status?'line-through':null}
                            }
                    >{this.props.todoData.title}<span className={styles.date} style={{display:this.props.todoData.status? 'none':false}}>{this.state.date.toLocaleTimeString()}</span></p>
                    <div className={styles.status}>
                        {this.props.todoData.status? false:
                        <i className="fas fa-check-circle done"  style={{color:this.props.todoData.status?'#ff0000':null}} onClick={() => this.props.completeTodo(this.props.todoData.id)}/>}
                        
                        <i className="fas fa-trash delete" style={{color:this.props.todoData.status? '#ff0000':false}} onClick={() => this.props.deleteTodo(this.props.todoData.id)}/>
                    </div>
                </div>
            </div>
        )
    }
}
