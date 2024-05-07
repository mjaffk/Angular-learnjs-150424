import {NgModule} from '@angular/core';
import {CardModule} from './card/card.module';
import {ProductsListComponent} from './products-list.component';

@NgModule({
    declarations: [ProductsListComponent],
    exports: [ProductsListComponent],
    imports: [CardModule],
})
export class ProductsListModule {}
