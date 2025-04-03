import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Link } from "react-router";
import axios from "axios";
import Loader from "@/customCom/Loader";
export default function SignUp() {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    try {
      setLoading(true);
      const response = await axios.post(`${BASE_URL}/user/signup`, {
        name,
        email,
        password,
      });
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Loader />}

      <div className="flex min-h-screen items-center justify-center  p-6  bg-[url(https://media.istockphoto.com/id/2163983591/vector/abstract-multicolored-gradient-vector-background-design-wallpaper-template-with-geometric.jpg?s=612x612&w=0&k=20&c=wb1CT6XfnlzyhA63kMaN6LW0EM-ltGJSPSPlSW9qHos=)] bg-no-repeat bg-center bg-cover">
        <Card className="w-full max-w-md shadow-2xl rounded-2xl p-8 bg-white text-gray-900">
          <CardHeader className="text-center  flex flex-col items-center">
            <img
              src="/logo.jpg"
              alt="logo"
              className="rounded-full h-20 w-20"
            />
            <p className="text-black text-sm mt-2 font-bold">
              Pitch and Thread
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <Label className="text-gray-700">Name</Label>
                <Input
                  type="text"
                  placeholder="Enter your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 border-gray-300 bg-gray-100 focus:ring-2 focus:ring-pink-500 rounded-xl p-3"
                />
              </div>
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

              <p className="text-sm text-center text-gray-600 mt-4">
                Already have an account?{" "}
                <Link to="/signin" className="text-pink-500 font-bold">
                  Sign In
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
