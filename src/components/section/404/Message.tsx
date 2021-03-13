import React from 'react';

import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    messageBox: {
        margin: '1em auto',
        width: '90%',
    },
    brPoint: {
        display: 'inline-block'
    },
})

const Message = () => {
    const classes = useStyles();

    return (
        <section className={classes.messageBox}>
            <Typography>
                <span className={classes.brPoint}>お探しのページは、</span><span className={classes.brPoint}>宇宙の彼方へ吸い込まれて</span><span className={classes.brPoint}>しまったようです…。</span>
            </Typography>
            <Typography>
                <span className={classes.brPoint}>お手数ですが、</span>URLが<span className={classes.brPoint}>正しいかどうかご確認の上、</span><span className={classes.brPoint}>ご訪問ください。</span>
            </Typography>
        </section>
    );
};

export default Message;
