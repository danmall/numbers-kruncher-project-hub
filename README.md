Project Hub
===========

Inspired by [Brad Frost](http://bradfrostweb.com/)—who I guess was [inspired by me](http://24ways.org/2013/project-hubs/)?—I&rsquo;ve taken a pass at a new Project Hub.

Here are a few details on what I thought needed improvement:

- **Seeing the future.** Good Project Hubs document the past in a way that makes it easy for a client—or you—to keep track of the process. However, I&rsquo;ve started to pre-populate the entire process for my clients so that they know not only what&rsquo;s happened but also what&rsquo;s coming up.
- **Focusing on a moment in time.** Though this Project Hub lets you see an  entire project timeline, it&rsquo;s still really valuable to know where you currently are in the process. By default, each milestone is labeled with a class name of `entry-future`, which keeps the upcoming milestone grayed out. Once you&rsquo;ve completed a milestone, remove this class name; that will darken the text and place a checkmark next to it. Lastly, add a class of `entry-latest` to the latest milestone to auto-scroll the page. (You can also change this class name on line 18 of the JavaScript file.)

You can see the finished result here: [projecthub.superfriendly.work](https://projecthub.superfriendly.work/)

You can deploy this using Netlify with the button below:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/SuperFriendly/sf-project-hub-template)

Pull request or fork at your leisure. Happy Project Hubbing!

## Development Configuration

This Project Hub is set up as a Jekyll static site coupled with a Netlify CMS for easy administration. It also includes an integration with [Arcade](https://www.usearcade.com/).

To get started, make sure you have [Ruby and Jekyll](https://jekyllrb.com/docs/installation/) installed in your local environment. Then clone this repository to your local environment and run:

```bash
npm install
```

### Tooling

The project comes with a few handy scripts you can use when compiling the project:

#### Pull fresh design tokens from Arcade
```bash
npm run arcade
```
#### Compile `sass` styles
```bash
npm run styles
```

#### Run the Jekyll server
The site will be served at `http://127.0.0.1:4001/`
```bash
npm run serve
```
#### Watch for changes, build everything, and serve the site locally
The site will be served at `http://127.0.0.1:4001/`
```bash
npm run watch
```

#### Build the site for production
This command cleans up the styles and is also used by Netlify whenever the site is (re)-deployed.
```bash
npm run build
```
