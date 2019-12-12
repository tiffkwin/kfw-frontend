import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';

class Download extends Component {
    
    // myFunction = () => {
    //     var xhr = new XMLHttpRequest()
    //     xhr.addEventListener('load', () => {
    //         // update the state of the component with the result here
    //         console.log(xhr.responseText)
    //     })

    //     // open the request with the verb and the url
    //     xhr.open('GET', 'http://localhost:5000/uploads')

    //     // send the request
    //     xhr.send(null)
    // }

    render() {
      return (
        <div className="App">
          <div className="Card" style={{justifyContent:'center'}}>
          <a href="http://localhost:5000/output" download>
          <Button variant="contained" color="primary">
                Download
            </Button>
            </a>
          
          </div>
          {/* <PreAnalysisTable /> */}
        </div>
      )
    }
}
  
export default Download;