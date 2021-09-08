import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BadgeService } from './../../services/badge.service';
import { Component, OnInit } from '@angular/core';
import { Badge } from 'src/app/services/badge';
import { NgForm } from '@angular/forms';
import { Badges } from 'src/app/models/badge/badge';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css']
})

export class BadgeComponent implements OnInit {
  public badges: Badge[] = [];
  public badgeOne: Badges = new Badges;
  public addMessage: any;
  delID: any;

  constructor(private badgeService: BadgeService, private router:Router) { }

  ngOnInit(): void {
    console.log(this.badgeOne);
    this.getBadges();
  }

  public onDismiss(dismisEle: string): void {
    let inNoClose = document.getElementById(dismisEle);
    if(inNoClose?.style.display === 'block') {
      inNoClose.style.display = 'none';
      this.addMessage = '';
    }
  }

  public getBadges() : void {
    this.badgeService.getBadges().subscribe (
        (response: Badge[]) => {
          this.badges = response;
        },

        (error: HttpErrorResponse)=> {
            alert(error.message);
            
        }
        );
  }

  public getBadge(id: string): void {
    this.badgeService.getBadge(id).subscribe(
      (response: Badge) => {
        console.log(response);
        this.badgeOne = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public addBadge(addBadgeForm: NgForm): void {
    this.badgeService.addBadge(addBadgeForm.value).subscribe(
      (response: string) => {
        console.log(response);
        addBadgeForm.reset();
        let insideNotice = document.getElementById('insideNotice');
        if(insideNotice?.style.display) {
          this.addMessage = response;
          insideNotice.style.display = 'block';
        }
        this.getBadges();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  
  public updateBadge(updateBadgeForm: NgForm, id:string): void {
    this.badgeService.updateBadge(updateBadgeForm.value, id).subscribe(
      (response) => {
        console.log(response);
        updateBadgeForm.reset();
        let insideNotice = document.getElementById('insideNotice');
        if(insideNotice?.style.display) {
          this.addMessage = response;
          insideNotice.style.display = 'block';
        }
        this.badgeOne = new Badges;
        this.getBadges();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

 

  public deleteConfirm(id: string): void {
    let deleteConfirm = document.getElementById('deleteConfirm');
    if(deleteConfirm?.style.display) {
      deleteConfirm.style.display = 'block';
    }
    this.delID = id;
    console.log(deleteConfirm);
  }

  public deleteBadge(id: string): void {
    this.onDismiss('deleteConfirm');
    this.badgeService.deleteBadge(id).subscribe(
      (response: any) => {
        console.log(response);
        let insideNotice = document.getElementById('insideNotice');
        if(insideNotice?.style.display) {
          this.addMessage = response;
          insideNotice.style.display = 'block';
        }
        this.getBadges();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }


 

}

