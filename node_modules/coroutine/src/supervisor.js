var Domain = require('domain');

function Supervisor() {}

Supervisor.prototype.run = function(proc, onError) {

  var domain = Domain.create();

  domain.run(proc.start.bind(proc));

  domain.on('error', function(error) {
    onError(error, function() {
      domain.run(proc.start.bind(proc));
    },
    function(error) {
      throw error;
    });
  });
}

module.exports = Supervisor;

