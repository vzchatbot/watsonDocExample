// Example 1: sets up service wrapper, sends initial message, and 
// receives response.

var ConversationV1 = require('watson-developer-cloud/conversation/v1');
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

// Set up Conversation service wrapper.
var conversation = new ConversationV1({
  username: 'fbba1498-14f4-43b3-9a41-cfbc2cf6d730', // replace with username from service key
  password: 'op10GE3Ku8bn', // replace with password from service key
  path: { workspace_id: '09ff5ce1-a4b8-451b-8929-77371f7b99ef' }, // replace with workspace ID
  version_date: '2017-01-11'
});

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
}
