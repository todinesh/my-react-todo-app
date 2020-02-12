import React from 'react';
import { connect } from 'react-redux';
import MyToDoList from './MyToDoList';
import { Container, Segment } from 'semantic-ui-react'

class App extends React.Component {
  render() {
    return (
      <Container>
      <Segment>       
        <h1>My React TODO App</h1>
        <MyToDoList/>
      </Segment>
     </Container>
    );
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(App);