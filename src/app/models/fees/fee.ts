export class Fee {
    feeID: string;
    feesName: string;
    feesType: string;
    amount: number;
    frequency: number;

    constructor() {
        this.feeID = '';
        this.feesName = '';
        this.feesType = '';
        this.amount = 0.0;
        this.frequency = 0;
    }
}
