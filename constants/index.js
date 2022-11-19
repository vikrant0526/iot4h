import { Dimensions } from "react-native";
import { generateFontSizes } from "../utils/styles";

// Window DImensions
export const WIDHT = Dimensions.get("window").width;
export const HEIGHT = Dimensions.get("window").height;

/* Style Util Constansts */
// Shadow Config
export const STYLE_SHADOW = {
  shadowColor: "#171717",
  shadowOffset: { width: -2, height: 4 },
  shadowOpacity: 0.2,
  shadowRadius: 3,
};

// Card Style
export const STYLE_CARD = {
  backgroundColor: "#FFF",
  borderRadius: 10,
  padding: 10,
  ...STYLE_SHADOW,
};

// Font Sizes

export const {
  STYLE_FONT_SIZE_XL,
  STYLE_FONT_SIZE_LG,
  STYLE_FONT_SIZE_MD,
  STYLE_FONT_SIZE_NM,
  STYLE_FONT_SIZE_SM,
  STYLE_FONT_SIZE_XS,
} = generateFontSizes(WIDHT, HEIGHT);

// Colors
export const STYLE_COLOR_PRIMARY = "#C62368";
export const STYLE_COLOR_SECONDARY = "#FA7268";

/* Style Util Constansts ends */
