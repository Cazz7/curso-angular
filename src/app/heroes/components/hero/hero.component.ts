import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  changeHero():void{
    //Changes the name of the hero
    this.name = 'Hulk';
  }

  changeAge():void{
    // Changes the age of the hero
    this.age = 44;
  }

  resetForm():void{
    this.name = 'ironman';
    this.age = 45;
  }
}
