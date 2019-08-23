import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-type-patrimoines',
  templateUrl: './type-patrimoines.component.html',
  styleUrls: ['./type-patrimoines.component.css']
})
export class TypePatrimoinesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
  }
}
