import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

// TODO: Checar o por que disso, se é realmente necessário,
// Tenho quase 100% certeza, que é para deixar os estilos tipados/intellisense pelo provider.
type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}