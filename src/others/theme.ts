import { createMuiTheme } from '@material-ui/core/styles';

let theme = createMuiTheme({
    palette: {
        primary: {
            light: '#8bc4ff',
            main: '#5694d1',
            dark: '#1567a0'
        },
        secondary: {
            light: '#ffa39b',
            main: '#d1736d',
            dark: '#9d4542'
        },
        success: {
            light: '#8bc4ff',
            main: '#5694d1',
            dark: '#1567a0'
        },
        error: {
            light: '#ffa39b',
            main: '#d1736d',
            dark: '#9d4542'
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
        },
        MuiFormLabel: {
            root: {
                color: '#c1c1c9'
            }
        },
        MuiInputBase: {
            root: {
                color: '#fdfdfd'
            }
        },
        MuiInput: {
            underline: {
                '&:before': {
                    borderBottom: '1px solid rgba(193, 193, 201, .42)'
                },
                '&:hover': {
                    borderBottom: '1px solid rgba(193, 193, 201, .42)'
                },
                '&:hover:not(.Mui-disabled):before': {
                    borderBottom: '1px solid rgba(193, 193, 201, .87)'
                }
            }
        },
        MuiFormHelperText: {
            root: {
                marginTop: '6px',
            }
        },
        MuiButton: {
            root: {
                borderRadius: 0,
            },
            contained: {
                '&.Mui-disabled': {
                    color: 'rgba(255, 255, 255, .26)',
                    backgroundColor: 'rgba(21, 103, 160, .12)'
                }
            }
        },
    },
})

theme.typography.h1 = {
    fontSize: '1.5em',
    color: '#ffffff',
    fontFamily: '"jost", "Stick", sans-serif',
    fontWeight: 300,
    letterSpacing: '.3em',
    lineHeight: 2,
    [theme.breakpoints.up('sm')]: {
        fontSize: '1.8em'
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '2em'
    }
}

theme.typography.h2 = {
    fontSize: '1.2rem',
    color: '#ffffff',
    fontFamily: '"jost", "Stick", sans-serif',
    fontWeight: 300,
    letterSpacing: '.3em',
    lineHeight: 2,
    [theme.breakpoints.up('sm')]: {
        fontSize: '1.5em'
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1.8em'
    }
}

theme.typography.h3 = {
    fontSize: '1.1rem',
    color: '#ffffff',
    fontFamily: '"jost", "Stick", sans-serif',
    fontWeight: 300,
    letterSpacing: '.3em',
    lineHeight: 2,
    [theme.breakpoints.up('sm')]: {
        fontSize: '1.3em'
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1.5em'
    }
}

theme.typography.h4 = {
    fontSize: '1rem',
    color: '#ffffff',
    fontFamily: '"jost", "Stick", sans-serif',
    fontWeight: 300,
    letterSpacing: '.3em',
    lineHeight: 2,
    [theme.breakpoints.up('sm')]: {
        fontSize: '1.15em'
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1.3em'
    }
}

theme.typography.body1 = {
    lineHeight: 2.4,
    fontSize: 16,
    color: '#ffffff',
    fontFamily: '"jost", "Stick", sans-serif',
    letterSpacing: '.2em',
    [theme.breakpoints.up('sm')]: {
        fontSize: 18
    },
    [theme.breakpoints.up('md')]: {
        fontSize: 20
    }
}

theme.typography.body2 = {
    lineHeight: 2,
    fontSize: 16,
    color: '#ffffff',
    letterSpacing: '.2em',
    fontFamily: '"jost", "Stick", sans-serif',
    [theme.breakpoints.up('sm')]: {
        fontSize: 18
    },
    [theme.breakpoints.up('md')]: {
        fontSize: 20
    },
}

export default theme;
