# ATXPC
![alt text](homepage.PNG "ATXPC Home")

ATXPC is a market-specific blog focused on what is trending in the Austin tech community.  It includes news, articles, events, services and resources.  It is designed to provide a fresh perspective serving Austinites looking to break into technical careers or advance tech enthusiasts’ knowledge and professional status. It allows Austin techies to provide input on what is current, relevant and critical regarding industry trends, advancing technology and corporate marketing transitions.  ATXPC aims to support those who are looking for an advantage to market themselves or gain insight growing their skills in technology specifically in the Austin area.

##Deployed App
[Check out the app here.](http://localhost:8000/)


## Prerequisites
To see the project live, clone the repository. From the root directory, run cd cms && npm install && strapi start to start the Strapi server and, in an other tab, run cd blog && npm install && gatsby develop to start the Gatsby server. Your Strapi installation will be available at http://localhost:1337/admin/ and the Gatsby example front-end available at: http://localhost:8000/.

#### Strapi CMS - Front End Tool
Strapi is an open sourced, Node.JS based, Headless Content Management System (CMS) Front-End Developers tool. Content is managed through an admin panel and allows multiple contributors to manage content.

#### Gatsby Plug In
Gatsby is a  website framework for React. Because it is based on React, the website pages are never reloaded. A large set of  plugins exist to get data from any source (Markdown files, CMS, etc.). Gatsby is strongly based on the "node" interface, which is the center of Gatsby's data system.

#### Important Notes
After you clone this repo, you must set the Permissions in the "Roles and Permissions" in the back end of your Strapi project. Please see this video [Learn Gatsbyjs with Strapi Headless CMS Video Tutorial Series - Roles and Permissions.](https://www.youtube.com/watch?v=1jev6QRwcSo)

For both Article and User, Find and Findone should be checked in Roles and Permissions. You must add content before trying to run the http://localhost:8000/___graphql for the project.
If you get the following error, error Cannot query field "allStrapiArticle" on type "Query" graphql/template-strings, please add content and update the Roles and Permissions as above, and then restart both Strapi and Gatsby.
## Social Media
Visit us soon on Facebook and Twitter.
## Technologies and Dependencies
ATXPC uses a number of open source projects related to strapi cms to work properly:
* babel-eslint 7.1.1
* eslint 4.19.1
* eslint-config-airbnb 13.0.0
* eslint-plugin-import 2.11.0
* eslint-plugin-react 7.7.0
* lodash 4.17.5
* strapi 3.0.0-alpha.26.2
* strapi-utils 3.0.0-alpha.26.2
* strapi-hook-bookshelf 3.0.0-alpha.26.2
* strapi-hook-knex 3.0.0-alpha.26.2
* knex
* sqlite3
ATXPC uses a number of open source projects related to gatsby to work properly:
* auth0-js 9.10.3
* gatsby 2.5.7
* gatsby-image 2.1.0
* gatsby-plugin-mailchimp 5.1.0 
* gatsby-plugin-manifest 2.1.1
* gatsby-plugin-offline 2.1.1
* gatsby-plugin-react-helmet 3.0.12
* gatsby-plugin-sharp 2.0.37
* gatsby-source-filesystem 2.0.37
* gatsby-source-strapi 0.0.8
* gatsby-transformer-sharp 2.1.19
* i 0.3.6
* materialize-css 1.0.0-rc.2
* moment 2.24.0
* prop-types 15.7.2
* react 16.8.6
* react-dom 16.8.6
* react-helmet 5.2.1
* react-markdown 4.0.8
* react-media 1.9.2
## Contributors
ATXPC developers team includes:
[Trent Davis](https://github.com/trentdavis78)
[Chandni Patel](https://github.com/chandnibpatel)
[Penny Arnold](https://github.com/PennyArnold)
## Copyright
© Copyright 2019 ATXPC.com