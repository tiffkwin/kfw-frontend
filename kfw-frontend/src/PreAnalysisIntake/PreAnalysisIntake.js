import React, { Component } from 'react';
import './PreAnalysisIntake.css';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import ChipInput from 'material-ui-chip-input'
// import { display } from '@material-ui/system';

var divStyle = {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    width: '100%'
  };

class PreAnalysisIntake extends Component {

    constructor(props){
        super(props);
        this.state = { slope: '', y_int: '', id: '', substrates_list: [], additions_list: []};
    }

    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value });
     };

    myFunction = () => {
        var xhr = new XMLHttpRequest()
        xhr.addEventListener('load', () => {
            // update the state of the component with the result here
            console.log(xhr.responseText)
        })

        // open the request with the verb and the url
        xhr.open('POST', 'http://localhost:5000/analyzeMP')

        // send the request
        xhr.send(JSON.stringify(
            {   
                slope: Number(this.state.slope), 
                y_int: Number(this.state.y_int), 
                substrates_list: this.state.substrates_list,//["Pyr/M","G/M","Pc/M","S/R","AKG","P/G/M/S/O", "Oct/M","Ac/M"],
                experiment_id: this.state.id,
                sub_repetitions: [],
                additions_list: this.state.additions_list,//["Buffer", "Mito", "Substrate", "PCR", "Drug", "Vehicle", "FCCP", "Oligo"],
                group_descriptions: ["group 1"]
            }))

    }

    handleAddChipS = (chip) => {

        // if (this.state.substrates_list.indexOf(chip) === -1) {

        let substrates = this.state.substrates_list
        substrates.push(chip)
        this.setState({substrates_list: substrates})

        // }
        console.log(this.state.substrates_list)
    }

    handleDeleteChipS = (chip, index) => {
        console.log(chip,index)

        if(this.state.substrates_list.indexOf(chip) !== -1){

            let substrates_list = this.state.substrates_list
            substrates_list.splice(index,1)
            this.setState(state => ({ substrates_list: state.substrates_list }))

        }
        console.log(this.state.substrates_list)
    }

    handleAddChipA = (chip) => {

        console.log(this.state.additions_list.indexOf(chip))
        // if (this.state.additions_list.indexOf(chip) === -1) {

        let additions = this.state.additions_list
        additions.push(chip)
        this.setState({additions_list: additions})

        // }
        console.log(this.state.additions_list)
    }

    handleDeleteChipA = (chip, index) => {
        console.log(chip,index)

        if(this.state.additions_list.indexOf(chip) !== -1){

            let additions_list = this.state.additions_list
            additions_list.splice(index,1)
            this.setState(state => ({ additions_list: state.additions_list}))

        }
        console.log(this.state.additions_list)
    }

    render() {
        return (
        <div style={divStyle}>
            <Input placeholder="Slope" name="slope" value={this.state.slope} onChange={this.handleChange}>
            </Input>
            <Input placeholder="Y-Intercept" name="y_int" value={this.state.y_int} onChange={this.handleChange}>
            </Input>
            <Input placeholder="Experiment ID" name="id" value={this.state.id} onChange={this.handleChange}>
            </Input>
            {/* <p>'Pyr/M','G/M','Pc/M','S/R','AKG','P/G/M/S/O','Oct/M','Ac/M','KIC/M','KIC', 'KIV', 'KMV','KIV/M','KIV/Oct','KMV/M','KMV/Oct','Pyr/C','Oct/C','Pc/C','Ac/C','Glut'</p> */}
            <ChipInput
                placeholder="Substrates"
                value={this.state.substrates_list}
                onAdd={(chip) => this.handleAddChipS(chip)}
                onDelete={(chip, index) => this.handleDeleteChipS(chip, index)}
                allowDuplicates={true}
                dataSource={['Pyr/M','G/M','Pc/M','S/R','AKG','P/G/M/S/O','Oct/M','Ac/M','KIC/M','KIC', 'KIV', 'KMV','KIV/M','KIV/Oct','KMV/M','KMV/Oct','Pyr/C','Oct/C','Pc/C','Ac/C','Glut', 'None']}
            />
            <ChipInput
                placeholder="Additions"
                value={this.state.additions_list}
                onAdd={(chip) => this.handleAddChipA(chip)}
                onDelete={(chip, index) => this.handleDeleteChipA(chip, index)}
                allowDuplicates={true}
                dataSource={['Buffer', 'Mito', 'Substrate', 'PCR', 'Drug', 'Vehicle', 'FCCP', 'Oligo', 'Rot', 'Ant A', 'AF', 'BCNU', 'CN', 'Ala', 'Other']}
            />
            <br/>
            <Button variant="contained" color="primary" onClick={this.myFunction}>
                Analyze
            </Button>
        </div>
        );
    }

}

export default PreAnalysisIntake;