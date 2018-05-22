// 3rd Party Libraries
import childProcess from "child_process";
import fs from "fs";
import { ImportDb } from "./ImportDb";
import { CliCommandInterface } from "./CliCommandInterface";

// Own Libraries

// export class ExecuteCli {
//     command: CliCommandInterface;

//     constructor() {
//         this.command = new ImportDb({});
//     }

//     execute() {
//         let outputFile = fs.createWriteStream("/home/ricky/Projects/database-import/dumps/blabla.sql")
//         let mysqldumpProcess = childProcess.spawn("mysqldump", cliOptions);

//         mysqldumpProcess.stderr.on("data", (data) => {
//             console.log("err:", data);
//         });

//         mysqldumpProcess.stdout.pipe(outputFile);

//         mysqldumpProcess.on("close", () => {
//             process.exit();
//         });
//     }
// }