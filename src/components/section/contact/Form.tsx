import React, { useState } from 'react';
import Axios from 'axios';
import { useAtom } from 'jotai';

import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import FormField from '@/components/basic/input/formField';

import { contactSuccessState, contactErrorState, backDropStatus } from '@/others/atoms';

const useStyles = makeStyles({
    formBox: {
        margin: '4.5vw auto 1em',
        width: '85%',
        maxWidth: '960px'
    },
    formField: {
        margin: '.75em auto',
    },
    formButton: {
        margin: '1.5em auto',
        padding: '.75em',
        width: '100%',
    },
});

const Form = () => {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [content, setContent] = useState('');
    const [emailIsCorrect, setEmailIsCorrect] = useState(true);
    const [contentIsCorrect, setContentIsCorrect] = useState(true);
    const [, setSuccessIsOpen] = useAtom(contactSuccessState);
    const [, setErrorIsOpen] = useAtom(contactErrorState);
    const [, setBackDropStatus] = useAtom(backDropStatus);

    const handleSubmit = () => {
        setBackDropStatus(true);
        const submitParams = new FormData();

        submitParams.append(process.env.GOOGLE_FORM_EMAIL_ENTRY, email);
        submitParams.append(process.env.GOOGLE_FORM_SUBJECT_ENTRY, subject);
        submitParams.append(process.env.GOOGLE_FORM_CONTENT_ENTRY, content);

        Axios.post(process.env.CORS_PROXY + process.env.GOOGLE_FORM_ACTION, submitParams).then(response => {
            console.log(response);
            setErrorIsOpen(false);
            setSuccessIsOpen(true);
            setBackDropStatus(false);
        }).catch(error => {
            console.log(error);
            setSuccessIsOpen(false);
            setErrorIsOpen(true);
            setBackDropStatus(false);
        })
    }

    const classes = useStyles();

    return (
        <section className={classes.formBox}>
            <form id='contactForm'>
                <FormField
                    name='email'
                    type='email'
                    label='メールアドレス（必須）'
                    setFieldState={setEmail}
                    isCorrect={emailIsCorrect}
                    setIsCorrect={setEmailIsCorrect}
                />
                <FormField
                    name='subject'
                    type='text'
                    label='件名'
                    setFieldState={setSubject}
                    isCorrect={true}
                />
                <FormField
                    name='content'
                    type='text'
                    label='お問い合わせ内容（必須）'
                    setFieldState={setContent}
                    isCorrect={contentIsCorrect}
                    setIsCorrect={setContentIsCorrect}
                    rows={6}
                />
                { (email !== '' && emailIsCorrect && content !== '' &&contentIsCorrect) ?
                    <Button
                        variant='contained'
                        color='primary'
                        className={classes.formButton}
                        onClick={handleSubmit}
                    >
                        送信
                    </Button>
                    :
                    <Button
                        disabled
                        variant='contained'
                        className={classes.formButton}
                    >
                        送信
                    </Button>
                }
            </form>
        </section>
    );
};

export default Form;
