import React from 'react';
import { Link } from 'gatsby';

import { makeStyles } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Image from './Image';

type PropsType = {
    fileName: 'Contact.jpg' | 'Develop.jpg' | 'Hobby.jpg' | 'Graphic.jpg' | 'Service.jpg'| 'Other.jpg';
    name: 'Contact' | 'Develop' | 'Hobby' | 'Graphic' | 'Service'| 'Other';
    linkTo: '/contact' | '/developments' | '/hobbies' | '/graphics' | '/services' | '/others';
}

const useStyles = makeStyles({
    fitering: {
        filter: 'drop-shadow(0px 3px 1px rgb(0 0 0 / 20%)) drop-shadow(0px 2px 2px rgb(0 0 0 / 14%)) drop-shadow(0px 1px 5px rgb(0 0 0 / 12%))',
    },
    imageClipPath: {
        width: '174px',
        height: '200px',
        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25% )',
        '&::after': {
            position: 'absolute',
            content: (props: PropsType) => `"${props.name}"`,
            top: 0,
            left: 0,
            background: 'rgba(255, 255, 255, .4)',
            width: '100%',
            height: '100%',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            transition: 'all .5s ease',
        },
    },
    imageAdjust: {
        width: '174px',
        height: '200px',
        objectFit: 'cover',
    },
});

const useSPStyles = makeStyles({
    imageClipPath: {
        '&::after': {
            opacity: 1,
            background: 'rgba(0, 0, 0, .4)',
        }
    }
});

const usePCStyles = makeStyles({
    imageClipPath: {
        '&::after': {
            opacity: 0,
            background: 'rgba(0, 0, 0, .7)',
        },
        '&:hover::after': {
            opacity: 1,
        },
    }
});

const HexagonLinkBlock = (props: PropsType) => {
    const classes = useStyles(props);
    const inSm = useMediaQuery('(min-width:600px)');
    const dividedClasses = inSm ? usePCStyles() : useSPStyles();

    return (
        <div className={classes.fitering}>
            <Link to={props.linkTo}>
                <div className={`${classes.imageClipPath} ${dividedClasses.imageClipPath}`}>
                    <Image
                        fileName={props.fileName}
                        alt={props.name}
                        styles={classes.imageAdjust}
                    />
                </div>
            </Link>
        </div>
    )
};

export default HexagonLinkBlock;
