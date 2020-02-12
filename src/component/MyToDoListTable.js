import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteTodo,toggleTodo,loadTodo,saveTodo, setVisibilityFilter} from "../actions/actionCreator";
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from "../actions/actionsTypes";
import { bindActionCreators } from "redux";
import { Button, Message, Table } from 'semantic-ui-react'

class MyToDoListTable extends Component {

  componentDidMount(){
     this.props.loadTodo();
  }
  
  render() {
    return (
      <React.Fragment>
            <Button onClick={() => this.props.setVisibilityFilter(SHOW_ALL)}>All</Button>
            <Button onClick={() => this.props.setVisibilityFilter(SHOW_COMPLETED)}>Completed</Button>
            <Button onClick={() => this.props.setVisibilityFilter(SHOW_ACTIVE)}>Active</Button>
        {this.props.todos.length !== 0 ? (
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>My TODO List</Table.HeaderCell>
                <Table.HeaderCell>Actions</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
            {this.props.todos.map((todo,index) => (  
                <Table.Row key={index}>
                  <Table.Cell style={{textDecoration: todo.completed ? "line-through" : "none" }}>
                    {todo.text} {todo.completed === true ? "(completed)" : ""}
                  </Table.Cell>
                  <Table.Cell>
                    <Button color='red' size='tiny' icon='delete' onClick={() => this.props.deleteTodo(todo.id)}/>
                    <Button color='green' size='tiny' icon='check' onClick={() => this.props.toggleTodo(todo.id)}/>
                  </Table.Cell>
                </Table.Row>
              ))}
              <Table.Row>
                  <Table.Cell>
                    <Button size='medium' label='Save' icon='save' onClick={() => this.props.saveTodo()}/>
                 </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        ) : (
          <div style={{ marginTop: "50px" }}>
            <Message attached='bottom' warning> 
            <Message.Header>TODO List is empty or no result found for filter</Message.Header>
            </Message>
          </div>
        )}
      </React.Fragment>
    );
  }
}

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case SHOW_ALL:
      return todos;
    case SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps = state => {
  return { todos: getVisibleTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
 };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      deleteTodo,
      toggleTodo,
      loadTodo,
      saveTodo,
      setVisibilityFilter
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MyToDoListTable);
