"use client";

import React, { useState } from "react";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { DumbbellIcon, HomeIcon, UserIcon, ZapIcon } from "lucide-react";
import { Button } from "./ui/button";
import Hamburger from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const { isSignedIn } = useUser();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-md border-b border-border py-3">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="p-1 bg-primary/10 rounded">
              <ZapIcon className="w-4 h-4 text-primary" />
            </div>
            <span className="text-xl font-bold font-mono">
              Smart<span className="text-primary">Flex</span>.ai
            </span>
          </Link>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <Hamburger
              toggled={isMobileMenuOpen}
              toggle={setIsMobileMenuOpen}
            />
          </div>

          {/* Navigation for desktop */}
          <nav className="hidden md:flex items-center gap-5">
            {isSignedIn ? (
              <>
                <Link
                  href="/"
                  className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
                >
                  <HomeIcon size={16} />
                  <span>Home</span>
                </Link>

                <Link
                  href="/generate-program"
                  className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
                >
                  <DumbbellIcon size={16} />
                  <span>Generate</span>
                </Link>

                <Link
                  href="/profile"
                  className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
                >
                  <UserIcon size={16} />
                  <span>Profile</span>
                </Link>

                <Button
                  asChild
                  variant="outline"
                  className="ml-2 border-primary/50 text-primary hover:text-white hover:bg-primary/10"
                >
                  <Link href="/generate-program">Get Started</Link>
                </Button>
                <UserButton />
              </>
            ) : (
              <>
                <SignInButton>
                  <Button
                    variant="outline"
                    className="border-primary/50 text-primary hover:text-white hover:bg-primary/10"
                  >
                    Sign In
                  </Button>
                </SignInButton>
                <SignUpButton>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Sign Up
                  </Button>
                </SignUpButton>
              </>
            )}
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/70 backdrop-blur-sm flex items-center justify-center md:hidden"
          >
            <nav className="flex flex-col items-center gap-6 text-lg">
              {isSignedIn ? (
                <>
                  <Link
                    href="/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-2 hover:text-primary"
                  >
                    <HomeIcon size={18} />
                    Home
                  </Link>
                  <Link
                    href="/generate-program"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-2 hover:text-primary"
                  >
                    <DumbbellIcon size={18} />
                    Generate
                  </Link>
                  <Link
                    href="/profile"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-2 hover:text-primary"
                  >
                    <UserIcon size={18} />
                    Profile
                  </Link>
                  <div className="mt-4">
                    <UserButton />
                  </div>
                </>
              ) : (
                <>
                  <SignInButton>
                    <Button
                      variant="outline"
                      className="w-full border-primary/50 text-primary hover:text-white hover:bg-primary/10"
                    >
                      Sign In
                    </Button>
                  </SignInButton>
                  <SignUpButton>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Sign Up
                    </Button>
                  </SignUpButton>
                </>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
