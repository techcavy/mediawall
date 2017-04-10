import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as Actions from './actions';

import './style';

class App extends Component {
  constructor(props) {
    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);
  }

  onChangeTitle(event) {
    this.props.onChangeTitle(event.target.value);
  }

  render() {
    return (
      <div className="app">
      </div>
    );
  }
}
/*
const mapStateToProps = (state) => ({
  title: state.title
});

const mapDispatchToProps = (dispatch) => ({
  onChangeTitle: (newTitle) => {
    dispatch(Actions.changeTitle(newTitle));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
*/

export default App;
