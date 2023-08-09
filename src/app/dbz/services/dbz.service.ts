import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {
  constructor() { }

  public characters: Character[] = [
    {
    id: uuid(),
    name:'Krillin',
    power:1000
    },
    {
      id: uuid(),
      name:'Goku',
      power:9000
    },
    {
      id: uuid(),
      name:'Vegeta',
      power:8000
    }];

    addCharacter( character: Character ):void{
    //2. Usando desestructuración
    //onNewCharacter( { name, power }: Character ):void{

      //adiciono el uuid a lo que me llega
      // Esta es una manera si usar desestructuración
      // const newCharacter: Character = {
      //   id: uuid(),
      //   name: character.name,
      //   power: character.power
      // }
      //2. Usando desestructuración
      // const newCharacter: Character = {
      //   id: uuid(),
      //   name,
      //   power
      // }
      //3. La forma más rapida usando el spread del objeto ...objeto
      const newCharacter: Character = { id:uuid(), ...character };

      this.characters.push(newCharacter);
      console.log('MainPage',newCharacter);

    }

    //onDeleteCharacter( index: number ):void{
    onDeleteCharacterById( id: string ):void{
      //const deletedCharacter = this.characters.splice(index,1);
      //console.log('Deleted',deletedCharacter);
      // characters are overwritten
      this.characters = this.characters.filter( character => character.id !== id );
    }

}
