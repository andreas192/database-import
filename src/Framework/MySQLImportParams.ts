import { CliParamsInterface } from "./CliParamsInterface";

export class MySQLImportParams implements CliParamsInterface {
    key: string;
    val: string;
    isShort: boolean;

    constructor (params: any) {
        this.key = params.key;
        this.val = params.val;
        this.isShort = params.isShort;
    }

    getMySQLImportParams = (): CliParamsInterface => {
        return this;
    }
}