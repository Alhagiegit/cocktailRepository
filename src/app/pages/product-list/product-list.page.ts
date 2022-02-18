import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Drink, drinksResponce } from 'src/app/model/drink';
import { CocktailService } from 'src/app/services/cocktail.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})

export class ProductListPage implements OnInit {
  filteredString: string = '';
  drinks!: drinksResponce;
  currentPage: number = 1;
  pageSize = 20;
  dataSource: drinksResponce[] = [];
  color!: number;
  drink: Drink = {
    idDrink: '',
    strDrink: '',
    strTags: '',
    strVideo: '',
    strCategory: '',
    strIBA: '',
    strAlcoholic: '',
    strGlass: '',
    strInstructions: '',
    strInstructionsIT: '',
    strDrinkThumb: '',
    strIngredient1: '',
    strIngredient2: '',
    strIngredient3: '',
    strIngredient4: '',
    strIngredient5: '',
    strIngredient6: '',
    strMeasure1: '',
    strMeasure2: '',
    strMeasure3: '',
    strMeasure4: '',
    strMeasure5: '',
    strMeasure6: '',
    strImageSource: '',
    strImageAttribution: '',
    strCreativeCommonsConfirmed: '',
    dateModified: '',
  };
  isOk: string;
  index: number;
  count = 0;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cocktailServices: CocktailService
  ) {}

  ngOnInit() {
    this.getDrinks();
  }

  async getDrinks() {
    const drinks = await this.cocktailServices.getAllDrinks();
    this.drinks = drinks;
    console.log(this.drinks);
  }

  onClickHomeImage = () => {
    this.router.navigate(['/product-details'], {
      relativeTo: this.route,
      queryParamsHandling: 'preserve',
    });
  };
  onHeartClick = (id: string, like: number, i: number) => {
    this.cocktailServices.addLike(id, like).subscribe((data: any) => {
      console.log('data', data);
      data.message === 'success' &&
        (this.drinks[i].is_like = this.drinks[i].is_like === 0 ? 1 : 0);
    });
  };
}
