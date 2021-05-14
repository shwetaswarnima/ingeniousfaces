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
    boxShadow: '0 0 8px #888',
    borderRadius: '14px',
  },
  eachCardModule: {
    backgroundColor: 'transparent',
  },
  cardContent: {
    padding: '0',
    padding: '0 !important',
  },
  titleIcon: {
    display: 'block',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 12,
    fontWeight: 500,
    textTransform: 'capitalize',
    color: '#525252',
    width: 'calc(100% - 20px)',
    display: 'inline-block',
  },
  pos: {
    marginBottom: 12,
  },
  iconTitle: {
    fontSize: '12px',
    fontWeight: '500',
    color: '#747474',
  },
  margin: {
    margin: theme.spacing(1),
  },
  icon: {
    verticalAlign: 'middle',
    fontSize: '16px',
    marginRight: '2px',
  },
  spanArrow: {
    color: '#525252',
    fontSize: '20px',
    fontWeight: '500',
  },
  iconGrid: {
    boxSizing: 'border-box',
    paddingRight: '10px',
  },
  myfontSize: {
      fontSize:'small',
      paddingTop:'10px',
  },
  myButton: {
      backgroundColor:'#0daeb6',
      display:'flex',
      borderRadius:'14px',
      justifyContent: 'center',
      height:'80px',
      lineHeight:'86px',
      color: '#fff',
      "&:hover" :{
        backgroundColor:'#10ADB9',
      },
  },
  integerValue: {
    padding: '0',
    boxSizing: 'border-box',
  },
}));

export default function ChildCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className={classes.eachCardModule}>
    <Card className={classes.root}>
      <CardContent className={classes.cardContent}>
       
      <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            spacing={2}
            >
                <Grid item xs={3} className={classes.integerValue}>
                    <div className={classes.myButton}>{props.number}</div>                    
                </Grid>
                <Grid item xs={9}>
                <div className={classes.titleIcon}>
                    <Typography variant="h8" component="h4" className={classes.title}>
                        {props.name} 
                    </Typography>
                   <Typography variant="h6" component="span" className={classes.spanArrow}>
                        >
                    </Typography>
                </div>
                <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                className={classes.myfontSize}
                >
                    <Grid item className={classes.iconGrid}>
                         <div className={classes.iconTitle}><EventSeatIcon className={classes.icon} />Research</div>
                    </Grid>
                    <Grid item className={classes.iconGrid}>
                    <div className={classes.iconTitle}><BatteryCharging50Icon className={classes.icon} />Self Paced</div>
                    </Grid>

                </Grid>
              
                    
                </Grid>
                </Grid>
        
      </CardContent>

    
    </Card>
    </div>
  );
}
