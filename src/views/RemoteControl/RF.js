import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Button, notification, Icon } from '@cv/eds-react/lib/components';
import { systemStart, systemStop } from '../../store/service';

class RF extends Component {
  handleFileUpload = event => {
    alert(event.target.files[0].name);
  };

  render() {
    return (
      <React.Fragment>
        <div>
        <h4>Random forests or random decision forests is an ensemble learning method for classification, regression and other tasks that operates by constructing a multitude of decision trees at training time. </h4>
<h4>For classification tasks, the output of the random forest is the class selected by most trees. For regression tasks, the mean or average prediction of the individual trees is returned.</h4>
<h4>Random decision forests correct for decision trees' habit of overfitting to their training set.</h4>
<h4>Random forests generally outperform decision trees, but their accuracy is lower than gradient boosted trees.</h4>
<h4>-Work with domain expert to understand the data collection process and meaning of each columns, so we can understand -the data quality better. </h4>
<h4>However, data characteristics can affect their performance.</h4>


        </div>

      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<RF />, rootElement);
export default RF;