import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
declare function sendPaymentInfos(order_number: number,agency_code: string,secure_code: string,domain_name: string,url_redirection_success: string,url_redirection_failed: string,amount: number,city: string,email: string,clientFirstName: string,clientLastName: string): any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  amount: number;
  order_number: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getRoutingData();
  }

  getRoutingData() {
   this.amount = Number(this.route.snapshot.paramMap.get('amount'));
   this.order_number = Number(this.route.snapshot.paramMap.get('order_number'));

    console.log('amount', this.amount);
    console.log('order_number', this.order_number);
  }

  calltouchpay() {
  if (this.amount && this.order_number) {
    sendPaymentInfos(this.order_number,
      'TOLSN18943','VfpxTJT6peHyD5Tn7rt0DlPWjeQSWednJWUYn6Nk3hJzLl3Pk5',
      'latoile.sn',  'url_redirection_success',
      'url_redirection_failed', this.amount,
      'dakar', '','', '');
  }
  }

}
