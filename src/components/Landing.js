import React, { Component } from 'react';
import '../App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';


class Landing extends Component {
    render() {
      return (
        <div className="Landing">
        <h2 style={{textAlign: 'center', margin: '0', color: "white"}}>Hello, Cynthia!</h2>
            <div style={{width: '300px', paddingTop:'2em', paddingBottom: '2em', marginLeft: 'auto', marginRight:'auto', position:'relative', display: 'block'}}>            
             <Paper style={{background: "#1CB5E0", padding: '1em', marginBottom: "1em"}}>
                <h3 style={{textAlign: 'center', color: "white"}}>Current Stats:</h3>
                <Table style={{marginLeft: '4%', marginRight: 'auto'}}>
                    <TableHead >
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
                </TableHead>    
            </Table>                  
        </Paper>
        {/* button links to New Entry form page */}
        <Button variant="contained" color="primary">
        New Entry
      </Button>
        </div>     
    </div>
      );
    }
  }
  
  export default Landing;