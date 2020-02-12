import React from 'react';
import { connect } from 'react-redux'
import { addTodo } from '../actions/actionCreator'
import {bindActionCreators} from 'redux'
import MyToDoListTable from './MyToDoListTable';
import { Container, Button, Input, Segment, Grid} from 'semantic-ui-react'

class MyToDoList extends React.Component { 
    constructor(props){
        super(props)
        this.state = {
            todotext: '',
        }
    }

    onChangeTodoText = (e) => {
        this.setState({
            todotext: e.target.value
        })
    }

    render(){
        return (
              <div id="main">
            <Container>
            <Segment>
                <Grid>
                <Grid.Row>
                <Grid.Column>
                      <Input onChange={this.onChangeTodoText} 
                      value={this.state.todotext} 
                      id="inputText" 
                      placeholder="add todo here"
                      fluid
                      />
                      <Button onClick={ () => this.setState({ todotext: '' }) }>Clear</Button>
                      <Button primary
                      onClick={() =>{ this.props.addTodo(this.state.todotext)
                                        this.setState({ todotext: '' }) }}>Add Todo</Button>
                </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <MyToDoListTable/>
                    </Grid.Column>
                </Grid.Row>
                </Grid>
                </Segment>
            </Container>
  </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addTodo
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(MyToDoList)
