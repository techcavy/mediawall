import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as Actions from './actions';

import './style';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      img: 0,
    };

    setInterval(() => {
      let nextId = this.state.img + 1;
      this.setState({
        img: nextId,
      });
    }, 15000);
  }

  render() {
    const id = this.state.img;

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
    };

    return (
      <div
        className="app"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: 'hidden',
          cursor: 'none',
        }}
      >
        <div
          style={{
            background: '#222',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        />
        <div
          style={Object.assign({}, style, {
            backgroundImage: `url(${`/${id % 3 === 0 ? id : id % 3 === 1 ? id - 1 : id + 1}`})`,
            opacity: id % 3 === 0 ? 1 : 0,
            transform: id % 3 === 0 ? 'scale(0.9)' : 'scale(1.2)',
          })}
        />
        <div
          style={Object.assign({}, style, {
            backgroundImage: `url(${`/${id % 3 === 0 ? id + 1 : id % 3 === 1 ? id : id - 1}`})`,
            opacity: id % 3 === 1 ? 1 : 0,
            transform: id % 3 === 1 ? 'scale(0.9)' : 'scale(1.2)',
          })}
        />
        <div
          style={Object.assign({}, style, {
            backgroundImage: `url(${`/${id % 3 === 0 ? id - 1 : id % 3 === 1 ? id + 1 : id}`})`,
            opacity: id % 3 === 2 ? 1 : 0,
            transform: id % 3 === 2 ? 'scale(0.9)' : 'scale(1.2)',
          })}
        />
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
