import React, { Component } from 'react'
import styles from '../Component/todos.module.css';
export default class TodoTemplate extends Component {
  
    render() {
        return (
            <div className={styles.main}>
                <div className={styles.content} style={{backgroundColor:this.props.todoData.status?'#00ffaa':null}}>
                    <p style={{color:this.props.todoData.status?'#000':null, 
                               fontWeight:this.props.todoData.status?'bold':null,
                               textDecoration:this.props.todoData.status?'line-through':null}
                            }
                    >{this.props.todoData.title}</p>
                    <div className={styles.status}>
                        {this.props.todoData.status? false:
                        <i class="fas fa-check-circle done"  style={{color:this.props.todoData.status?'#ff0000':null}} onClick={() => this.props.completeTodo(this.props.todoData.id)}/>}
                        
                        <i class="fas fa-trash delete" style={{color:this.props.todoData.status? '#ff0000':false}} onClick={() => this.props.deleteTodo(this.props.todoData.id)}/>
                    </div>
                </div>
            </div>
        )
    }
}
