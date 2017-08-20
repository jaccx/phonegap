// replace these values with those generated in your TokBox Account
var apiKey = "45942392";
var sessionId = "1_MX40NTk0MjM5Mn5-MTUwMzIzNDE3OTEzMX56OUE4clNEYXEydTRzUHRuM2dKK0dXNlN-UH4";
var token = "T1==cGFydG5lcl9pZD00NTk0MjM5MiZzaWc9OGNmMTI5YTI5N2QyMjc5NTVlZmY4YjZjNjY4YzcwMTNkNTRhMmNiZjpzZXNzaW9uX2lkPTFfTVg0ME5UazBNak01TW41LU1UVXdNekl6TkRFM09URXpNWDU2T1VFNGNsTkVZWEV5ZFRSelVIUnVNMmRLSzBkWE5sTi1VSDQmY3JlYXRlX3RpbWU9MTUwMzIzNDI4MiZub25jZT0wLjk3NDMwODkxOTY4Nzg5NTEmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTUwMzIzNzg3NSZjb25uZWN0aW9uX2RhdGE9cHJ1ZWJhcyZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==";

// Handling all of our errors here by alerting them
function handleError(error) {
  if (error) {
    alert(error.message);
  }
}

// (optional) add server code here
initializeSession();

function initializeSession() {
  var session = OT.initSession(apiKey, sessionId);

  // Subscribe to a newly created stream
  session.on('streamCreated', function(event) {
    console.log("Subscribe to a newly created stream");
    session.subscribe(event.stream, 'subscriber', {
      insertMode: 'append',
      width: '100%',
      height: '100%'
    }, handleError);
  });

  // Create a publisher
  var publisher = OT.initPublisher('publisher', {
    insertMode: 'append',
    width: '100%',
    height: '100%'
  }, handleError);

  // Connect to the session
  session.connect(token, function(error) {
    // If the connection is successful, initialize a publisher and publish to the session
    if (error) {
      handleError(error);
    } else {
        console.log("Connect to the session");
      session.publish(publisher, handleError);
    }
  });
}
