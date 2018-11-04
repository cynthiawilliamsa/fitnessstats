import React, { Component } from 'react';
import '../App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';


class NewEntryForm extends Component {
    render() {
      return (
        <div className="Landing">
        <h2 style={{textAlign: 'center', margin: '0', color: "white"}}>Hello, Cynthia!</h2>
            
        {/* button links to New Entry form page */}
        <Button variant="contained" color="primary">
        New Entry
      </Button>
        </div>     
    </div>
      );
    }
  }
  
  export default NewEntryForm;