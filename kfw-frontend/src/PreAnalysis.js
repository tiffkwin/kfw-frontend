import React, { Component } from 'react';
import './App.css';
import PreAnalysisTable from './preanalysistable/PreAnalysisTable';

class PreAnalysis extends Component {
    render() {
      return (
        <div className="App">
          <PreAnalysisTable />
        </div>
      )
    }
}
  
export default PreAnalysis;