import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patremoines',
  templateUrl: './patremoines.component.html',
  styleUrls: ['./patremoines.component.css']
})
export class PatremoinesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  
  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
  }
}
