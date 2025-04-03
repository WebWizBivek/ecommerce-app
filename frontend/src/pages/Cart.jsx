import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";

export default function Cart() {
  const [quantity, setQuantity] = useState(1);
  const price = 39.99;
  const freeShippingThreshold = 50;
  const remainingAmount = freeShippingThreshold - price * quantity;

  return (
    <div>
      <Header />
      <div className="container mx-auto p-6 bg-gradient-to-br from-gray-100 to-gray-300 min-h-screen">
        <h2 className="text-4xl font-extrabold mb-6 text-center text-gray-800 drop-shadow-lg">
          🛒 My Cart
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <Card className="lg:col-span-2 p-6 shadow-xl bg-white rounded-2xl transform transition duration-500 hover:scale-105">
            <div className="flex gap-6 border-b pb-4">
              <img
                src="https://static.c.realme.com/IN/wm-thread/259862300924085134.jpg"
                alt="Plaid Shirt & Buttoned Skirt Set"
                className="w-28 h-28 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900">
                  Plaid Shirt & Buttoned Skirt Set
                </h3>
                <p className="text-sm text-gray-600">
                  Color: Olive/Multi | Size: S
                </p>
                <p className="text-sm text-green-600 font-medium">✔ In Stock</p>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-xl font-bold text-gray-900">
                  ${price.toFixed(2)}
                </span>
                <Select onValueChange={(value) => setQuantity(Number(value))}>
                  <SelectTrigger className="w-24 border border-gray-300 rounded-md">
                    <SelectValue placeholder="Qty" />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5].map((q) => (
                      <SelectItem key={q} value={q.toString()}>
                        {q}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="mt-4 flex gap-4 text-sm text-gray-700 justify-between">
              <Button variant="ghost" className="hover:text-blue-600">
                ✏️ Edit
              </Button>
              <Button
                variant="ghost"
                className="text-red-500 hover:text-red-700"
              >
                🗑 Remove
              </Button>
              <Button variant="ghost" className="hover:text-pink-600">
                💖 Move to Wishlist
              </Button>
              <Button variant="ghost" className="hover:text-yellow-600">
                📌 Save for Later
              </Button>
            </div>
          </Card>

          {/* Order Summary */}
          <Card className="p-6 shadow-xl bg-white rounded-2xl transform transition duration-500 hover:scale-105">
            <h3 className="text-xl font-bold mb-3 text-gray-900">
              Order Summary
            </h3>
            <div className="flex justify-between text-sm text-gray-700">
              <span>Subtotal</span>
              <span>${(price * quantity).toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-700 mt-2">
              <span>Shipping Cost</span>
              <span>TBD</span>
            </div>
            <div className="flex justify-between text-sm text-gray-700 mt-2">
              <span>Discount</span>
              <span>-$0</span>
            </div>
            <div className="flex justify-between font-bold text-lg mt-3 text-gray-900">
              <span>Estimated Total</span>
              <span>${(price * quantity).toFixed(2)}</span>
            </div>
            {remainingAmount > 0 && (
              <p className="text-xs text-red-500 mt-2">
                🚚 You're{" "}
                <span className="font-bold">${remainingAmount.toFixed(2)}</span>{" "}
                away from free shipping!
              </p>
            )}
            <Button className="w-full mt-4 bg-yellow-500 hover:bg-yellow-600 text-lg font-bold py-3 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
              🛍 Checkout
            </Button>
          </Card>
        </div>

        {/* Promo Code */}
        <div className="mt-8 max-w-md mx-auto">
          <Label className="block text-sm font-bold text-gray-700">
            🎟 Enter Promo Code
          </Label>
          <div className="flex gap-2 mt-2">
            <Input
              placeholder="Promo Code"
              className="flex-1 border-gray-300 rounded-lg shadow-sm"
            />
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-lg shadow-lg">
              Apply
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
