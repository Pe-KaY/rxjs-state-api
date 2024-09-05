import { Component } from '@angular/core';
import { CartserviceService } from '../services/cart-service/cartservice.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Item } from '../../assets/item-interface';
import { CartItemComponent } from '../cart-item/cart-item.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,CartItemComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  constructor(public cartService: CartserviceService) {}

  currentCart$! : Observable<Item[]>


  ngOnInit() {
    this.currentCart$ = this.cartService.getCart()
  }

  
}
