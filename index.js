const childProcess = require("child_process");
const fs = require("fs");

const MYSQL_HOST = "localhost";
const MYSQL_USER = "root";
const MYSQL_PASSWORD = "";
const MYSQL_DATABASE = "test";
const MYSQL_TABLE = "applicant"

let input = {
    h: MYSQL_HOST,
    u: MYSQL_USER,
    password: MYSQL_PASSWORD,
    databases: MYSQL_DATABASE,
};

let output = {
    file: "/home/ricky/Projects/database-import/dumps/blabla.sql"
};

let cliOptions = Object.keys(input).reduce((cliOptions, inputKey) => {
    if (!inputKey) {
        return cliOptions.concat(" " + input[inputKey]);
    }
    if (!input[inputKey]) {
        return cliOptions;
    }
    if (inputKey == 'databases' || inputKey == 'tables') {
        return cliOptions.concat([input[inputKey]]);
    }

    return cliOptions.concat(["-" + inputKey + "", input[inputKey]]);
}, []);

let logFile = fs.createWriteStream(output.file);

let mysqldumpProcess = childProcess.spawn("mysqldump", cliOptions);

mysqldumpProcess.stdout.write("/home/ricky/Projects/database-import/dumps/blabla2.sql");

mysqldumpProcess.stderr.on("data", (data) => {
    console.log("err:", data);
});

mysqldumpProcess.stdout.on("data", (data) => {
    console.log(data);
});

mysqldumpProcess.stdout.pipe(logFile);

mysqldumpProcess.on("close", () => {
    process.exit();
});