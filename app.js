// Example 1: sets up service wrapper, sends initial message, and 
// receives response.



var watson = require('watson-developer-cloud');
//var ConversationV1 = require('watson-developer-cloud/conversation/v1');
var express = require('express');
var bodyParser = require('body-parser');
var uuid = require('node-uuid');
var request = require('request');
var JSONbig = require('json-bigint');
var async = require('async');
var log4js = require('log4js');
var fs = require('fs');
var util = require('util');

var session = require('express-session');
var sql = require('mssql');

var FB_VERIFY_TOKEN = "CAA30DE7-CC67-4CBA-AF93-2B1C5C4C19D4";
var FB_PAGE_ACCESS_TOKEN = "EAAOFPm9yeWcBAKMf0SHcRvsZAiLkVmVkgmZAC6Ln3rAq4sIGFbANrjuiGBplPjJj1JBQcVyQWwwMJMuSk3uCd01vxbVqrV1PxmoEWeBx0LRcVCUzmGY7D535wJO2ZB0iagBlSNjPZClrKSZCjaHcjDriF0pNPA2SfTvcunBSupgZDZD";



var conversation = watson.conversation({
  console.log('Initialising conversation');
  username: 'fbba1498-14f4-43b3-9a41-cfbc2cf6d730',
  password: 'op10GE3Ku8bn',
  version: 'v1',
  version_date: '2016-09-20'
});



/*
// Set up Conversation service wrapper.
var conversation = new ConversationV1({
  username: 'fbba1498-14f4-43b3-9a41-cfbc2cf6d730', // replace with username from service key
  password: 'op10GE3Ku8bn', // replace with password from service key
  path: { workspace_id: '5f19b64f-396a-4838-a433-345f476e456c' }, // replace with workspace ID
  version_date: '2017-01-11'
});*/

conversation.message({
  console.log('Started conversation');
  workspace_id: '25dfa8a0-0263-471b-8980-317e68c30488',
  input: {'text': 'Turn on the lights'},
  context: 'Hi'
},  function(err, response) {
  if (err)
    console.log('error:', err);
  else
    console.log(JSON.stringify(response, null, 2));
});

/*
// Start conversation with empty message.
conversation.message({}, processResponse);

// Process the conversation response.
function processResponse(err, response) {
  if (err) {
    console.error(err); // something went wrong
    return;
  }
  
  // Display the output from dialog, if any.
  if (response.output.text.length != 0) {
      console.log(response.output.text[0]);
  }
}*/
