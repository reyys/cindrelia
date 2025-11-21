"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Lock, Mail, User } from "lucide-react";

const ViewAccount = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-20 px-6 flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#Cfb53b] rounded-full blur-[150px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-900 rounded-full blur-[150px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white/5 backdrop-blur-lg border border-white/10 p-8 md:p-12 relative z-10"
      >
        <div className="text-center mb-10">
          <h1 className="text-4xl font-serif text-[#F5F5F0] mb-2">
            {isLogin ? "Welcome Back" : "Join the Club"}
          </h1>
          <p className="text-gray-400 text-sm">
            {isLogin
              ? "Sign in to access your curated wardrobe"
              : "Create an account for exclusive access"}
          </p>
        </div>

        <form className="space-y-6">
          {!isLogin && (
            <div className="relative group">
              <User className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-[#Cfb53b] transition-colors" />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-transparent border-b border-white/20 py-3 pl-8 text-[#F5F5F0] placeholder:text-gray-600 focus:border-[#Cfb53b] outline-none transition-colors"
              />
            </div>
          )}
          <div className="relative group">
            <Mail className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-[#Cfb53b] transition-colors" />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-transparent border-b border-white/20 py-3 pl-8 text-[#F5F5F0] placeholder:text-gray-600 focus:border-[#Cfb53b] outline-none transition-colors"
            />
          </div>
          <div className="relative group">
            <Lock className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-[#Cfb53b] transition-colors" />
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-transparent border-b border-white/20 py-3 pl-8 text-[#F5F5F0] placeholder:text-gray-600 focus:border-[#Cfb53b] outline-none transition-colors"
            />
          </div>

          <button className="w-full bg-[#F5F5F0] text-black py-4 mt-4 uppercase tracking-widest text-xs hover:bg-[#Cfb53b] transition-colors interactive font-bold">
            {isLogin ? "Sign In" : "Create Account"}
          </button>
        </form>

        <div className="mt-8 text-center text-xs text-gray-400 uppercase tracking-wider">
          {isLogin ? "Don't have an account? " : "Already a member? "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-[#Cfb53b] border-b border-[#Cfb53b] pb-0.5 hover:text-white hover:border-white transition-colors interactive"
          >
            {isLogin ? "Register" : "Log In"}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ViewAccount;
