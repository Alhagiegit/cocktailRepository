import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Subject } from 'rxjs';
import { Drink, drinksResponce } from '../model/drink';
 import { environment } from 'src/environments/environment';
 const {endpoint}=environment

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  
  constructor(private HttpClient: HttpClient) { }

  drinks:Subject<Drink[]>= new Subject();

  addDrinks = (drinks: Drink[]) => {
    this.drinks.next(drinks);
  }

  getAllDrinks=(()=>this.HttpClient.get(`${endpoint}/drinks`).toPromise() as Promise<drinksResponce>);

  getSingleDrink=(id: string)=>this.HttpClient.get<Drink>(`${endpoint}/drinks/drink?idDrink=${id}`);

  addLike= (id:string, like:number) =>  this.HttpClient.post(`${endpoint}/drinks/drink/like?like=${like}&idDrink=${id}`,{})
  getDrinksWithLike= (like:number) =>  this.HttpClient.get<Drink[]>(`${endpoint}/drinks/drink/like?like=${like}`).toPromise()

  getDrinkByName=((drinkName:string)=> this.HttpClient.get<drinksResponce>(`${endpoint}/drinks/drink?strDrink=${drinkName}`))
  getDrinkByCategory=((category:string)=>this.HttpClient.get<drinksResponce>(`${endpoint}/drinks/drink?strCategory=${category}`))
  getDrinkIfAlcoholicOrNot=((isAlcoholic:string)=>this.HttpClient.get<drinksResponce>(`${endpoint}/drinks/drink?strAlcoholic=${isAlcoholic}`))
 
}
