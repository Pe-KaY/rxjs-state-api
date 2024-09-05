import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Input } from '@angular/core';
import { CartserviceService } from '../services/cart-service/cartservice.service';
import { Observable } from 'rxjs';
import { Item } from '../../assets/item-interface';
@Component({
  selector: 'app-shop-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shop-items.component.html',
  styleUrl: './shop-items.component.css',
})
export class ShopItemsComponent {
  @Input('item') item: any;

  isIncart = false;

  currentCard$!: Observable<Item[]>;

  constructor(public cartService: CartserviceService) {}

  ngOnInit() {
    this.checkItemInCart();
  }

  checkItemInCart() {
    this.cartService.getCart().subscribe((data) => {
      this.isIncart = data.some((item) => item.name === this.item.name);
    });
  }

  addorRemoveFromCart() {
    if (this.isIncart) {
      console.log('it removed');

      this.removeFromCart();
    } else {
      this.addToCart();
    }
  }

  addToCart() {
    if (this.isIncart) return;
    this.cartService.addToCart(this.item);
  }

  removeFromCart() {
    this.cartService.removeFromCart(this.item.name);
  }
}
