import { ProductType } from './product-type.enum';

export class MerchProduct {
  public productName: string;
  public productDescription: string;
  public productImage: string;
  public productType: ProductType;
  public productPrice: number;
}
