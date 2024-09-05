import { Injectable } from '@angular/core';
import { ProductServiceService } from '../product-service/product-service.service';
import { BehaviorSubject } from 'rxjs';
import { Item } from '../../../assets/item-interface';

@Injectable({
  providedIn: 'root',
})
export class CartserviceService {
  shopList: any;
  cartItems: Item[] = [];
  cart = new BehaviorSubject<Item[]>([]);
  totalprice = 0;

  constructor(private productService: ProductServiceService) {
    this.loadProducts();
  }

  // loads the shop list from the server
  private loadProducts() {
    this.productService.fetchProducts().subscribe({
      next: (data) => {
        this.shopList = data;
      },
      error: (err) => console.log(err),
      complete: () => {
        console.log('Products successfully fetched')
      },
    });
  }

  // a behaviour Subject which returns current state of cart
  getCart() {
    return this.cart.asObservable();
  }

  // add cart
  addToCart(item: Item) {
    if(this.cartItems.find((i: any) => i.name === item.name)) return;
    this.cartItems = [...this.cartItems, item];
    this.totalPrice();
    this.cart.next(this.cartItems);
  }

  // removes item from cart
  removeFromCart(itemName: string) {
    this.cartItems = this.cartItems.filter((item: Item) => item.name !== itemName);
    this.totalPrice();
    this.cart.next(this.cartItems);
  }
  // total price
  totalPrice() {
    this.totalprice = 0;
    this.cartItems.forEach((item: any) => {
      this.totalprice += item.price;
    });
  }
}
