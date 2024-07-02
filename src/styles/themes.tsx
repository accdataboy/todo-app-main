const defaultTheme = {
    borderStyles: {
        none: "none",
        solid: "solid",
    },
    borderRadius: {
        none: "0",
        base100: "0.25rem",
        base200: "0.375rem",
        base300: "0.5rem",
        base400: "1rem",
        base500: "2rem",
        circular: "9999rem",
    },
    borderWidth: {
        none: "0",
        base100: "1px",
        base200: "2px",
        base300: "4px",
        base400: "8px",
    },
    boxShadow: {
        primary: "0px 29px 24px 8px rgba(0, 0, 0, 0.15)",
    },
    breakpoint: {
        mobileSm: "320px",
        mobileMd: "375px",
        mobileLg: "425px",
        tablet: "768px",
        laptop: "1024px",
        laptopLg: "1440px",
        desktop: "2560px",
    },
    color: {
        checkbox: {
            background:
                "linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))",
        },
    },
    duration: {
        short: "250ms",
        medium: "375ms",
        long: "500ms",
    },
    fontFamily: {
        primary: "Josefin Sans, sans-serif",
    },
    fontSize: {
        base100: "0.75rem",
        base200: "0.875rem",
        base300: "1rem",
        base400: "1.125rem",
        base500: "1.25rem",
        base600: "1.5rem",
        base700: "2rem",
        base800: "3rem",
        base900: "4rem",
        base1000: "6rem",
    },
    fontWeight: {
        normal: "400",
        bold: "700",
    },
    spacing: {
        base100: "0.125rem",
        base200: "0.25rem",
        base300: "0.5rem",
        base400: "0.75rem",
        base500: "1rem",
        base600: "1.25rem",
        base700: "1.75rem",
        base800: "2rem",
        base900: "2.25rem",
        base1000: "3rem",
    },
    images: {
        check: "images/icon-check.svg",
        delete: "images/icon-cross.svg",
    },
};

const darkTheme = {
    name: "dark",
    color: {
        ...defaultTheme.color,
        gray: "hsl(234, 11%, 52%)",
        background: {
            app: "hsl(235, 21%, 11%)",
            primary: "hsl(235, 24%, 19%)",
        },
        text: {
            header: "hsl(0, 0%, 98%)",
            primary: "hsl(234, 39%, 85%)",
            secondary: "hsl(233, 14%, 35%)",
            accent: "hsl(220, 98%, 61%)",
            hover: "hsl(236, 33%, 92%)",
        },
    },
    images: {
        ...defaultTheme.images,
        background: {
            desktop: "images/bg-desktop-dark.jpg",
            mobile: "images/bg-mobile-dark.jpg",
        },
        toggle: "images/icon-sun.svg",
    },
};

const lightTheme = {
    name: "light",
    color: {
        ...defaultTheme.color,
        gray: "hsl(233, 11%, 84%)",
        background: {
            app: "hsl(236, 33%, 92%)",
            primary: "hsl(0, 0%, 98%)",
        },
        text: {
            header: "hsl(0, 0%, 98%)",
            primary: "hsl(235, 19%, 35%)",
            secondary: "hsl(236, 9%, 61%)",
            accent: "hsl(220, 98%, 61%)",
            hover: "hsl(235, 19%, 35%)",
        },
    },
    images: {
        ...defaultTheme.images,
        background: {
            desktop: "images/bg-desktop-light.jpg",
            mobile: "images/bg-mobile-light.jpg",
        },
        toggle: "images/icon-moon.svg",
    },
};

export const Themes = {
    dark: {
        ...defaultTheme,
        name: darkTheme.name,
        color: darkTheme.color,
        images: darkTheme.images,
    },
    light: {
        ...defaultTheme,
        name: lightTheme.name,
        color: lightTheme.color,
        images: lightTheme.images,
    },
};
