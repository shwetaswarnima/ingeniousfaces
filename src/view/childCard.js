import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import EventSeatIcon from '@material-ui/icons/EventSeat';
import BatteryCharging50Icon from '@material-ui/icons/BatteryCharging50';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
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
    marginBottom: 12,
  },
  margin: {
    margin: theme.spacing(1),
  },
  myfontSize: {
      fontSize:'small',
      paddingTop:'10px',
  },
  myButton: {
      backgroundColor:'#D4F5EE',
      display:'flex',
      borderRadius:'25px',
      justifyContent: 'center',
      height:'80px',
      paddingTop:'30px',
      "&:hover" :{
        backgroundColor:'#10ADB9',
      },
  },
}));

export default function ChildCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
       
      <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            spacing={2}
            >
                <Grid item xs={3}>
                    <div className={classes.myButton}>{props.number}</div>
                        
                   
                    
                </Grid>
                <Grid item xs={8}>
                <div>
                    <Typography variant="h8" component="h4">
                        {props.name} Overview 
                    </Typography>
                   
                </div>
                <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                spacing={2}
                className={classes.myfontSize}
                >
                    <Grid item>
                         <div><EventSeatIcon />Research</div>
                    </Grid>
                    <Grid item>
                    <div><BatteryCharging50Icon />Self Paced</div>
                    </Grid>

                </Grid>
                {/* <div className={classes.myfontSize}> 
                    
                    <div><EventSeatIcon />Research</div>
                    <div><BatteryCharging50Icon />Self Paced</div>
                </div> */}
                    
                </Grid>
                <Grid item xs={1}>
                <Typography variant="h6" component="h4">
                        >
                    </Typography>
                    
                </Grid>
                </Grid>
        
      </CardContent>
    </Card>
  );
}
