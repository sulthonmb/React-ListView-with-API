import React from "react";
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import { fade } from '@material-ui/core/styles/colorManipulator';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';


const stylesAppBar = theme => ({
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    root: {
      width: '100%',
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing.unit,
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing.unit * 9,
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
      width: '100%',
    },
    inputInput: {
      paddingTop: theme.spacing.unit,
      paddingRight: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
      paddingLeft: theme.spacing.unit * 10,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: 120,
        '&:focus': {
          width: 200,
        },
      },
    },
  });

const link =
  "https://cdn.rawgit.com/kevinhermawan/ca5e0083648ba5ffb2421808d972dd9c/raw/c29c7ee02849b58024fb6a058acae33bde38cbd3/react-blog-example.json";


class Home extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isAuthenticated: false,
            name: "FDBC Jakarta",
            list: null,
            keyword: ""
        };
    }

    componentDidMount(){
        this.fetchData();
    }


    fetchData = () => {
        return fetch(link).then(res => res.json()).then(res => {
            this.setState({
                list: res
            });
        });
    };

    handleLogin = () => {
        this.setState({
            isAuthenticated: true
        });
    }

    handleForm = event => {
        this.setState({
            keyword: event.target.value
        });
    }

    render(){

        const { classes } = this.props;
        return(
            <div>
                <AppBar position="static">
                    <Toolbar>
                    <Typography className={classes.title} variant="title" color="inherit" noWrap>
                        Simple Front-End React
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                        <SearchIcon />
                        </div>
                        <Input
                        onChange={this.handleForm} 
                        value={this.state.keyword}
                        placeholder="Search…"
                        disableUnderline
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        />
                    </div>
                    </Toolbar>
                </AppBar>

                <div style={{margin:20}}>
                    {this.state.list && this.state.list.filter(article => {
                        return(article.title.toLowerCase().includes(this.state.keyword) || article.content.toLowerCase().includes(this.state.keyword));
                    }).map(article => {
                        return(
                            <div style={{marginBottom:20}}>
                                <Card className={classes.card}>
                                    <CardContent>
                                        <Typography variant="headline" component="h2">
                                        {article.title}
                                        </Typography>
                                        <Typography className={classes.pos} color="textSecondary">
                                        {article.author}
                                        </Typography>
                                        <Typography component="p">
                                        {article.content}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
};

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(stylesAppBar)(Home);