/**
 * Created by Alicia on 20/06/2015.
 */

var request = require('request');

var tflapi = {
    hosts : {
        status_host: "https://api.tfl.gov.uk/Line/",
        status_all_host: "https://api.tfl.gov.uk/Line/Mode/tube/Status?"
    },
    line: { },
    test: function(){
        return "test function is working"
    }
};
 
tflapi.line.status = function(name, credentials, callback) {

    // Use 'all' as the name to return every line
    if ( name == "all"){
           
            var url = tflapi.hosts.status_all_host
                + "&app_id=" + credentials.appId + "&app_key=" + credentials.appKey
            
            request({
                url: url,
                json: true
            },  function (error, response, body) {
                    if (!error && response.statusCode === 200) {
                        callback(body);
                    } else {
                        callback(error);
                    }
                });

        } else {
            var url = tflapi.hosts.status_host
                + name
                + "/Status?"
                + "detail=False"
                + "&app_id=" + credentials.appId + "&app_key=" + credentials.appKey

                request({
                    url: url,
                    json: true
                }, function (error, response, body) {
                        if (!error && response.statusCode === 200) {
                            callback(body);
                    }
                });            
        }
    

};

module.exports = tflapi;