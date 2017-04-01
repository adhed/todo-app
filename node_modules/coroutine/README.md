# Domain Supervisor

Start co-routines bounded by domains for parallel error handling.

Inspired by Erlang Supervisor and Process classes that enable fault-
tolerant parallel applications by isolating co-routines from each other,
thus preventing exceptions in co-routines from crashing the main nodejs
process.

## Installation

    npm install domain-supervisor

## Usage

    var Supervisor = require('domain-supervisor').Supervisor;
    var Process = require('domain-supervisor').Process;

    var proc = new Process(myCoRoutine);
    var supervisor = new Supervisor();

    supervisor.run(proc, function(error, restart, crash) {
      if (true) {
        console.log('Handling error:', error.stack);
        console.log('restarting...');
        restart();
      } else {
        // never crash the unix process, but it is an option
        crash(error);
      }
    });

    function myCoRoutine() {
      var loops = 0;
      setInterval(function() {
        console.log('valuably crunching data');
        if (loops > 5) throw new Error('some terrible exception!'); 
      }, 1000);
    }
    
