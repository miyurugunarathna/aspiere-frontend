import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Payment } from 'src/app/models/payment/payment';
import { PaymentService } from 'src/app/services/payment/payment.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-view-payment',
  templateUrl: './view-payment.component.html',
  styleUrls: ['./view-payment.component.css']
})
export class ViewPaymentComponent implements OnInit {

  private payID: any;
  public payment: any = new Payment;

  constructor(private paymentService: PaymentService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getPayDetails();
  }

  public getPayDetails(): void {
    this.route.queryParams.subscribe(
      (param: any) => {
        this.payID = param.order_id;
        console.log(this.payID);
        if(this.payID != null) {
          this.paymentService.getPayment(this.payID).subscribe(
            (response: Payment) => {
              if(response == null) {
                this.router.navigate([`app/payment`]);
              }
              this.payment = response;
              console.log(response);
            }
          )
        }
        else {
          this.router.navigate([`app/payment`]);
        }
      }
    )
  }

  public onlyDate(date: any): string {
    console.log(new Date(new Date(date).getFullYear(), new Date(date).getMonth(), new Date(date).getDate()));
    return new Date(date).getFullYear() + '-' + new Date(date).getMonth() + '-' + new Date(date).getDate();
  }

  public printInvoice(divID: string): void {
    let invoiceDiv, popupWin, head, html;
    head = document.getElementsByTagName('head');
    invoiceDiv = document.getElementById(divID)?.innerHTML;
    html = '<html>\n<head>\n';
    html += head[0].innerHTML;
    html += '</head>\n</body>\n';
    html += invoiceDiv;
    html += '</body>\n</html>'
    popupWin = window.open('', '_blank', 'height=100%, width=auto');
    popupWin?.document.open();
    popupWin?.document.write(html);
    popupWin?.document.close();
    popupWin?.window.print();
  }

  public savePdf(divID: string): void {
    let invoiceDiv: any;
    invoiceDiv = document.getElementById(divID);

    html2canvas(invoiceDiv).then(canvas => {
      let fileWidth = 188;
      let fileHeight = canvas.height * fileWidth / canvas.width;
      const fileUrl = canvas.toDataURL('image/png');
      let pdf = new jsPDF('p', 'mm', 'a4');
      let position = 10;
      pdf.addImage(fileUrl, 'png', 10, position, fileWidth, fileHeight);
      pdf.save('invoice.pdf');
    })
  }

}
