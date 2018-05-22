export interface CliParamsInterface {
    /**
    * parameter name e.g --help, -u 
    */
    key: string;
    
    /**
    * parameter value e.g user's name
    */
    val: string;
    
    /**
    * option to output -h if true and --host if false
    */
    isShort: boolean;
};