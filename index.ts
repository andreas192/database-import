import * as child from "child_process";

// child.exec('ls -lh', (err, stdout, stderr) => {
//     console.log(stdout);
// });

// console.log(
//     'test'
// );
import { Container } from './src/Framework/Container';

let container = new Container();

container.executeCliCommand();