import { createTheme } from '@material-ui/core/styles';

interface ButtonBackGroundColor {
  active: string;
  hovered: string;
  focused: string;
  pressed: string;
  disabled: string;
}

interface ButtonBorderColor {
  active: string;
  hovered: string;
  focused: string;
  pressed: string;
  disabled: string;
}

interface Mode {
  colors: {
    background: {
      default: string;
      inverse: string;
      brand: string;
      controls: string;
      errorTextField: string;
      error: string;
      warning: string;
      success: string;
      link: string;
      white: string;
      progressBar: string;
      progressBarFilled: string;
    };
    typographyAndIcons: {
      default: {
        active: string;
        inactive: string;
        disabled: string;
        error: string;
        warning: string;
        success: string;
        link: string;
        purple: string;
        byzantine: string;
        teal: string;
      },
      inverse: {
        active: string;
        inactive: string;
        disabled: string;
      },
      brand: {
        active: string;
        inactive: string;
        disabled: string;
      },
      custom : {
        title: string;
      }
    };
    button: {
      backgroundColor: {
        contained: ButtonBackGroundColor;
        outlined: ButtonBackGroundColor;
        plain: ButtonBackGroundColor;
      },
      borderColor: {
        contained: ButtonBorderColor;
        outlined: ButtonBorderColor;
        plain: ButtonBorderColor;
      },
    };
    borders: {
      divider: string;
      border: string;
      borderFocusedTextField: string;
      borderFocusedControl: string;
      borderError: string;
    };
    states: {
      hover: string;
      focused: string;
      activated: string;
      dragged: string;
      selected: string;
      pressed: string;
    };
    label: {
      color: {
        info: string;
        success: string;
        warning: string;
        error: string;
        default: string;
      },
      backgroundColor: {
        info: string;
        success: string;
        warning: string;
        error: string;
        default: string;
      }
    };
    boxShadow: {
      paper: string;
    };
  }
}

declare module '@material-ui/core/styles/createTheme' {
  interface Theme {
    custom: {
      lightTheme: Mode;
      fontFamily: {
        beelineIcons: string;
      };
      border: {
        radius12: string;
      };
    };
  }
  interface ThemeOptions extends Theme {} // eslint-disable-line
}

declare module '@material-ui/core/TextField' {
  interface TextFieldPropsSizeOverrides {
    large: true;
  }
}

export const theme = createTheme({
  custom: {
    lightTheme: {
      colors: {
        background: {
          default: 'rgba(0, 0, 0, 0.1)',
          inverse: 'rgba(33, 33, 33, 1)',
          brand: 'rgba(253, 216, 53, 1)',
          controls: 'rgba(0, 0, 0, 0.08)',
          errorTextField: 'rgba(220, 63, 46, 0.08)',
          error: 'rgba(253, 205, 207, 1)',
          warning: 'rgba(255, 227, 181, 1)',
          success: 'rgba(197, 233, 205, 1)',
          link: 'rgba(187, 222, 255, 1)',
          white: 'rgba(255, 255, 255, 1)',
          progressBar: 'rgba(240, 240, 240, 1)',
          progressBarFilled: 'linear-gradient(45deg, rgba(59, 45, 217, 1), rgba(99, 57, 211, 1), rgba(127, 70, 198, 1), rgba(139, 76, 192, 1), rgba(154, 83, 185, 1), rgba(177, 93, 175, 1), rgba(197, 103, 165, 1), rgba(223, 115, 153, 1), rgba(226, 126, 136, 1), rgba(234, 152, 95, 1), rgba(245, 163, 53, 1), rgba(245, 159, 51, 1), rgba(247, 150, 47, 1), rgba(253, 116, 29, 1), rgba(255, 82, 28, 1))',
        },
        typographyAndIcons: {
          default: {
            active: 'rgba(0, 0, 0, 0.87)',
            inactive: 'rgba(0, 0, 0, 0.6)',
            disabled: 'rgba(0, 0, 0, 0.38)',
            error: 'rgba(220, 63, 46, 1)',
            warning: 'rgba(255, 148, 25, 1)',
            success: 'rgba(44, 168, 83, 1)',
            link: 'rgba(26, 115, 232, 1)',
            purple: 'rgba(126, 0, 237, 1)',
            byzantine: 'rgba(188, 0, 184, 1)',
            teal: 'rgba(0, 173, 199, 1)',
          },
          inverse: {
            active: 'rgba(255, 255, 255, 0.87)',
            inactive: 'rgba(255, 255, 255, 0.6)',
            disabled: 'rgba(255, 255, 255, 0.38)',
          },
          brand: {
            active: 'rgba(0, 0, 0, 0.87)',
            inactive: 'rgba(0, 0, 0, 0.6)',
            disabled: 'rgba(0, 0, 0, 0.38)',
          },
          custom: {
            title: 'rgba(0, 0, 0, 0.58)',
          },
        },
        button: {
          backgroundColor: {
            contained: {
              active: '#FDD835',
              hovered: '#FDC435',
              pressed: '#FDB435',
              focused: '#FDC435',
              disabled: '#FDD835',
            },
            outlined: {
              active: 'rgba(255, 255, 255, 1)',
              hovered: 'rgba(0, 0, 0, 0.04)',
              focused: 'rgba(255, 255, 255, 1)',
              pressed: 'rgba(0, 0, 0, 0.12)',
              disabled: 'rgba(255, 255, 255, 1)',
            },
            plain: {
              active: 'transparent',
              hovered: 'rgba(26, 115, 232, 0.08)',
              pressed: 'rgba(26, 115, 232, 0.12)',
              focused: 'transparent',
              disabled: 'transparent',
            },
          },
          borderColor: {
            contained: {
              active: 'transparent',
              hovered: 'transparent',
              focused: 'rgba(0, 0, 0, 0.48)',
              pressed: 'transparent',
              disabled: 'transparent',
            },
            outlined: {
              active: 'rgba(0, 0, 0, 0.18)',
              hovered: 'rgba(0, 0, 0, 0.04)',
              focused: 'rgba(0, 0, 0, 0.48)',
              pressed: 'rgba(0, 0, 0, 0.18)',
              disabled: 'rgba(0, 0, 0, 0.18)',
            },
            plain: {
              active: 'transparent',
              hovered: 'transparent',
              focused: 'rgba(0, 0, 0, 0.48)',
              pressed: 'transparent',
              disabled: 'transparent',
            },
          },
        },
        borders: {
          divider: 'rgba(0, 0, 0, 0.12)',
          border: 'rgba(0, 0, 0, 0.18)',
          borderFocusedTextField: 'rgba(33, 33, 33, 1)',
          borderFocusedControl: 'rgba(0, 0, 0, 0.48)',
          borderError: 'rgba(220, 63, 46, 1)',
        },
        states: {
          hover: 'rgba(0, 0, 0, 0.04)',
          focused: 'rgba(0, 0, 0, 0.12)',
          activated: 'rgba(0, 0, 0, 0.12)',
          dragged: 'rgba(0, 0, 0, 0.08)',
          selected: 'rgba(0, 0, 0, 0.04)',
          pressed: 'rgba(0, 0, 0, 0.12)',
        },
        label: {
          color: {
            info: 'rgba(3, 92, 195, 1)',
            success: 'rgba(76, 175, 80, 1)',
            warning: 'rgba(255, 143, 0, 1)',
            error: 'rgba(229, 57, 53, 1)',
            default: 'rgba(0, 0, 0, 0.54)',
          },
          backgroundColor: {
            info: 'rgba(3, 92, 195, 0.08)',
            success: 'rgba(76, 175, 80, 0.08)',
            warning: 'rgba(255, 143, 0, 0.08)',
            error: 'rgba(229, 57, 53, 0.08)',
            default: 'rgba(0, 0, 0, 0.08)',
          },
        },
        boxShadow: {
          paper: '0px 11px 15px 0px rgba(0, 0, 0, 0.2), 0px 9px 46px 0px rgba(0, 0, 0, 0.12) , 0px 24px 38px 0px rgb(0, 0, 0, 0.14)',
        },
      },
    },
    fontFamily: {
      beelineIcons: 'BeelineIcons',
    },
    border: {
      radius12: '12px',
    },
  },
});
