import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Button, notification, Icon } from '@cv/eds-react/lib/components';
import { systemStart, systemStop } from '../../store/service';

class FuturePlan extends Component {
  handleFileUpload = event => {
    alert(event.target.files[0].name);
  };

  render() {
    return (
      <React.Fragment>
        <div>
        <h4>-Implement the model in the hardware trouble shooting process.</h4>
<h4>-Continue to monitor the performance of model. </h4>
<h4>-Re-train the model after each software and hardware upgrade.</h4>
<h4>-Improve model performance:</h4>
<h4>-Work with domain expert to understand the data collection process and meaning of each columns, so we can understand -the data quality better. </h4>
<h4>-Try different ways of filling in empty field.</h4>
<h4>-Try other options for feature selection, like PCA, backward search and SMOTE</h4>
<h4>-Try different models for forward search feature selection (like XGBoost)</h4>
<h4>-Try different options for hyperparameter tuning</h4>
<h4>-Expand the model to support more hardware types.</h4>

        </div>

      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<FuturePlan />, rootElement);
export default FuturePlan;