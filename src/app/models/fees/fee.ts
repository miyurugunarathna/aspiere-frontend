export class Fee {
    feeID: string;
    feeName: string;
    feeType: string;
    amount: number;
    frequency: number;

    constructor() {
        this.feeID = '';
        this.feeName = '';
        this.feeType = '';
        this.amount = 0.0;
        this.frequency = 0;
    }
}
