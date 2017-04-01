var Supervisor = require(__dirname+'/../').Supervisor;

var proc1 = require(__dirname+'/process1');

var supervisor = new Supervisor();

var errors = 0;

supervisor.run(proc1, function(error, restart, crash) {
  errors++;
  console.log('caught an error:', error.message);
  if (errors > 3) {
    console.log('Alright I give up!!');
    crash(error);
  } else {
    console.log('Don\'t worry I got it');
    console.log("restarting...");
    setTimeout(restart);
  }
});

