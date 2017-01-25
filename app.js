// Example 1: sets up service wrapper, sends initial message, and 
// receives response.

var ConversationV1 = require('watson-developer-cloud');

// Set up Conversation service wrapper.
var conversation = new ConversationV1({
  username: 'fbba1498-14f4-43b3-9a41-cfbc2cf6d730', // replace with username from service key
  password: 'op10GE3Ku8bn', // replace with password from service key
  path: { workspace_id: '09ff5ce1-a4b8-451b-8929-77371f7b99ef' }, // replace with workspace ID
  version_date: '2016-07-11'
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
