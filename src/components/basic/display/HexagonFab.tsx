import React from 'react';
import { useAtom } from 'jotai';

import { menuOpenStatus } from '@/others/atoms';

import { makeStyles } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import MenuSharpIcon from '@material-ui/icons/MenuSharp'

const useStyles = makeStyles({
    fabStyles: {
        position: 'fixed',
        right: 30,
        bottom: 30,
        boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    }
})

const HexagonFab = () => {
    const [, setIsOpen] = useAtom(menuOpenStatus)
    const classes = useStyles();
    
    return (
        <Fab color='primary' className={classes.fabStyles} onClick={() => setIsOpen(true)}>
            <MenuSharpIcon />
        </Fab>
    )
}

export default HexagonFab;
