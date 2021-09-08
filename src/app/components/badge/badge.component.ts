import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BadgeService } from './../../services/badge.service';
import { Component, OnInit } from '@angular/core';
import { Badge } from 'src/app/services/badge';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css']
})

export class BadgeComponent implements OnInit {
  public badges: Badge[] = [];
  deleteBadge!: Badge;

  constructor(private badgeService: BadgeService) { }

  ngOnInit(): void {
    this.getBadges();
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

  public onAddBadge(addForm:NgForm): void {
    
    this.badgeService.addBadge(addForm.value).subscribe(
      (response: Badge) => {
        console.log(response);
        this.getBadges();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      },
    );
  }



  public onOpenModal(badge: Badge, mode : string) : void{
      const container = document.getElementById('main-container');
      const button = document.createElement('button');
      button.type = 'button';
      button.style.display = 'none';
      button.setAttribute('data-toggle', 'modal');

      if(mode === 'update') {
        button.setAttribute('data-target', '#updateBadgeModal');
      }

      if(mode === 'delete') {
        this.deleteBadge = badge;
        button.setAttribute('data-target', '#deleteBadgeModal');
      }

      container?.appendChild(button);
      button.click();
  } 

}

