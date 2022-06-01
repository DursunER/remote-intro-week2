// Print a 20 x 30 rectangle - the rectangle should be filled with *s

// You should only need to use .repeat() and console.log() for this task :)

var line = ""
for ( let i = 0; i<20; i++) {

    line += "*".repeat(30)+"\n";
    console.log(line) 
}

