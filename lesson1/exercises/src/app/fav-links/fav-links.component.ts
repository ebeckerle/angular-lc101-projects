import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks = ['https://en.wikipedia.org/wiki/Fox', 'https://en.wikipedia.org/wiki/Red_fox', 'https://i.redd.it/muleq5sv80k81.jpg']
  favMeme = 'https://i.redd.it/muleq5sv80k81.jpg';
  constructor() { }

  ngOnInit() {
  }

}
