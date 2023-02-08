import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Button, notification, Icon } from '@cv/eds-react/lib/components';
import { systemStart, systemStop } from '../../store/service';

class XGBoost extends Component {

  render() {
    return (
      <React.Fragment>
 <div>
<p>XGBoost[2] (eXtreme Gradient Boosting) is an open-source software library which provides a regularizing gradient boosting framework for C++, Java, Python,[3] R,[4] Julia,[5] Perl,[6] and Scala. </p>
<p>It works on Linux, Windows,[7] and macOS.[8] From the project description, it aims to provide a "Scalable, Portable and Distributed Gradient Boosting (GBM, GBRT, GBDT) Library". It runs on a single machine, as well as the distributed processing frameworks Apache Hadoop, Apache Spark, Apache Flink, and Dask.</p>
<p>
It has gained much popularity and attention recently as the algorithm of choice for many winning teams of machine learning competitions.</p>
</div>
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<XGBoost />, rootElement);
export default XGBoost;