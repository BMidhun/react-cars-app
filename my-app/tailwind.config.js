module.exports = {

    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode : false,
    theme:{
        extend : {},
        screens : {
            sm:"640px",
            // min-width 640px

            md: "768px",
            // min-width 768px

            lg: "1024px",
            // min-width 1024px

            xl: "1280px",
            //  min-width 1280px

            "2xl":"1536px"
            //  min-width 1536px
        }
    },

    variants:{
        extend : {}
    },

    plugins : []

}