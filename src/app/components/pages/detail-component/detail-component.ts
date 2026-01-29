import { Component, inject, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpellService } from '../../../services/spell-service/spell-service';
import { SpellDetail } from '../../../model/spell-detail';

@Component({
  selector: 'app-detail-component',
  imports: [],
  templateUrl: './detail-component.html',
  styleUrl: './detail-component.scss',
})
export class DetailComponent {
   route = inject(ActivatedRoute);
   spellServ = inject(SpellService);
   spell: WritableSignal<SpellDetail | null> = signal(null);

   constructor(){
    const leo = this.route.snapshot.params['leonardo'];   //leo è il mio index  (vedi app.routes.ts)
    this.spellServ.getSpellByIndex(leo).then(data => this.spell.set(data));
   }
}
