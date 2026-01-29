import { Injectable } from '@angular/core';
import { Spell } from '../../model/spell';
import { SpellDetail } from '../../model/spell-detail';

@Injectable({
  providedIn: 'root',
})

export class SpellService {
  spellsURL = 'https://www.dnd5eapi.co/api/2014/spells';  //non è necessario usare const perchè è una variabile usata solo all'interno della classe
  //spellsURL è una proprietà della classe SpellService che contiene l'URL dell'API da cui recuperare gli incantesimi
  //invece se avessimo usato const spellsURL = 'https://www.dnd5eapi.co/api/2014/spells'; fuori dalla classe, sarebbe stata una costante globale
  
  getAllSpells(): Promise<Spell[]> {  //metodo che restituisce una Promise di tipo Spell
   return fetch(this.spellsURL)
    .then(resp => resp.json())
    .then(spells => spells.results);
  }

  getSpellByIndex(index: string): Promise<SpellDetail>{
    const selectedSpellUrl = this.spellsURL + '/' + index;   //il mio index è leo (vedi detail-component.ts)
    return fetch (selectedSpellUrl)
    .then(resp => resp.json())   
  }
  
}
