import { Component, input } from '@angular/core';
import { Spell } from '../../../../../model/spell';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-card-component',
  imports: [RouterLink],
  templateUrl: './card-component.html',
  styleUrl: './card-component.scss',
})
export class CardComponent {

  spell = input.required<Spell>();

}
