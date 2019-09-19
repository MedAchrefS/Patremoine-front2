import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrandissements',
  templateUrl: './arrandissements.component.html',
  styleUrls: ['./arrandissements.component.css']
})
export class ArrandissementsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
  }

}
