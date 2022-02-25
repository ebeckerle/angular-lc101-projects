import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'These are some of my Favorite Photos';
  image1 = 'https://www1.nyc.gov/assets/wildlifenyc/images/content/iStock-509211079.jpg';
  image2 = 'https://www.woodlandtrust.org.uk/media/1396/fox-stalking-alamy-dew6rp-age-fotostock.jpg?center=0.52,0.59909909909909909&mode=crop&heightratio=0.5622047244094488188976377953&width=647&rnd=132078467430000000http://www.shutterstock.com/gallery-265342p1.html';
  image3 = 'https://www.macleans.ca/wp-content/uploads/2020/06/FOXES-DHOPADE-JUNE29-01-766x575.jpg';

  constructor() { }

  ngOnInit() {
  }

}