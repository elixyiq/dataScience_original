import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Button, notification, Icon } from '@cv/eds-react/lib/components';
import { systemStart, systemStop } from '../../store/service';

class DT extends Component {


  render() {
    return (
      <React.Fragment>
        <div style={{ overflow:'auto'}}>
            <p>
            A decision tree is a flowchart-like structure in which each internal node represents a "test" on an attribute (e.g. whether a coin flip comes up heads or tails), each branch represents the outcome of the test, and each leaf node represents a class label (decision taken after computing all attributes). The paths from root to leaf represent classification rules.
        </p><p>
In decision analysis, a decision tree and the closely related influence diagram are used as a visual and analytical decision support tool, where the expected values (or expected utility) of competing alternatives are calculated.
</p><p>
A decision tree consists of three types of nodes:[1]
</p><p>
Decision nodes – typically represented by squares
</p><p>
Chance nodes – typically represented by circles
</p><p>End nodes – typically represented by triangles
</p><p>Decision trees are commonly used in operations research and operations management. If, in practice, decisions have to be taken online with no recall under incomplete knowledge, a decision tree should be paralleled by a probability model as a best choice model or online selection model algorithm.[citation needed] Another use of decision trees is as a descriptive means for calculating conditional probabilities.

</p><p>
Decision trees, influence diagrams, utility functions, and other decision analysis tools and methods are taught to undergraduate students in schools of business, health economics, and public health, and are examples of operations research or management science methods.
            </p>
        </div>

      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<DT />, rootElement);
export default DT;