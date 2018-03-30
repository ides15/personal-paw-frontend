var PythonShell = require('python-shell');
var pyshell = new PythonShell('../../assets/auth/main.py');

var isLoggedIn=false;

function setIsLoggedIn(bool) {
  isLoggedIn = bool;
}
export function isLoggedIn() {
  return isLoggedIn;
}

export default function authenticate(login, password) {
    // sends a message to the Python script via stdin
    pyshell.send(login);
    pyshell.send(password);

    pyshell.on('message', function (message) {
      // received a message sent from the Python script (a simple "print" statement)
        if(message.search("err")===-1) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(true);
        }
    });

    // end the input stream and allow the process to exit
    pyshell.end(function (err,code,signal) {
      if (err) throw err;
      console.log('The exit code was: ' + code);
      console.log('The exit signal was: ' + signal);
      console.log('finished');
      console.log('finished');
    });
  };