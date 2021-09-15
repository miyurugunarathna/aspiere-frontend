export class Payment {
    paymentID: string;
    issuedDate: Date;
    statusMessage: string;
    method: string;
    amount: number;
    currency: string;
    statusCode: number;
    description: string;
    payerName: string;
    payerMobile: string;
    payerEmail: string;
    receiverName: string;
    receiverMobile: string;
    receiverEmail: string;


    constructor() {
        this.paymentID = '';
        this.issuedDate = new Date;
        this.statusMessage = '';
        this.method = '';
        this.amount = 0.0;
        this.currency = '';
        this.statusCode = 0;
        this.description = '';
        this.payerName = '';
        this.payerMobile = '';
        this.payerEmail = '';
        this.receiverName = '';
        this.receiverMobile = '';
        this.receiverEmail = '';

    }
}
