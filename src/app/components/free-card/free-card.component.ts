import { FreeCardService } from './../../services/free-card.service';
import { FreeCard } from './../../services/free-card';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-free-card',
  templateUrl: './free-card.component.html',
  styleUrls: ['./free-card.component.css']
})
export class FreeCardComponent implements OnInit {

  public freeCards : FreeCard[] = [];
  
  constructor(private freeCardService : FreeCardService) { }

  ngOnInit(): void {
    this.getFreeCard();
  }

  public getFreeCard() : void {
    this.freeCardService.getFreeCard().subscribe (
        (response: FreeCard[]) => {
          this.freeCards = response;
        },

        (error: HttpErrorResponse)=> {
            alert(error.message);
            
        }
        );
  }

}
