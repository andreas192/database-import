export class CliOperator {
    operator: string;

    constructor(type: string) {
        switch(type) {
            case 'export': 
                this.operator = " > ";
                break;
            case 'import': 
                this.operator = " < ";
                break;
            case 'pipe': 
                this.operator = " | ";
                break;
        }
    }
}