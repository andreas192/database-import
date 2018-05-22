import { CliParamsInterface } from "./CliParamsInterface";
import { CliOperator } from "./CliOperator";

export interface CliCommandInterface {
    /**
    * command line utility e.g mysqldump, mysql
    */
    utility: string;

    /**
     * parameters given to utility
     */
    params: CliParamsInterface[];
    
    /**
     * output type of the command e.g. >, <, |
     */
    outputType?: CliOperator;

    /**
     * path to the output file in which the command will fall e.g. "/home/ricky/test.txt"
     */
    outputFile?: string;

    /**
    * construct cli command given the set properties
    */
    generateCommand(): string;

};