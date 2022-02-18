import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  public products: Product[] = [
    {"name": "Mac Pro", "price": 758.87, "imageUrl": "https://cdn.pixabay.com/photo/2014/12/27/15/40/office-581131__340.jpg", "dateReleased": new Date(), "isInStock": true, "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde explicabo nihil nostrum libero. Eveniet alias deleniti accusantium ab possimus perferendis error debitis officia, minima at pariatur iste ratione, doloribus minus?"},
    {"name": "Lenovo", "price": 587.50, "imageUrl": "https://cdn.pixabay.com/photo/2016/11/28/01/34/laptop-1864126__480.jpg", "dateReleased": new Date(), "isInStock": true, "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde explicabo nihil nostrum libero. Eveniet alias deleniti accusantium ab possimus perferendis error debitis officia, minima at pariatur iste ratione, doloribus minus?"},
    {"name": "Acer", "price": 398.50, "imageUrl": "https://cdn.pixabay.com/photo/2015/06/19/13/28/tablet-814839__340.jpg", "dateReleased": new Date(), "isInStock": false, "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde explicabo nihil nostrum libero. Eveniet alias deleniti accusantium ab possimus perferendis error debitis officia, minima at pariatur iste ratione, doloribus minus?"},
    {"name": "Ford Pickup", "price": 1500.75, "imageUrl": "https://media.istockphoto.com/photos/ford-ranger-raptor-on-a-road-in-mountain-scenery-picture-id1273204910?b=1&k=20&m=1273204910&s=170667a&w=0&h=XWbxj255TaNPu2K5tA2BJPPsxAEeXIoFiFn1F2XRAhk=", "dateReleased": new Date(), "isInStock": true, "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde explicabo nihil nostrum libero. Eveniet alias deleniti accusantium ab possimus perferendis error debitis officia, minima at pariatur iste ratione, doloribus minus?"},
    {"name": "Toyota", "price": 2000.00, "imageUrl": "https://cdn.pixabay.com/photo/2014/05/18/19/13/toyota-347288__340.jpg", "dateReleased": new Date(), "isInStock": true, "description": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde explicabo nihil nostrum libero. Eveniet alias deleniti accusantium ab possimus perferendis error debitis officia, minima at pariatur iste ratione, doloribus minus?"},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onAddProduct(product: Product){
    product.dateReleased=new Date();
    this.products.push(product);
    //console.log(this.products);
    console.log(product);
    window.alert("Your product has been added successfully!");
  }

}
