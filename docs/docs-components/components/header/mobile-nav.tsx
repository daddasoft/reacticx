import { cn } from "@/lib/utils";
import { MenuIcon, XIcon } from "lucide-react";
import React from "react";
import { navLinks, socialLinks } from "./header";
import { buttonVariants } from "../button";
import { createPortal } from "react-dom";
import Link from "next/link";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  // Check if component is mounted (client-side only)
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // 🚫 Disable body scroll when open
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    // Cleanup on unmount too
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button
        type="button"
        aria-controls="mobile-menu"
        aria-expanded={open}
        aria-label="Toggle menu"
        className="md:hidden cursor-pointer p-2 hover:bg-white/10 rounded-md transition-colors text-white"
        onClick={() => setOpen(!open)}
      >
        {open ? <XIcon className="size-5" /> : <MenuIcon className="size-5" />}
      </button>

      {mounted &&
        open &&
        createPortal(
          <div
            className={cn(
              "bg-black/95 backdrop-blur-sm supports-backdrop-filter:bg-black/50",
              "fixed top-14 right-0 bottom-0 left-0 z-40 flex flex-col overflow-hidden border-t border-white/10 md:hidden",
            )}
            id="mobile-menu"
          >
            <div
              className={cn(
                "data-[slot=open]:zoom-in-97 ease-out data-[slot=open]:animate-in",
                "size-full p-4 flex flex-col",
              )}
              data-slot={open ? "open" : "closed"}
            >
              {/* Navigation Links */}
              <div className="grid gap-y-1">
                {navLinks.map((link) => (
                  <Link
                    className="justify-start gap-3 h-12 text-base inline-flex items-center px-4 rounded-md text-white hover:bg-white/10 transition-colors"
                    href={link.href}
                    key={link.label}
                    onClick={handleClose}
                  >
                    <link.icon className="h-5 w-5 opacity-70" />
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Divider */}
              <div className="my-4 h-px bg-white/10" />

              {/* Social Links */}
              <div className="grid gap-y-1">
                <p className="px-4 py-2 text-xs font-medium text-white/50 uppercase tracking-wider">
                  Connect
                </p>
                {socialLinks.map((link) => (
                  <a
                    className="justify-start gap-3 h-12 text-base inline-flex items-center px-4 rounded-md text-white hover:bg-white/10 transition-colors"
                    href={link.href}
                    key={link.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleClose}
                  >
                    <link.icon className="h-5 w-5 opacity-70" />
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Bottom spacing / optional CTA area */}
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
