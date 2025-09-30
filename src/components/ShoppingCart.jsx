import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const ShoppingCart = () => {
  const { state, removeItem, updateQuantity, clearCart, setCartOpen } = useCart();
  const { state: authState, openLogin } = useAuth();

  if (!state.isOpen) return null;

  const handleCheckout = () => {
    if (!authState.user) {
      openLogin();
      return;
    }
    console.log('Proceeding to checkout...');
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-fade-in"
        onClick={() => setCartOpen(false)}
      />

      {/* Cart Panel */}
<div className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-strong z-50 animate-slide-in-right">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-montserrat font-semibold">Shopping Cart</h2>
              {state.totalItems > 0 && (
                <Badge variant="secondary" className="bg-primary text-primary-foreground">
                  {state.totalItems}
                </Badge>
              )}
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setCartOpen(false)}
              className="hover:bg-muted"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Cart Content */}
          <div className="flex-1 overflow-y-auto">
            {state.items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                <ShoppingBag className="h-16 w-16 text-muted-foreground mb-4 animate-float" />
                <h3 className="text-lg font-medium text-foreground mb-2">Your cart is empty</h3>
                <p className="text-muted-foreground mb-6">
                  Add some fresh microgreens to get started!
                </p>
                <Button 
                  onClick={() => setCartOpen(false)}
                  className="btn-hero"
                >
                  Continue Shopping
                </Button>
              </div>
            ) : (
              <div className="p-4 space-y-4">
                {state.items.map((item) => (
                  <div key={item.product.id} className="card-gradient rounded-lg p-4 animate-scale-in">
                    <div className="flex items-start space-x-4">
                      {/* Product Image */}
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-foreground truncate">
                          {item.product.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {item.product.weight} • ${item.product.price}
                        </p>

                        {/* Quantity Controls */}
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="h-8 w-8 p-0"
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="text-sm font-medium w-8 text-center">
                              {item.quantity}
                            </span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="h-8 w-8 p-0"
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>

                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-semibold text-primary">
                              ${(item.product.price * item.quantity).toFixed(2)}
                            </span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeItem(item.product.id)}
                              className="h-8 w-8 p-0 text-destructive hover:bg-destructive/10"
                            >
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Clear Cart */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearCart}
                  className="w-full text-destructive hover:bg-destructive/10"
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Clear Cart
                </Button>
              </div>
            )}
          </div>

          {/* Footer with Total and Checkout */}
          {state.items.length > 0 && (
            <div className="border-t p-6 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Subtotal ({state.totalItems} items)</span>
                  <span>${state.totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Shipping</span>
                  <span className="text-primary">Free</span>
                </div>
                <Separator />
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span className="text-primary">${state.totalPrice.toFixed(2)}</span>
                </div>
              </div>

              <Button 
                onClick={handleCheckout}
                className="w-full btn-hero text-lg py-3"
              >
                {authState.user ? 'Proceed to Checkout' : 'Login to Checkout'}
              </Button>

              {!authState.user && (
                <p className="text-xs text-center text-muted-foreground">
                  Please log in to complete your purchase
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
