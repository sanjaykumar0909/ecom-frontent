
export type Product= {
    id: number
    title: string  | undefined
    price:string  | undefined
    category: string | undefined
    description: string | undefined
    image:string | undefined
  }
export type Products= Product[]

export type ShoppingCartType= {
  // totQuantity: number
  totPrice: number
  setTotPrice: React.Dispatch<React.SetStateAction<number>>// setState function type
  cartItems: CartItem[]
  isOpen: boolean
  getItemQuantity: (id:number) => number;
  incQuantity: (id: number)=> void;
  decQuantity: (id: number)=> void;
  removeItem: (id: number) => void;
  setCart: React.Dispatch<React.SetStateAction<boolean>>;
}

export type CartItem= {
  id: number
  quantity: number
}

