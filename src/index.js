import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
    constructor (props) {
      super(props);
    }

    render () {
      return <div className="hi">Hi</div>;
    }
}

App.defaultProps = {
  className: '',
};

App.propTypes = {
  className: PropTypes.string,
};

React.render(<App />, document.getElementById('app'));

export default App;
