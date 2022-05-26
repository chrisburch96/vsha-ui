import {} from "styled-components";
import { ITheme } from "components/styles";
declare module "styled-components" {
  export interface DefaultTheme extends ITheme {}
}
