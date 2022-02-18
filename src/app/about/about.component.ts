import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  info = {"firstName": "Bamba", "lastName": "Ndour", "phone": "+221778546502", "email": "ndourbamba18@gmail.com", "dateReleased": new Date()}

  constructor() { }

  ngOnInit(): void {
  }

}
