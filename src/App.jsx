// src/App.jsx
// Tailwind CSS required
// public/logo.png
// public/about-logistics.png

import React from "react";
import {
  Home,
  Newspaper,
  Building2,
  PackageCheck,
  Phone,
  ArrowRight,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

export default function App() {
  const navItems = [
    { name: "首頁", href: "#home", icon: Home },
    { name: "最新消息", href: "#news", icon: Newspaper },
    { name: "關於我們", href: "#about", icon: Building2 },
    { name: "服務項目", href: "#services", icon: PackageCheck },
    { name: "聯絡我們", href: "#contact", icon: Phone },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 shrink-0">
            <img
              src="/logo.png"
              alt="尚順國際運通"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl object-contain"
            />

            <div>
              <h1 className="text-lg sm:text-2xl font-black tracking-tight text-slate-900">
                尚順國際運通
              </h1>

              <p className="hidden sm:block text-xs sm:text-sm tracking-[0.18em] text-slate-500 font-semibold">
                SUNSHINE INTERNATIONAL LOGISTICS
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const active = index === 0;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-2 px-4 py-2 rounded-2xl text-base xl:text-lg font-bold transition whitespace-nowrap ${
                    active
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-slate-800 hover:bg-blue-50 hover:text-blue-700"
                  }`}
                >
                  <Icon size={19} />
                  {item.name}
                </a>
