import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as Actions from './actions';

import './style';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      id: 0,
      thisImg: 0,
      nextImg: Math.round(Math.random()*100000),
      prevImg: 0,
    };

    setInterval(() => {
      let nextId = this.state.id+1;
      this.setState({
        id: nextId,
        thisImg: this.state.nextImg,
        prevImg: this.state.thisImg,
        nextImg: Math.round(Math.random()*100000),
      });
    }, 15000);
  }

  render() {
    const id = this.state.id;

    const style = {
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'contain',
      position: 'absolute',
      transition: 'opacity 2s ease-in-out, transform 2s ease-in-out',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    }

    return (
        <div className="app" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: 'hidden',
          cursor: 'none',
        }}>
        <div style={{
          background: '#222',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}/>
        <div style={Object.assign({}, style, {
          backgroundImage: `url(${`/${(id%3 === 0 ? this.state.thisImg : (id%3 === 1 ? (this.state.prevImg) : (this.state.nextImg)))}`})`,
          opacity: id%3 === 0 ? 1 : 0,
          transform: id%3 === 0 ? 'scale(0.9)' : 'scale(1.2)',
        })}/>
        <div style={Object.assign({}, style, {
          backgroundImage: `url(${`/${(id%3 === 0 ? (this.state.nextImg) : (id%3 === 1 ? (this.state.thisImg) : (this.state.prevImg)))}`})`,
          opacity: id%3 === 1 ? 1 : 0,
          transform: id%3 === 1 ? 'scale(0.9)' : 'scale(1.2)',
        })}/>
        <div style={Object.assign({}, style, {
          backgroundImage: `url(${`/${(id%3 === 0 ? (this.state.prevImg) : (id%3 === 1 ? (this.state.nextImg) : (this.state.thisImg)))}`})`,
          opacity: id%3 === 2 ? 1 : 0,
          transform: id%3 === 2 ? 'scale(0.9)' : 'scale(1.2)',
        })}/>
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
