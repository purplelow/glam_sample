import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    bgColor: string;
    tabBgColor: string;
    textColor: string;
    accentColor: string;
    activeFont: string;
    normalFont: string;
    activeBorder: string;
  }
}