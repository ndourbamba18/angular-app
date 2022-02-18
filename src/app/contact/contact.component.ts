import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  title = 'All Contacts';

  info = {"firstName": "Bamba", "lastName": "Ndour", "phone": "+221778546502", "email": "ndourbamba18@gmail.com", "dateReleased": new Date()}

  contacts = [
    {"firstName": "Ndour", "lastName": "Codeur", "phone": "+221778541204", "email": "ndourcodeur@gmail.com", "dateReleased": new Date(), "message": ""},
    {"firstName": "Bamba", "lastName": "Ndoye", "phone": "+221778754201", "email": "ndoyebamba@gmail.com", "dateReleased": new Date(), "message": ""},
    {"firstName": "Coumba", "lastName": "Diouf", "phone": "+221769854201", "email": "dioufcoumba@edu.io", "dateReleased": new Date(), "message": ""},
    {"firstName": "Aminata", "lastName": "Bah", "phone": "+221778541204", "email": "bahamina@gmail.com", "dateReleased": new Date(), "message": ""},
    {"firstName": "Sally", "lastName": "Ndiaye", "phone": "+221778540021", "email": "ndiayesally@gmail.com", "dateReleased": new Date(), "message": ""}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
