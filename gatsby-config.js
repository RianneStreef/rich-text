module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "rich-text",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "oXEfERPiYecqYnQxzd7dZeNEZ6IHSq-toBTTwFQj73E",
        spaceId: "t1i0qcjcfqs8",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rich Text`,
        short_name: `Richt Text tries`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
      },
    },
  ],
};
