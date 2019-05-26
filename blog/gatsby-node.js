const path = require(`path`);

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
  // Query for nodes to use in creating pages.
  resolve(
    graphql(request).then(result => {
      if (result.errors) {
        reject(result.errors)
      }
      
      return result;
    })
  )
});

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;
  
  const getArticles = makeRequest(graphql, `
    {
      allStrapiArticle { 
        edges {
          node {
            id
          }
        }
      }
    }
    `).then(result => {
    // Create pages for each article.
    result.data.allStrapiArticle.edges.forEach(({ node }) => {
      createPage({
        path: `/articles/${node.id}`,
        component: path.resolve(`src/templates/article.js`),
        context: {
          id: node.id,
        },
      })
    })
  });

  const getAuthors = makeRequest(graphql, `
    {
      allStrapiUser {
        edges {
          node {
            id
          }
        }
      }
    }
    `).then(result => { 
    // Create pages for each user.
    result.data.allStrapiUser.edges.forEach(({ node }) => {
      let userString = node.id; 
      userString = userString.toString().split('_')[1];     
      let userDetails = "Userdetails_" + userString; 
      createPage({
        path: `/authors/${node.id}`,
        component: path.resolve(`src/templates/author.js`),
        context: {
          id: node.id,
          user: userDetails,
        },
      })
    })
  });
  
  // Query for articles nodes to use in creating pages.
  return getArticles,  
         getAuthors;
};