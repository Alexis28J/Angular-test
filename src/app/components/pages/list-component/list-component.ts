import { Component, inject, signal, WritableSignal } from '@angular/core';
import { SpellService } from '../../../services/spell-service/spell-service';
import { Spell } from '../../../model/spell';

@Component({
  selector: 'app-list-component',
  imports: [],
  templateUrl: './list-component.html',
  styleUrl: './list-component.scss',
})
export class ListComponent {
spellServ = inject(SpellService);  //inject è una funzione di Angular che consente di ottenere un'istanza di un servizio in modo più semplice rispetto al costruttore

spells: WritableSignal<Spell[]> = signal([]);

constructor(){  //usiamo il costruttore per chiamare il metodo getAllSpells del servizio SpellService quando viene creata un'istanza di ListComponent
  this.spellServ.getAllSpells().then(data => 
    this.spells.set(data)
  );
}
}
