import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent } from '@material-ui/core';
import './App.css';


const useStyles = makeStyles(theme => ({
  root: {
    height: 120,
    width: 120,
    backgroundColor:'#2e405e',
    borderRadius: 0,
  },
}));

var color = ['#ff0000ff', '#00ff00ff', '#0000ffff','#ff00f0ff', '#00fff0ff', '#0f00f000','#ff000fff', '#0fff00ff', '#ff00ffff' ];

var length = 3

const ImageColor = props => {

	const classes  = useStyles();

	return(
    <div>

     { Array.from({length:color.length/length}).map(function (item, index){
      return(
        <div className="App-row" key={index} >

            {color.slice(0 + index*length,3 + index*length).map(function (item, index){

        return(

        <Card key={index} className={classes.root} style={{backgroundColor:item}} >
        <CardContent>

        </CardContent>
        
        </Card>
        );
        })}

        </div>

      );
   })}

    </div>

  );
}

export default ImageColor;