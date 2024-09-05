import { Component, Input } from '@angular/core';
import { Item } from '../../assets/item-interface';
import { CommonModule } from '@angular/common';
import { CartserviceService } from '../services/cart-service/cartservice.service';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css',
})
export class CartItemComponent {
  @Input('item') item!: Item;

  constructor(private cartService: CartserviceService) {}

  
}
