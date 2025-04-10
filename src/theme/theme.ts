import '@fontsource/barlow/300.css';
import '@fontsource/barlow/400.css';
import '@fontsource/barlow/500.css';
import '@fontsource/barlow/600.css';
import '@fontsource/barlow/700.css';
import '@fontsource/barlow/800.css';
// prettier-ignore
import { createTheme, experimental_extendTheme as extendTheme, responsiveFontSizes } from '@mui/material/styles';
import { TypographyOptions } from '@mui/material/styles/createTypography';

const typography = {
  fontFamily: "'Barlow', sans-serif",
  h1: {
    fontWeight: '700',
    fontSize: '57px',
    marginBottom: '24px',
  },
  h2: {
    fontWeight: '700',
    fontSize: '45px',
    marginBottom: '24px',
  },
  h3: {
    fontWeight: '700',
    fontSize: '36px',
    marginBottom: '24px',
  },
  h4: {
    fontWeight: '700',
    fontSize: '32px',
    marginBottom: '24px',
  },
  h5: {
    fontWeight: '700',
    fontSize: '28px',
    marginBottom: '16px',
  },
  h6: {
    fontWeight: '600',
    fontSize: '24px',
    marginBottom: '16px',
  },
  subtitle1: {
    fontWeight: '400',
    fontSize: '22px',
  },
  subtitle2: {
    fontWeight: '400',
    fontSize: '20px',
  },
  body1: {
    fontWeight: '400',
    fontSize: '18px',
    marginBottom: '24px',
  },
  body2: {
    fontWeight: '400',
    fontSize: '16px',
    marginBottom: '24px',
  },
  button: {
    fontWeight: '600',
    fontSize: '14px',
  },
} satisfies TypographyOptions;

const responsiveTypography = responsiveFontSizes(createTheme({ typography })).typography;

export default extendTheme({
  typography: responsiveTypography,
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#0057d7',
          light: '#3198ff',
        },
        secondary: {
          main: '#e1cd95',
          light: '#ffecb3',
        },
        info: {
          main: '#B7F6FF',
        },
      },
    },
    dark: {
      palette: {
        background: {
          default: '#272a2e',
          paper: '#3d4048',
        },
        primary: {
          main: '#0057d7',
          light: '#3198ff',
        },
        secondary: {
          main: '#e1cd95',
          light: '#ffecb3',
        },
        info: {
          main: '#B7F6FF',
        },
      },
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          boxShadow: 'none',
          padding: '14px 14px 12px',
          textTransform: 'capitalize',
        },
      },
    },
  },
});
