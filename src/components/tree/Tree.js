import React from 'react';
import TreeElement from './TreeElement';

class Tree extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };

  }

  render() {
    return (
      <div className="tree navigation">
        <ul>
          {
            this.props.tree.map(
              (element, index) => <TreeElement key={index} element={element}/>
            )
          }
        </ul>
      </div>
    );
  }

}

export default Tree;
