import React from 'react';

import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import Image from '../../basic/display/Image';

type Props = {
    fileName: 'Contact.jpg' | 'Develop.jpg' | 'Hobby.jpg' | 'Intro.jpg' | 'Graphic.jpg' | 'Service.jpg';
    alt: string;
    title: string;
}

const useStyles = makeStyles({
    firstViewBox: {
        position: 'relative',
        maxWidth: '1280px',
        height: '25vh',
        margin: '0 auto',
        marginBottom: 'calc(2.5em + 5vw)'
    },
    firstViewImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '75%',
        height: '100%',
        filter: 'brightness(.6)'
    },
    firstViewTitle: {
        position: 'absolute',
        fontSize: 'calc(2em + 5vw)',
        bottom: 'calc(-4.5vw - 36px)',
        right: 10,
    }
})

const FirstView: React.FC<Props> = (props) => {
    const classes = useStyles();

    return (
        <section className={classes.firstViewBox}>
            <Image fileName={props.fileName} alt={props.alt} styles={classes.firstViewImage} />
            <Typography variant='h2' className={classes.firstViewTitle}>{props.title}</Typography>
        </section>
    );
};

export default FirstView;
