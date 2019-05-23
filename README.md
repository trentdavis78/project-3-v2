# project-3-v2

## Setup
To see the project live, clone the repository. From the root directory, run cd cms && npm install && strapi start to start the Strapi server and, in an other tab, run cd blog && npm install && gatsby develop to start the Gatsby server. Your Strapi installation will be available at http://localhost:1337/admin/ and the Gatsby example front-end available at: http://localhost:8000/.

## Important Notes
After you clone this repo, you must set the Permissions in the "Roles and Permissions" in the back end of your Strapi project. Please see this video Learn Gatsbyjs with Strapi Headless CMS Video Tutorial Series - Roles and Permissions.

For both Article and User, Find and Findone should be checked in Roles and Permissions. You must add content before trying to run the http://localhost:8000/___graphql for the project.

If you get the following error, error Cannot query field "allStrapiArticle" on type "Query" graphql/template-strings, please add content and update the Roles and Permissions as above, and then restart both Strapi and Gatsby.