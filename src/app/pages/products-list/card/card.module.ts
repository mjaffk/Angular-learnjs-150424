import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {CardComponent} from './card.component';

@NgModule({
    declarations: [CardComponent],
    exports: [CardComponent],
    imports: [MatCardModule],
})
export class CardModule {}
