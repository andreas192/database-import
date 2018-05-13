const childProcess = require ("child_process");
const fs = require("fs");

const MYSQL_HOST = "localhost";
const MYSQL_USER = "root";
const MYSQL_PASSWORD = "";
const MYSQL_DATABASE = "odf";
const MYSQL_TABLE = "applicant"

let input = {
    h: MYSQL_HOST,
    u: MYSQL_USER,
    password: MYSQL_PASSWORD,
    databases: MYSQL_DATABASE,
    tables: MYSQL_TABLE,
};

let output = {
    file: "/Users/andreiluculescu/blabla.sql"
};

let cliOptions = Object.keys(input).reduce((cliOptions, inputKey) => { 
    if (!inputKey) {
        return cliOptions.concat(" " + input[inputKey]);
    }
    if (!input[inputKey]) {
        return cliOptions;
    }
    if (inputKey == 'databases' || inputKey == 'tables') {
        return cliOptions.concat([ input[inputKey]]); 
    }

    return cliOptions.concat([ "-" + inputKey + "", input[inputKey]]);
}, []);



cliOptionsExec = cliOptions.concat([">", output.file]);

let startChildExecDate = new Date();
console.log("startChildExecDate: ", startChildExecDate);

let mysqldump = childProcess.exec(`mysqldump ${cliOptionsExec.join(" ")}`, (err, stdout, stderr) => {
    if (err || stderr) {
        console.log("err: ", err);
        console.log("stderr: ", stderr);
    }

    let finishChildExecDate = new Date();
    console.log("finishChildExecDate: ", finishChildExecDate);
    console.log("childExec Duration: ", finishChildExecDate - startChildExecDate);
});

let logFile = fs.createWriteStream("/Users/andreiluculescu/blabla3.sql", {
    flags: "a"
});

let blabla2Stream = fs.createWriteStream("/Users/andreiluculescu/blabla21.sql", {
    flags: "a"
});

let startChildSpawnDate = new Date();
console.log("startChildSpawnDate: ", startChildSpawnDate);

let mysqldumpProcess = childProcess.spawn(`mysqldump`, cliOptions);

mysqldump.stdin.write("/Users/andreiluculescu/blabla2.sql");
mysqldump.stdin.end();

mysqldump.stderr.on("data", (data) => {
    console.log("err:", data);
});

mysqldump.stdout.on("data", (data) => {
    console.log(data);
});
mysqldump.on("close", () => {
    console.log("close");
    process.exit();
});
mysqldump
        .stdout
        .pipe(logFile)
        .on('data', function(data) {
            console.log(data);
            blabla2Stream.write(data);
        })
        .on('finish', function() {
            let finishChildSpawnDate = new Date();
            console.log("finishChildSpawnDate: ", finishChildSpawnDate);
            console.log("childSpawn Duration: ", finishChildSpawnDate - startChildSpawnDate);
        })
        .on('error', function(err) {
            console.log(err)
        });

