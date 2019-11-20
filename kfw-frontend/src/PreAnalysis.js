import React, { Component } from 'react';
import './App.css';
import PreAnalysisIntake from './PreAnalysisIntake/PreAnalysisIntake';
// import PreAnalysisTable from './preanalysistable/PreAnalysisTable';


class PreAnalysis extends Component {
    render() {
      return (
        <div className="App">
          <div className="Card" style={{justifyContent:'center'}}>
          <PreAnalysisIntake/>
          </div>
          {/* <PreAnalysisTable /> */}
        </div>
      )
    }
}
  
export default PreAnalysis;