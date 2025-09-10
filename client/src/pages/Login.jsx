import React, { useCallback, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnimatedLayout from "../components/AnimatedLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = useCallback(async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    try {
      // TODO: integrate real auth API
      await new Promise((resolve) => setTimeout(resolve, 800));
      // noop
    } finally {
      setIsSubmitting(false);
    }
  }, [isSubmitting]);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <AnimatedLayout>
        <div className="py-10 md:py-14 flex items-center justify-center min-h-[calc(100vh-8rem)]">
          <Card className="w-full max-w-lg md:max-w-xl min-h-[32rem] glassmorphism border-transparent shadow-2xl/50">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold animated-gradient bg-clip-text text-transparent">
                Welcome Back
              </CardTitle>
              <CardDescription>Sign in to your Viioom account</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={onSubmit}>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-11 rounded-lg bg-muted/20"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium">Password</label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="h-11 rounded-lg bg-muted/20"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-11 rounded-lg magnetic-btn animated-gradient text-primary-foreground font-semibold shadow-lg w-40 md:w-48 mx-auto block"
                >
                  {isSubmitting ? "Signing In..." : "Sign In"}
                </Button>
                <div className="text-center">
                  <button type="button" className="text-xs text-muted-foreground hover:underline">Forgot password?</button>
                </div>
              </form>
              <div className="mt-6 text-center text-sm text-muted-foreground">
                Don't have an account? <Link to="/create-profile" className="text-primary hover:underline">Create Profile</Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </AnimatedLayout>
      <Footer />
    </div>
  );
};

export default Login;


