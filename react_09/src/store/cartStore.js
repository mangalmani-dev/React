import {create} from "zustand"

export const useCartStore= create((set)=>({
    cart :[],

    addToCart:(item)=>
        set((state)=>({
             cart :[...state.cart,item]
        })),

        removeFromCart:(item)=>
            set((id)=>({
                cart:state.cart.filter((item)=>item.id!==id)
            })),

       clearCart: () => 
        set(() => ({ cart: [] })),

}))