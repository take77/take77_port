import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';

type CustomAlertProps = {
    status: 'error' | 'success';
    title: Array<String>;
    isOpen: boolean;
    setIsOpen: (update?: React.SetStateAction<boolean>) => void | Promise<void>;
}

const useStyles = makeStyles({
    alertStyles: {
        position: 'fixed',
        top: '2vh',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '85%',
        zIndex: 1100,
        display: 'flex',
        alignItems: 'center',
    },
    titleAdjust: {
        marginBottom: 0,
        color: '#3e3e30'
    },
    brAdjust: {
        display: 'inline-block'
    },
});

const CustomAlert: React.FC<CustomAlertProps> = (props) => {
    const {status, title, isOpen, setIsOpen} = props

    const classes = useStyles();
    console.log(title)

    return (
        <div>
            <Collapse in={isOpen}>
                <Alert
                    color={status}
                    severity={status}
                    className={classes.alertStyles}
                    elevation={1}
                    action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => setIsOpen(false)}
                    >
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
                }>
                <AlertTitle className={classes.titleAdjust}>
                    {title.map(titleItem => {
                        return (
                            <span className={classes.brAdjust}>
                                {titleItem}
                            </span>
                        )
                    })}
                </AlertTitle>
                </Alert>
            </Collapse>
        </div>
    );
};

export default CustomAlert;
