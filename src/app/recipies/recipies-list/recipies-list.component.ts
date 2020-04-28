import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipies-list',
  templateUrl: './recipies-list.component.html',
  styleUrls: ['./recipies-list.component.scss']
})
export class RecipiesListComponent implements OnInit {
  public recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Test Description', 'https://c1.wallpaperflare.com/preview/992/474/505/food-meat-recipe-power.jpg'),
    new Recipe('Test Recipe', 'Test Description', 'https://c1.wallpaperflare.com/preview/992/474/505/food-meat-recipe-power.jpg'),
    new Recipe('Test Recipe', 'Test Description', 'https://c1.wallpaperflare.com/preview/992/474/505/food-meat-recipe-power.jpg'),
    new Recipe('Test Recipe', 'Test Description', 'https://c1.wallpaperflare.com/preview/992/474/505/food-meat-recipe-power.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }
}
