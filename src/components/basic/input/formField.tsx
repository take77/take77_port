import React from 'react';

import { makeStyles } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

type FormFieldProps = {
    name: 'email' | 'subject' | 'content';
    type: string;
    label: string;
    setFieldState: React.Dispatch<React.SetStateAction<string>>;
    isCorrect: boolean;
    setIsCorrect?: React.Dispatch<React.SetStateAction<boolean>>;
    rows?: number;
}

const useStyles = makeStyles({
    formField: {
        margin: '.75em auto',
    },
});

const FormField: React.FC<FormFieldProps> = (props) => {
    const {name, type, label, setFieldState, isCorrect, setIsCorrect, rows} = props;
    const classes = useStyles();
    let errorMessage = '';
    if (name === 'email') {
        errorMessage = '正しいメールアドレスを入力してください';
    } else if (name === 'content') {
        errorMessage = 'お問い合わせ内容は必須です';
    };

    const handleChange = (value) => {
        setFieldState(value);

        if (name === 'email') {
            const regex = /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
            regex.test(value) ? setIsCorrect(true) : setIsCorrect(false);
        } else if (name === 'content') {
            value === '' ? setIsCorrect(false) : setIsCorrect(true);
        }
    };

    return (
        <FormControl fullWidth className={classes.formField}>
            <InputLabel>{label}</InputLabel>
            { rows ?
                <Input
                    multiline
                    rows={rows}
                    type={type}
                    onChange={(event) => handleChange(event.target.value)}
                />
                :
                <Input
                    type={type}
                    onChange={(event) => handleChange(event.target.value)}
                />
            }
            {!isCorrect &&
                <FormHelperText error>{errorMessage}</FormHelperText>
            }
      </FormControl>
    )
};

export default FormField;
