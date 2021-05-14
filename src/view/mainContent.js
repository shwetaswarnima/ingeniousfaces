import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import CardView from './cardview'
import Grid from '@material-ui/core/Grid';
import TabPanel from './TabPanel'
import HomeIcon from '@material-ui/icons/Home';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailIcon from '@material-ui/icons/Mail';
import PersonIcon from '@material-ui/icons/Person';
import Badge from '@material-ui/core/Badge';

const drawerWidth = 340;

const useStyles = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        backgroundClip: 'content-box',
        borderRadius:'25px',
        backgroundColor: '#fafafa',
        paddingBlock:'30px',
      },
      drawer: {
        width: drawerWidth,
        flexShrink: 0,
      },
      drawerPaper: {
        width: drawerWidth,
      },
      drawerContainer: {
        overflow: 'auto',
      },
      card: {
          width: drawerWidth,
      },
      cardPadding: {
        padding:'30px',
      },
      topMenu: {
          padding:'50px',
      }
      

}));
export default function MainContent(props){
    const classes = useStyles();
    return(
        
        <main className={classes.content}>
            <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            >
                <Grid item xs={5}>
                    <Toolbar />
                    <div className={classes.cardPadding}>
                        <CardView name={props.name}/>
                    </div>
                    
                </Grid>
                <Grid item xs={7}>
                    <div className={classes.topMenu}>
                        <Grid
                        container
                        direction="row"
                        justify="flex-end"
                        alignItems="flex-start"
                        spacing={2}
                        >

                            <Grid item>
                                <HomeIcon />
                            </Grid>
                            <Grid item>
                                
                                <Badge badgeContent={2} color="secondary">
                                    <NotificationsIcon />
                                </Badge>
                            </Grid>
                            <Grid item>
                                <Badge badgeContent={4} color="primary">
                                    <MailIcon />
                                </Badge>
                            </Grid>
                            <Grid item>
                                <PersonIcon />
                            </Grid>
                        </Grid>
                    </div>
               
                    <div className={classes.content}>
                         <Toolbar />
                         <TabPanel></TabPanel>
                    </div>
                </Grid>
            </Grid>
      </main>
    );
}