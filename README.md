#Setup

Install node and npm from https://nodejs.org/en/download/

Run the following commands:

  git clone git@github.com:ryan-10e/ui-exercise.git
  cd ui-exercise
  npm install
  sudo npm install -g webpack
  webpack

No webserverver is required, just open the local file.  For me that just means going to file:///Users/rlissack/Dropbox/Development/10e/ui-exercise/index.html in my browser.

#API usage examples

Some examples for how to call the API using `curl`:

    export ENDPOINTS_HOST=http://venue-service.appspot.com
    export ENDPOINTS_VERSION=v1
    export ENDPOINTS_KEY=AIzaSyAZPfiEWQTrgsviCMFPRxD64JNFssdAq98

    echo '***CREATE***'
    curl -d '{"name": "Test Venue"}' -H 'Content-Type: application/json' "${ENDPOINTS_HOST}/_ah/api/venue_service/${ENDPOINTS_VERSION}/venue?key=${ENDPOINTS_KEY}"
    echo '***READ***'
    curl -H 'Content-Type: application/json' "${ENDPOINTS_HOST}/_ah/api/venue_service/${ENDPOINTS_VERSION}/venue/123?key=${ENDPOINTS_KEY}"
    echo '***UPDATE***'
    curl -d '{"name": "Test Venue Update"}' -X 'PUT' -H 'Content-Type: application/json' "${ENDPOINTS_HOST}/_ah/api/venue_service/${ENDPOINTS_VERSION}/venue/127?key=${ENDPOINTS_KEY}"
    echo '***DELETE***'
    curl -X 'DELETE' -H 'Content-Type: application/json' "${ENDPOINTS_HOST}/_ah/api/venue_service/${ENDPOINTS_VERSION}/venue/127?key=${ENDPOINTS_KEY}"
    echo '***SEARCH***'
    curl -d '{"search_term": "*", "order_by": "name", "start_pos": "0", "rows": "10"}' -H 'Content-Type: application/json' "${ENDPOINTS_HOST}/_ah/api/venue_service/${ENDPOINTS_VERSION}/venue/search?key=${ENDPOINTS_KEY}"

#Reference

https://edspencer.net/2016/03/20/a-new-stack-for-2016-getting-started-with-react-es6-and-webpack
