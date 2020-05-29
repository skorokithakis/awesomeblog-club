# Awesomeblog.club

This repository contains code for https://awesomeblog.club which is a curation site for small indie and personal blogs.

While some code is specific to awesomeblog.club site, this project can be easily used to deploy similar site for your own curation purposes. Most pages are written in mdx and do not need you to write or dab with jsx to change stuff.

### Deployment
Most things should be configurable via next.config.js.

1. Fork the repo. Clone it locally.
2. Run `yarn install` or `npm install`
3. Edit next.config.js file to include your own values.
4. Put your own blogs or links in database.json.
5. Install vercel cli by running `yarn global add vercel` or `npm i -g vercel`.
6. Create account on vercel and login on the vercel cli.
7. Run `vercel` command in the project directory.
   
You can also use this nice button below -

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/searchableguy/awesomeblog.club)

if you are not using vercel for deployment (which I recommend because it's super fast and easy), you can run `yarn build` or `npm run build` and `yarn start` or `npm start` to run it on your own server.

### Contributing

If you are contributing a major change or adding features, please make an issue before hand.

#### Development

You will need [node](https://nodejs.org/en/) and [yarn](https://classic.yarnpkg.com/en/) installed.

Fork the repo and clone it locally. In the project directory, run `yarn install` to install packages and `yarn dev` to start the development server.
