import React from 'react';
import MaterialTable from 'material-table';
import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

export default function PreAnalysisTable() {

  const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };

  const [state, setState] = React.useState({
    columns: [
      { title: 'Additions', field: 'addition',lookup: { 0: 'Select addition', 1: 'Buffer', 2: 'Mito', 3: 'Substrate', 4: 'PCR', 5: 'Drug', 6: 'Vehicle', 7: 'FCCP', 8: 'Oligo', 9: 'Rot', 10: 'Ant A', 11: 'AF', 12: 'BCNU', 13: 'CN', 14: 'Ala', 15: 'Other'}},
      { title: 'Substrate 1', field: 'substrate1', type: 'numeric' },
      { title: 'Substrate 2', field: 'substrate2', type: 'numeric' },
      { title: 'Substrate 3', field: 'substrate3', type: 'numeric' },
    ],
    data: [
      { addition: 0, substrate1: 360, substrate2: 360, substrate3: 360 },
      { addition: 0, substrate1: 180, substrate2: 180, substrate3: 180 },
      { addition: 0, substrate1: 180, substrate2: 180, substrate3: 180 },
      { addition: 0, substrate1: 180, substrate2: 180, substrate3: 180 },
      { addition: 0, substrate1: 180, substrate2: 180, substrate3: 180 },
      { addition: 0, substrate1: 180, substrate2: 180, substrate3: 180 },
      { addition: 0, substrate1: 300, substrate2: 300, substrate3: 300 },
      { addition: 0, substrate1: 180, substrate2: 180, substrate3: 180 },
      { addition: 0, substrate1: 180, substrate2: 180, substrate3: 180 },
    ],
  });

  return (
    <MaterialTable
      title="Data Pre-Analysis"
      icons={tableIcons}
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.push(newData);
              setState({ ...state, data });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data });
            }, 600);
          }),
      }}
    />
  );
}