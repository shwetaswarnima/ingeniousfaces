import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MainContent from './mainContent'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    fontFamily:'Roboto',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
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
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  imageWidth: {
    width:'180px',
    paddingTop:'30px',
    paddingBottom:'50px',
  },
  white: {
    backgroundColor:'white',
  },
  linkDecorator:{
    textDdecoration: 'none',
    '&:visited':{
      textDdecoration: 'none',
    },
    '&:hover':{
      textDdecoration: 'none',
    },
    '&:active':{
      textDdecoration: 'none',
    }
  }
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Router>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        
        <div className={classes.drawerContainer}>
          <List>
            <ListItem>
              <img src="logo.png" className={classes.imageWidth}></img>
            </ListItem>
            
            {['Program', 'Coaching', 'Collaboration', 'Progress', 'Knowledge', 'Calander'].map((text, index) => (
              <ListItem button key={text} >
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <Link to={text} style={{ textDecoration: 'none' }}><ListItemText primary={text} /></Link>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['My Files', 'Uploads', 'downloads'].map((text, index) => (
              <ListItem button key={text}>
                {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
      <div className={classes.white}>
        
        <Switch>
          <Route path= "/ingeniousfaces/Program">
          <MainContent name="Program"/>
          </Route>
          <Route path="/ingeniousfaces/Coaching">
          <MainContent name="Coaching"/>
          </Route>
          <Route path={process.env.PUBLIC_URL +"/Collaboration"}>
          <MainContent name="Collaboration"/>
          </Route>
          <Route path={process.env.PUBLIC_URL +"/Progress"}>
          <MainContent name="Progress"/>
          </Route>
          <Route path={process.env.PUBLIC_URL +"/Knowledge"}>
          <MainContent name="Knowledge"/>
          </Route>
          <Route path={process.env.PUBLIC_URL +"/Calander"}>
          <MainContent name="Calander"/>
          </Route>
          <Route path={process.env.PUBLIC_URL +"/"}>
          <MainContent name="Program"/>
          </Route>
        </Switch>
      </div>
      </Router>
      
    </div>
  );
}
