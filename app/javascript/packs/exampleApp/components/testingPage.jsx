import React from 'react';

//Components
import Test from './testingPage/test';

class TestingPage extends React.Component {
  render() {
    return(
      <div>
        <Test {...this.props}/>
      </div>
    )
  }
}
export default TestingPage