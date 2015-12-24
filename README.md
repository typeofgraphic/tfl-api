# tfl-api
==========

A new Transport for London API Module for Node.js, because others are incomplete and I wanted a chance to create a node module from start to finish. 

## installation

	npm install tfl-api

## Setup

1. Create a config file in the module folder called config.js. 

2. Create API credentials at the TFL site: <https://tfl.gov.uk/info-for/open-data-users/>

3. [optional] Test your credentials and find the main TFL API docs here: <https://api.tfl.gov.uk/>

4. Go back to the config.js file, add in the following:

	var config = {};

		config.tfl = {
		    appId: 'YOUR_APP_ID',
		    appKey: 'YOUR_APP_KEY'
		};

	module.exports = config;