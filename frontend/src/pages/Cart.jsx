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

export default function Cart() {
  const [quantity, setQuantity] = useState(1);
  const price = 39.99;
  const freeShippingThreshold = 50;
  const remainingAmount = freeShippingThreshold - price * quantity;

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center">🛒 My Cart</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Cart Items */}
        <Card className="lg:col-span-2 p-6 shadow-lg bg-white rounded-xl">
          <div className="flex gap-6 border-b pb-4">
            <img
              src="https://static.c.realme.com/IN/wm-thread/259862300924085134.jpg"
              alt="Plaid Shirt & Buttoned Skirt Set"
              className="w-28 h-28 rounded-md object-cover"
            />
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800">
                Plaid Shirt & Buttoned Skirt Set
              </h3>
              <p className="text-sm text-gray-500">
                Color: Olive/Multi | Size: S
              </p>
              <p className="text-sm text-green-600 font-medium">✔ In Stock</p>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-lg font-semibold text-gray-800">
                ${price.toFixed(2)}
              </span>
              <Select onValueChange={(value) => setQuantity(Number(value))}>
                <SelectTrigger className="w-20">
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
          <div className="mt-4 flex gap-4 text-sm text-gray-600 justify-between">
            <Button variant="ghost">✏️ Edit</Button>
            <Button variant="ghost" className="text-red-500">
              🗑 Remove
            </Button>
            <Button variant="ghost">💖 Move to Wishlist</Button>
            <Button variant="ghost">📌 Save for Later</Button>
          </div>
        </Card>

        {/* Order Summary */}
        <Card className="p-6 shadow-lg bg-white rounded-xl">
          <h3 className="text-lg font-semibold mb-3 text-gray-800">
            Order Summary
          </h3>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Subtotal</span>
            <span>${(price * quantity).toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600 mt-2">
            <span>Shipping Cost</span>
            <span>TBD</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600 mt-2">
            <span>Discount</span>
            <span>-$0</span>
          </div>
          <div className="flex justify-between font-semibold text-lg mt-3 text-gray-800">
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
          <Button className="w-full mt-4 bg-yellow-500 hover:bg-yellow-600 text-lg font-semibold py-3 rounded-lg">
            🛍 Checkout
          </Button>
        </Card>
      </div>

      {/* Promo Code */}
      <div className="mt-8 max-w-md mx-auto">
        <Label className="block text-sm font-medium text-gray-700">
          🎟 Enter Promo Code
        </Label>
        <div className="flex gap-2 mt-2">
          <Input placeholder="Promo Code" className="flex-1" />
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg">
            Apply
          </Button>
        </div>
      </div>
    </div>
  );
}
