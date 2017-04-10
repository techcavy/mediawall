import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as Actions from './actions';

import './style';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      img: 0,
    };

    setInterval(() => {
      this.setState({
        img: this.state.img+1,
      });
    }, 12000);
  }

  render() {
    return (
      <div className="app">
        <div style={{
          background: 'black',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}/>
        <div style={{
          backgroundImage: `url(${`/${this.state.img}`})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'contain',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}/>
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
