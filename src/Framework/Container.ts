import { CliParamsInterface } from "./CliParamsInterface";
import { ImportDb } from "./ImportDb";
import { MySQLImportParams } from "./MySQLImportParams";

export class Container {

    getCliParams = () : CliParamsInterface => {
        return new MySQLImportParams({
            key: "V",
            val: "",
            isShort: true
        });
    }

    executeCliCommand(): void {
        let command = new ImportDb();

        command.setUtility("mysql");
        command.setParams(this.getCliParams());
        
        command.execute();
    }
}