module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'WordPress',
        fieldName: 'wordPress',
        url: 'http://droneops.local/graphql',
        refetchInterval: 60
      }
    }
  ]
};
