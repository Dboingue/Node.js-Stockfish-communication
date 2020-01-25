const {
  performance
} = require('perf_hooks');

//console.log('performance', performance.now());

const spawn = require('child_process').spawn,
    fish = spawn('bin/stockfish_10_x64');

    dataString='';
    fish.stdout.on('data', function(data){
        dataString += data.toString();
        //sendMessage({message: 'python', body: 'received data from python'});
        let toSend='';
        for (let i=0;i<data.length;i++) {
          toSend+=String.fromCharCode(data[i]);
        }
        console.log(toSend);
        if (toSend.indexOf('Nodes')!==-1) {console.log(performance.now()-now)
          //fish.kill('SIGINT');
        }
        //let ind=toSend.indexOf('{');
     // if (ind!==-1) {toSend=toSend.slice(ind)}
     // toSend = toSend.replace(/\r?\n|\r/g, '');
       // sendMessage({message: 'python', body: {fromPy: toSend}});
      });
      fish.stdout.on('end', function(){
        console.log('end');
        //sendMessage({message: 'python', body: dataString});
      });
      

      let now = performance.now();
      
      //fish.stdin.write('position fen r2qk2r/1p1bb1pp/p2pQp2/2p2N2/5P2/1P1PP1P1/PBP4P/R3K3 w Qkq -'+'\r\n');
      //fish.stdin.write('setoption name hash value 1024'+'\r\n');
      //fish.stdin.write('go perft 6'+'\r\n');
      //fish.stdin.write('uci'+'\r\n');
      fish.stdin.write('setoption name threads value 1'+'\r\n');
      fish.stdin.write('position fen rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'+'\r\n');
      fish.stdin.write('go infinite'+'\r\n');
      //fish.stdin.write('go perft 6'+'\r\n');