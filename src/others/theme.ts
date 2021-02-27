import { createMuiTheme } from '@material-ui/core/styles';

let theme = createMuiTheme({
    palette: {
        primary: {
            light: '#ffffff',
            main: '#fdfdfd',
            dark: '#cacaca'
        }
    },
    overrides: {
        MuiFab: {
            root: {
                width: '52.2px',
                height: '60px',
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25% )',
                borderRadius: 0,
                boxShadow: '0px 6px 10px -2px rgb(0 0 0 / 20%), 0px 12px 20px 0px rgb(0 0 0 / 14%), 0px 2px 36px 0px rgb(0 0 0 / 12%)',
            }
        },
        MuiSvgIcon: {
            root: {
                width: '1.2em',
                height: '1.2em',
                fontWeight: 300,
            }
        }
    },
})

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
