import { CartItem } from './cart-item.model';

export class ShoppingCart {
  public items: CartItem[] = new Array<CartItem>();
  public deliveryOptionId: string;
  public grossTotal = 0;
  public deliveryTotal = 0;
  public itemsTotal = 0;
    cartPhones: CartItem[] = new Array<CartItem>();

    updateForm(src: ShoppingCart) {
      this.cartPhones = src.cartPhones;
      this.grossTotal = src.grossTotal;
      this.itemsTotal = src.itemsTotal;
    }



}
