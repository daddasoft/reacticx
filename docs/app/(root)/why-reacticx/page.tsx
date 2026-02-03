"use client";

import { motion } from "framer-motion";
import { Header } from "@/docs-components/components/header/header";
import { Footer } from "@/docs-components/components/footer";
import localFont from "next/font/local";
import Link from "next/link";
import {
  Copy,
  Smartphone,
  Zap,
  Sparkles,
  Palette,
  FileCode,
  ArrowLeft,
  Check,
  Github,
} from "lucide-react";

const satoshi = localFont({
  src: [
    {
      path: "../../../fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
  fallback: ["system-ui", "sans-serif"],
});

const features = [
  {
    title: "Copy & Paste",
    description:
      "No npm install, no complex setup. Simply copy the component code and paste it into your project. You own the code completely.",
    icon: <Copy className="size-6" />,
    benefits: [
      "Zero dependencies to manage",
      "Full code ownership",
      "Easy customization",
      "No version conflicts",
    ],
  },
  {
    title: "Expo Ready",
    description:
      "Every component is built and tested with Expo SDK. Works seamlessly with Expo Go, development builds, and EAS.",
    icon: <Smartphone className="size-6" />,
    benefits: [
      "Expo SDK 52+ support",
      "Works with Expo Go",
      "EAS Build compatible",
      "Expo Router ready",
    ],
  },
  {
    title: "Reanimated 4",
    description:
      "Buttery smooth 60fps animations powered by React Native Reanimated. All animations run on the UI thread for maximum performance.",
    icon: <Zap className="size-6" />,
    benefits: [
      "60fps animations",
      "UI thread execution",
      "Gesture-driven interactions",
      "Shared element transitions",
    ],
  },
  {
    title: "Skia Graphics",
    description:
      "Beautiful graphics, gradients, shaders, and visual effects powered by React Native Skia. Create stunning visuals with ease.",
    icon: <Sparkles className="size-6" />,
    benefits: [
      "Custom shaders",
      "Beautiful gradients",
      "Image filters",
      "Path animations",
    ],
  },
  {
    title: "Fully Customizable",
    description:
      "Every component is designed with customization in mind. Change colors, sizes, animations, and behavior to match your brand.",
    icon: <Palette className="size-6" />,
    benefits: [
      "Some Themeable components",
      "Style overrides",
      "Animation config",
      "Behavior props",
    ],
  },
  {
    title: "TypeScript First",
    description:
      "Complete TypeScript support with full type definitions. Get excellent autocomplete, type checking, and documentation in your IDE.",
    icon: <FileCode className="size-6" />,
    benefits: [
      "Full type coverage",
      "IDE autocomplete",
      "Type-safe props",
      "Better refactoring",
    ],
  },
];

export default function WhyReactixPage() {
  return (
    <div
      className={`${satoshi.variable} relative min-h-screen w-full bg-black`}
    >
      {/* Background gradient */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-black to-black" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-white/[0.02] rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="max-w-4xl mx-auto">
            {/* Back Link */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-8"
              >
                <ArrowLeft className="size-4" />
                <span className="font-satoshi text-sm">Back to Home</span>
              </Link>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-satoshi text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Why{" "}
              <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
                Reacticx
              </span>
              ?
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-satoshi text-lg sm:text-xl text-neutral-400 max-w-2xl leading-relaxed"
            >
              Reacticx is a collection of beautiful, production-ready React
              Native components. Built with modern tools and designed for
              performance.
            </motion.p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  className="group relative bg-neutral-950 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="bg-white/10 text-white mb-6 flex h-14 w-14 items-center justify-center rounded-xl">
                    {feature.icon}
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-satoshi text-2xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="font-satoshi text-neutral-400 mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Benefits */}
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-center gap-3 text-sm text-neutral-300"
                      >
                        <Check className="size-4 text-green-500 flex-shrink-0" />
                        <span className="font-satoshi">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-white/10 rounded-2xl p-8 md:p-12 text-center"
            >
              <h2 className="font-satoshi text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to get started?
              </h2>
              <p className="font-satoshi text-neutral-400 mb-8 max-w-lg mx-auto">
                Browse our collection of 60+ components and start building
                beautiful React Native apps today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/docs"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-satoshi font-medium rounded-lg hover:bg-white/90 transition-colors"
                >
                  View Components
                </Link>
                <a
                  href="https://github.com/rit3zh/reacticx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-satoshi font-medium rounded-lg hover:bg-white/5 transition-colors"
                >
                  <Github className="size-5" />
                  Star on GitHub
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        :global(.font-satoshi) {
          font-family:
            var(--font-satoshi),
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            Roboto,
            sans-serif;
        }
      `}</style>
    </div>
  );
}
