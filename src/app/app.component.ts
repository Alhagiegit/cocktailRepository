import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Drink } from './model/drink';
import { CocktailService } from './services/cocktail.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  searchTerm='';
  drink:Drink[]=[];
  responce:any 
  public appPages = [
    { title: 'Home', url: '/product-list', icon: 'home' },
    { title: 'Favorites', url: '/favorites', icon: 'heart' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' }
  ];
  constructor(private cocktailService:CocktailService, private router:Router) {}

  async search(){
    if(this.searchTerm !== ''){
      this.cocktailService.getDrinkByName(this.searchTerm).subscribe(data=>{
        this.responce=data;
        this.drink=this.responce[0];
        this.cocktailService.addDrinks(this.drink);
      })
      this.router.navigate(['/search-drink'],
      {
        queryParams:{ name: this.searchTerm}
      }
        )
    }
  }
}
