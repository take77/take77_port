import { createMuiTheme } from '@material-ui/core/styles';

let theme = createMuiTheme()

theme.typography.h1 = {
    fontSize: '1.2rem',
    fontFamily: '"jost", "Sawarabi Gothic", sans-serif',
    fontWeight: 300,
    letterSpacing: '.3em',
    lineHeight: 2,
    [theme.breakpoints.up('sm')]: {
        fontSize: '1.3rem'
    }
}

theme.typography.h2 = {
    fontSize: '1.3rem',
    fontFamily: '"jost", "Sawarabi Gothic", sans-serif',
    fontWeight: 300,
    letterSpacing: '.3em',
    lineHeight: 2,
    [theme.breakpoints.up('sm')]: {
        fontSize: '1.4rem'
    }
}

theme.typography.h3 = {
    fontSize: '1.1rem',
    fontFamily: '"jost", "Sawarabi Gothic", sans-serif',
    fontWeight: 300,
    letterSpacing: '.3em',
    lineHeight: 2,
    [theme.breakpoints.up('sm')]: {
        fontSize: '1.2rem'
    }
}

theme.typography.body1 = {
    lineHeight: 2,
    fontSize: 14,
    fontFamily: '"jost", "Sawarabi Gothic", sans-serif',
    letterSpacing: '.2em',
    [theme.breakpoints.up('sm')]: {
        fontSize: 16
    },
    [theme.breakpoints.up('md')]: {
        fontSize: 18
    }
}

theme.typography.body2 = {
    lineHeight: 2,
    fontSize: 14,
    letterSpacing: '.2em',
    fontFamily: '"jost", "Sawarabi Gothic", sans-serif',
    [theme.breakpoints.up('sm')]: {
        fontSize: 16
    },
    [theme.breakpoints.up('md')]: {
        fontSize: 18
    },
}

export default theme;
