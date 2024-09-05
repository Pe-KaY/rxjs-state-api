import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartserviceService } from './services/cart-service/cartservice.service';
import { ShopItemsComponent } from './shop-items/shop-items.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CartComponent, CartItemComponent,ShopItemsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'rxjs-stateManagement';

  constructor(public cartService: CartserviceService) {}

  
}
