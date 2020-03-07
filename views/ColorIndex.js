import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent} from '@material-ui/core';
import './App.css';


const useStyles = makeStyles(theme => ({
  root: {
    height: 120,
    width: 120,
    backgroundColor:'#2e405e',
    borderRadius: 0,
  },
}));

var color = ['#ff0000ff', '#00ff00ff', '#0000ffff'];


const ColorIndex = props => {

	const classes  = useStyles();

	return(
        <div>

            {color.map(function (item, index){

        return(
        	<div className="App-row" key={index}>

        <h3>{index}</h3>
        <Card key={index} className={classes.root} style={{backgroundColor:item}} >
        <CardContent>

        </CardContent>
        
        </Card>

        </div>
        );
        })}

        </div>

  );
}

export default ColorIndex;