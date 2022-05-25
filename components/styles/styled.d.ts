import {} from "styled-components";
import { ITheme } from "components/styles";
declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ITheme {}
}
