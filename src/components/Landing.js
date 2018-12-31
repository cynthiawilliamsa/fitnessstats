import React, { Component } from 'react';
import '../App.css';
import PropTypes from "prop-types";
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';






class Landing extends Component {
    getEntry=()=>{
        fetch("http://localhost:3002/newentry")
        .then((res)=> res.json())
        .then((data)=>{
            console.log(data);
        })
    }    
    render() {
      return (
        <div className="Landing">
        <button onClick={this.getEntry}>test</button>
        <h2 style={{textAlign: 'center', margin: '0', color: "white"}}>Hello, Cynthia!</h2>
            <div style={{width: '300px', paddingTop:'2em', paddingBottom: '2em', marginLeft: 'auto', marginRight:'auto', position:'relative', display: 'block'}}>            
             <Paper style={{background: "#1CB5E0", padding: '1em', marginBottom: "1em"}}>
                <h3 style={{textAlign: 'center', color: "white"}}>Current Stats:</h3>
                <Table style={{marginLeft: '4%', marginRight: 'auto'}}>
                        <TableBody>
                            <TableRow>
                                <TableCell>Height</TableCell>
                       <TableCell>5'3:</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Weight</TableCell>
                                <TableCell>140</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Hip-to-Waist Ratio</TableCell>
                                <TableCell>.9</TableCell>
                            </TableRow>                    
                            <TableRow>
                                <TableCell>Body Fat</TableCell>
                                <TableCell>26%</TableCell>
                            </TableRow>                
                            <TableRow>
                                <TableCell>Lean Weight</TableCell>
                                <TableCell>XX</TableCell>
                            </TableRow>
                    </TableBody> 
            </Table>                  
        </Paper>        
        </div>     
    </div>
      );
    }
  } 
  
  
  export default Landing;