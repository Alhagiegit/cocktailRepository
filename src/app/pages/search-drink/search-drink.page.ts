import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Drink } from 'src/app/model/drink';
import { CocktailService } from 'src/app/services/cocktail.service';

@Component({
  selector: 'app-search-drink',
  templateUrl: './search-drink.page.html',
  styleUrls: ['./search-drink.page.scss'],
})
export class SearchDrinkPage implements OnInit {

  responce:any;
 drinks:Drink[]=[];
 click=false
  constructor(private route:ActivatedRoute, private router:Router,  private drinkService : CocktailService) { }
  ngOnInit(){
    this.drinkService.drinks.subscribe(data => {
      this.drinks = data;
      console.log('data', this.drinks);
      
    });
  }
  onHeartClick(){
   this.click?this.click=false:this.click=true
  }
}
