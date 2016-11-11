
# Twitter Sentiments

### with NodeRED, mongodb, express.js and D3.js

repository for UWA CITS5503 project, Callan Gray

## Project Summary
This project uses two seperate NodeJS based applications, one for hosting NodeRED
and the other a custom web app using express.js. Both repositories are available here:
*  NodeRED: https://github.com/nallack/21341958-Bluemix-NodeRED
*  ExpressApp: https://github.com/nallack/21341958-ExpressApp

This project aims to fetch incoming tweets about various topics, perform
 sentiment analysis, and store the data for later visualization.

Visualization can be performed either through the nodeRED ui page, a portable
express.js app, or via using mongodb queries.


# NodeRED App
Available at: https://cits5503-21341958-node-red.au-syd.mybluemix.net

## Setup
Steps involved in deploying an app to Bluemix.

* Create an IBM Bluemix Node-RED application
  * this configures a NodeJS app with the Node-RED template


* Add environment variables:
  * NODE_RED_USERNAME = 21341958
  * NODE_RED_PASSWORD = CITS5503


* Install Cloud Foundary CLI
  * https://github.com/cloudfoundry/cli/releases
  * follow the getting started page on the      bluemix app page
  * deploy using ```cf push <appname>``` shows the deploy build log as well.
  * alternatively you can simply just use the git hooks and the
  command ```git push origin master```
  * After deploys, the app will take about 15s to show on bluemix as "running",
    and an extra minute for nodejs to deploy packages and initialize.


* (Optional) Add a DevOps deployment service
  * Navigate to the app on IBM Bluemix.
  *  Click the add button beneath continuous delivery, which willcreates a
     git repo to IBM's hub.jazz.net
  * The bluemix console will already initialize the app with the github template,
    pull it first and then continue with git repo from there.

* (Optional) Install additional nodes
  * Extra nodes are available at: http://flows.nodered.org/
  * Use the nodeRED editor to search and add new nodes
  * add node-red-contrib-ui


* (Optional) Disable the static help page
  * Make the node red editor the index page by:
  * comment out line containing ```httpAdminRoot: /red'```
  * comment out line containing ```httpStatic: path.join(__dirname,"public")```


## Configuration
NodeRED once setup generally does not need it's source code altered, the
exception being when altering any static content, since new flows can now be
added via the editor.

you can get to the editor either via the homepage or ```hostname/red``` and
entering the server credentials mentioned in the setup.

Flows by default are stored on the server, and will need to be exported using
the editor in order save them. Alternatives to this such as using NoSQL
databases are currently in development.

## Popularity Flow
The main aim of this setup is to produce a flow that will accept twitter feeds
then process and store this data in a database and for visualisation.

By default, twitter feeds on Australian cities come in from the right side,
undergo simple sentiment analysis, then are added to a running total kept in
a mongoDB database. Tweets found that have interesting properties such as
unusually high or low sentiment value can also be stored in a mongoDB
that can be reviewed later.

## NodeRED UI
In addition to simply collecting data, NodeRED also contains user interface
packages that can quickly build data visualization and controls without any
programming. This has been setup with a sentiment tracker that keeps a history
of each city's sentiment score / popularity and plots this incoming data in
realtime.

## Warnings
* After deploys, the app will take about 15s to show on bluemix as "running",
  up to extra minute for the node-RED to actually initialize as it needs to
  download and install packages, upload droplets.

* Be cautious about installing extra nodejs packages: first application attempt
  had issues where packages once added could not be removed from future deploys.

* Flow data is persistent between deploys, stored locally in some folder, but
  cannot be seen in the Bluemix project browsers, as it is not part of the source code.


## Additional Notes
* Highly recommend you use **atom.io** and **mongochef** as multiplatform
  text editor and mongoDB workbench.
* NodeRED package has its own framework and entry point that performs static
  hosting on the folder "public".
* The alternative to the nodeRED framework  this is to embed node-red into a
  custom nodejs app such as an express app as described here:
  http://nodered.org/docs/embedding, this modification didn't work too well as
  the bluemix template differs quite significantly from the regular node.js
  and will break configuration variables.


# Express App

Available at: https://nodejs-simple.au-syd.mybluemix.net/

Using the collected data from our nodeRED instance, we can create a rest api to
query for clients to query and visualize data in a custom view.

## Setup
Bluemix has an ExpressJS starter pack available that has a very lightweightstarting structure, can connect to Bluemix cloudantDB databases, and is setup
such that it can be deployed both locally and on Bluemix.

*  Install the app from the Bluemix console.
*  Click the button for continuous deploy.
*  Clone the repository locally and git pushes to update the web app.

### Continuous Delivery Pipeline
Continuous delivery for Node.js apps has a few key advantages over the cloud
foundary cli.

* Deployment pipeline has two default stages : Build and Deployment
  * allows for the website to remain active when new changes are moving
    through the pipeline.
  * Can add extra stages such as various testing phases with debug builds.
  * Triggered via git pushes.


## Tutorials
NodeRED guide at:
http://noderedguide.com/index.php/2016/05/17/lecture-7-dashboards-and-ui-techniques-for-node-red/

Tutorial of ploting realtime data here: https://anmolkoul.wordpress.com/2015/06/05/interactive-data-visualization-using-d3-js-dc-js-nodejs-and-mongodb/

## Project Notes
NodeRED is tied relatively close to bluemix, and the nodeRED module has its own
framework and entry point that performs static hosting on the folder "public".

The alternative to this is to embed node-red into a custom nodejs app such as an
express app as described here: http://nodered.org/docs/embedding, but maybe do
that some other time.

Extra nodes are available at: http://flows.nodered.org/
