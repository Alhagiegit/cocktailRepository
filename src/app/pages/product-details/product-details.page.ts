import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Drink } from 'src/app/model/drink';
import { CocktailService } from 'src/app/services/cocktail.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  idDrink!: number;
  sub:any;
  name:string='';
  drink:Drink={
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
    dateModified: ''
  }
   responce!:any;
   isClick:boolean=true
   lang='en'
   id!:number
   arrow_click=false;
   constructor(private route: ActivatedRoute, private  drinkService:CocktailService, private router:Router) { }
 
    ngOnInit() {
     this.sub = this.route.params.subscribe( params => {
        this.idDrink= params['id'];
       console.log(params['id']);
       this.getDrink(this.idDrink.toString());
       
    });
   }
 
   onClickFlag=(name:string)=>{
     if(name){
       this.lang=name;
     }else{
       this.isClick=false
      }
 
      this.router.navigate(
       [], 
       {
         relativeTo: this.route,
         queryParams: { lan: this.lang },
         queryParamsHandling: 'merge'
       });
   }
 
 
   onClickArrow=( name:string)=>{
     if(name==='right'){
         let result= this.idDrink++
         let  id=result.toString()
           this.router.navigate(
             [`../${this.idDrink}`], 
             {
              relativeTo:this.route,
             });
             this.getDrink(id);
       
     }else if(name=='left' && this.idDrink>11000){
       this.id=this.idDrink;
       let result= this.idDrink--
         let  id=result.toString()
           this.router.navigate(
             [`../${this.idDrink}`], 
             {
              relativeTo:this.route,
             });
             this.getDrink(id);
     }
   }
   onClickBack=()=>{ this.router.navigate(['/product-list'],{ relativeTo: this.route})}
 
    getDrink(id: string) {
     return this.drinkService.getSingleDrink(id).subscribe(data=>{
     this.responce=JSON.parse(JSON.stringify(data))
     this.drink=this.responce[0][0];
       console.log(this.drink);
     })
    }
 
   getImage=((name:string)=> '/assets/images/ingredients/' + name + '-Medium' + '.png');

}
