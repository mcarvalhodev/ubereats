import {
  extendTheme,
  theme as base,
  withDefaultColorScheme,
  withDefaultVariant,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const inputSelectStyles = {
  variants: {
    filled: {
      field: {
        borderColor: "#b8b8b8",
        borderRadius: "2px",
        backgroundColor: "white",
        _focus: {
          borderColor: "brand.500",
        },
      },
    },
  },
  sizes: {
    md: {
      field: {
        borderRadius: "none",
      },
    },
  },
};

const brandRing = {
  _focus: {
    ring: 2,
    ringColor: "brand.500",
  },
};

const theme = extendTheme(
  {
    colors: {
      brand: {
        50: "#eff8ed",
        100: "#cfeac8",
        200: "#aedba3",
        300: "#8ecd7e",
        400: "#6ebf5a",
        500: "#5cb646",
        600: "#4b9339",
        700: "#386e2b",
        800: "#26491d",
        900: "#13250e",
      },
    },
    fonts: {
      heading: `Montserrat, ${base.fonts?.heading}`,
      body: `Inter, ${base.fonts?.body}`,
    },
    components: {
      Button: {
        variants: {
          primary: (props) => ({
            rounded: "none",
            ...brandRing,
            color: mode("white", "gray.800")(props),
            backgroundColor: mode("brand.500", "brand.200")(props),

            _hover: {
              backgroundColor: mode("brand.600", "brand.300")(props),
            },

            _active: {
              backgroundColor: mode("brand.700", "brand.400")(props),
            },
          }),
        },
      },
      Input: { ...inputSelectStyles },
      Select: { ...inputSelectStyles },
      Checkbox: {
        baseStyle: {
          control: {
            borderRadius: "none",
            ...brandRing,
          },
        },
      },
    },
  },
  withDefaultColorScheme({
    colorScheme: "brand",
    components: ["Checkbox"],
  }),
  withDefaultVariant({
    variant: "filled",
    components: ["Input", "Select"],
  })
);

export default theme;
