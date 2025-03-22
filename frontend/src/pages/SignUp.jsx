import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Account created successfully!");
    }, 1000);
  };

  return (
    <div className="flex min-h-screen items-center justify-center  p-6">
      <Card className="w-full max-w-md shadow-2xl rounded-2xl p-8 bg-white text-gray-900">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-extrabold text-gray-800">
            Create an Account 🎉
          </CardTitle>
          <p className="text-gray-500 text-sm mt-2">
            Join us and start your journey
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <Label className="text-gray-700">Email</Label>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 border-gray-300 bg-gray-100 focus:ring-2 focus:ring-pink-500 rounded-xl p-3"
              />
            </div>
            <div>
              <Label className="text-gray-700">Password</Label>
              <Input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 border-gray-300 bg-gray-100 focus:ring-2 focus:ring-pink-500 rounded-xl p-3"
              />
            </div>
            <div>
              <Label className="text-gray-700">Confirm Password</Label>
              <Input
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-1 border-gray-300 bg-gray-100 focus:ring-2 focus:ring-pink-500 rounded-xl p-3"
              />
            </div>
            <Button
              className="w-full mt-4 bg-gradient-to-r from-pink-500 to-red-500 hover:from-red-500 hover:to-pink-500 text-white font-bold py-3 px-4 rounded-xl shadow-lg transition duration-300"
              onClick={handleSignUp}
              disabled={loading}
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </Button>
            <div className="relative flex items-center justify-center mt-4">
              <div className="absolute w-full h-[1px] bg-gray-300"></div>
              <span className="bg-white px-3 text-gray-500 text-sm">or</span>
            </div>
            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-2 border-gray-300 bg-gray-100 text-gray-800 shadow-md py-3 px-4 rounded-xl hover:bg-gray-200 transition duration-300"
            >
              <FcGoogle className="text-2xl" /> Sign up with Google
            </Button>
            <p className="text-sm text-center text-gray-600 mt-4">
              Already have an account?{" "}
              {/* <Link
                to="/signin"
                className="text-pink-500 font-medium hover:underline"
              >
                Sign in
              </Link> */}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
