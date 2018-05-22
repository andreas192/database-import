import * as _ from "lodash";
import * as childProcess from "child_process";

import { CliCommandInterface } from "./CliCommandInterface";
import { CliParamsInterface } from "./CliParamsInterface";

export class ImportDb implements CliCommandInterface {
    utility: string;
    params: CliParamsInterface[];

    constructor() {
        this.params = [];
    }

    setUtility(utility: string) {
        this.utility = utility;
    }

    setParams(param: CliParamsInterface) {        
        this.params.push(param);        
    }

    generateCommand(): string {
        let command = this.utility;

        _.each(this.params, (param: CliParamsInterface) => {
            param.key = param.isShort ? `-${param.key}` : `--${param.key}`;
            param.val = param.isShort ? ` ${param.val}` : `=${param.val}`;
            command += " " + param.key + param.val;
        });

        return command;
    }

    execute = (): void => {
        childProcess.exec(this.generateCommand(), (err, stdout, stderr) => {
            if (err || stderr) {
                console.log(err, stderr);
            }
            console.log(stdout);
        });
    }
}