import React from 'react';
import { Link } from 'gatsby';
import { useAtom } from 'jotai';

import { makeStyles } from '@material-ui/core';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { menuOpenStatus } from '@/others/atoms';
import toggleDrawer from '@/others/toggleDrawer';

type MenuDrawerProps = {
    pathname: string;
}

const useCommonStyles = makeStyles({
    linkStyle: {
        color: '#000000',
        textDecoration: 'none',
    },
    iconButtonPosition: {
        textAlign: 'center',
    },
    listStyle: {
        padding: '1em'
    },
    listTextStyles: {
        color: '#2E2E30'
    },
});

const useSPStyles = makeStyles({
    listStyle: {
        width: 240
    },
});

const usePCStyles = makeStyles({
    listStyle: {
        width: 360
    },
});

const MenuDrawer: React.FC<MenuDrawerProps> = ({ pathname }) => {
    const [isOpen, setIsOpen] = useAtom(menuOpenStatus);
    const inSm = useMediaQuery('(max-width:600px)');
    const classes = useCommonStyles();
    const customClasses = inSm ? useSPStyles() : usePCStyles();

    return (
        <SwipeableDrawer
            anchor='right'
            open={isOpen}
            onOpen={toggleDrawer(true, setIsOpen)}
            onClose={toggleDrawer(false, setIsOpen)}
        >
            <List className={`${classes.listStyle} ${customClasses.listStyle}`}>
                {pathname !== '/' &&
                    <Link to='/' className={classes.linkStyle}>
                        <ListItem button>
                            <ListItemText classes={{primary: classes.listTextStyles}}>TOP</ListItemText>
                        </ListItem>
                    </Link>
                }
                {pathname !== '/intro' &&
                    <Link to='/intro' className={classes.linkStyle}>
                        <ListItem button>
                            <ListItemText classes={{primary: classes.listTextStyles}}>Intro</ListItemText>
                        </ListItem>
                    </Link>
                }
                {pathname !== '/services' &&
                    <Link to='/services' className={classes.linkStyle}>
                        <ListItem button>
                            <ListItemText classes={{primary: classes.listTextStyles}}>Service</ListItemText>
                        </ListItem>
                    </Link>
                }
                {pathname !== '/developments' &&
                    <Link to='/developments' className={classes.linkStyle}>
                        <ListItem button>
                            <ListItemText classes={{primary: classes.listTextStyles}}>Develop</ListItemText>
                        </ListItem>
                    </Link>
                }
                {pathname !== '/graphics' &&
                    <Link to='/graphics' className={classes.linkStyle}>
                        <ListItem button>
                            <ListItemText classes={{primary: classes.listTextStyles}}>Graphic</ListItemText>
                        </ListItem>
                    </Link>
                }
                {pathname !== '/hobbies' &&
                    <Link to='/hobbies' className={classes.linkStyle}>
                        <ListItem button>
                            <ListItemText classes={{primary: classes.listTextStyles}}>Hobby</ListItemText>
                        </ListItem>
                    </Link>
                }
                {pathname !== '/contact' &&
                    <Link to='/contact' className={classes.linkStyle}>
                        <ListItem button>
                            <ListItemText classes={{primary: classes.listTextStyles}}>Contact</ListItemText>
                        </ListItem>
                    </Link>
                }
                <ListItem>
                    <IconButton>
                        <TwitterIcon fontSize='inherit' />
                    </IconButton>
                    <IconButton>
                        <FacebookIcon fontSize='inherit' />
                    </IconButton>
                    <IconButton>
                        <InsertDriveFileOutlinedIcon fontSize='inherit' />
                    </IconButton>
                    <IconButton>
                        <GitHubIcon fontSize='inherit' />
                    </IconButton>
                </ListItem>
            </List>
        </SwipeableDrawer>
    )
}

export default MenuDrawer;
