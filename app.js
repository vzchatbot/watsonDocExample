var watson = require('watson-developer-cloud');


var conversation = watson.conversation({
    username: '31be4934-c02e-441a-96e6-d639b4ab69a8',
    password: 'Q2hapKhopVRj',
    version: 'v1',
    version_date: '2016-09-20'
});

function prompt(question, callback){
    var stdin=process.stdin,
        stdout=process.stdout;
    stdin.resume();
    stdout.write(question);
    
    stdin.once('data', function(data) {
        callback(data.toString().trim());
    });
}

function convMess(message){
    conversation.message({
        workspace_id:'b2d3a074-4d46-4b95-b902-f70d0000fdc6',
        input: {'text':message}
    }, function(err, response) {
        if(err) {
            console.log(err)
        }
        else {
            console.log('Watson: ' + response.output.text.values[]);
        }
    });
}

//convMess('Hello');
convMess('Remind me to meet Robert');
//convMess('Order me a pizza for lunch');
