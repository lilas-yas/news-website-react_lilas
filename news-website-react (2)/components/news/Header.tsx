"use client";

import React from "react"

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { categories } from "@/lib/data/articles";
import {
  Search,
  Menu,
  X,
  User,
  ChevronDown,
} from "lucide-react";

export function Header() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setSearchOpen(false);
    }
  };

  const categoryLabels: Record<string, string> = {
    politics: "Politics",
    economy: "Economy",
    sports: "Sports",
    tech: "Technology",
    world: "World",
    entertainment: "Entertainment",
    science: "Science",
    health: "Health",
    business: "Business",
    opinion: "Opinion",
  };

  return (
    <header className="sticky top-0 z-50 bg-background border-b">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">N</span>
            </div>
            <span className="text-xl font-bold hidden sm:block">NewsDaily</span>
          </Link>

          {/* Desktop Search */}
          <form
            onSubmit={handleSearch}
            className="hidden md:flex items-center flex-1 max-w-md mx-8"
          >
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4"
              />
            </div>
          </form>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/subscribe">
              <Button variant="outline" size="sm">
                Subscribe
              </Button>
            </Link>
            <Link href="/account">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Button>
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        {searchOpen && (
          <form onSubmit={handleSearch} className="md:hidden pb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4"
                autoFocus
              />
            </div>
          </form>
        )}

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 py-2 overflow-x-auto">
          {categories.map((category) => (
            <Link
              key={category}
              href={`/category/${category}`}
              className="px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors whitespace-nowrap"
            >
              {categoryLabels[category]}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t py-4">
            <nav className="grid grid-cols-2 gap-2 mb-4">
              {categories.map((category) => (
                <Link
                  key={category}
                  href={`/category/${category}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
                >
                  {categoryLabels[category]}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-2 pt-4 border-t">
              <Link href="/subscribe" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full bg-transparent">
                  Subscribe
                </Button>
              </Link>
              <Link href="/account" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start">
                  <User className="h-4 w-4 mr-2" />
                  Account
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
