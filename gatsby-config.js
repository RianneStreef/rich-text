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
  ],
};
