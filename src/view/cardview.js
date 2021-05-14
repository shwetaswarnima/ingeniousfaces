import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ChildCard from './childCard'
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles({
  root: {
    paddingLeft:'10px'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 22,
  },
});

export default function Cardview(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
       
        <Typography variant="h5" component="h2">
          {props.name} Overview
        </Typography>
        <Divider></Divider>
        <Toolbar />
        
        {['Market Research', 'Solution Assesment', 'Oppertunity Evaluation', 'Future Readiness'].map((value, index) => (
          <div className={classes.pos}>
            <ChildCard name={value} number={index}></ChildCard>
          </div>
         
        ))};
        
      </CardContent>
     
    </Card>
  );
}
