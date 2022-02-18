import { Component, OnInit } from '@angular/core';
import { Drink, drinksResponce } from 'src/app/model/drink';
import { CocktailService } from 'src/app/services/cocktail.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  drinks!: drinksResponce;
  constructor(private likeService:CocktailService, private cocktailService:CocktailService) { }
   likeDrinks:Drink[]=[]
  async ngOnInit() {
      this.likeDrinks =  (await this.likeService.getDrinksWithLike(1))
      console.log(this.likeDrinks.length)
  }


  onHeartClick =async  (id: string) => {
    this.cocktailService.addLike(id, 1).subscribe( async (data: any) => {
      console.log('data', data);
      this.likeDrinks =  await this.likeService.getDrinksWithLike(1)
      // data.message === 'success'
    });

  };

}
