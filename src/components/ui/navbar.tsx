import { useRouter } from "next/router";
import { useState } from "react";
import { ALink } from "@/components/activeLink";
import { AnimatePresence, motion } from "framer-motion";
import { GrFormClose } from "react-icons/gr";
import { MoonIcon, SunIcon } from "@/components/icon";
import { useMode } from "@/hooks/useMode";

export const Navbar: React.FC = () => {
  const router = useRouter();

  const { mode, toogleMode } = useMode();

  const [mobileMode, setMobileMode] = useState(false);

  return (
    <>
      <header
        style={{ backdropFilter: "blur(15px)" }}
        className="fixed left-0 right-0 py-[.7rem] dark:border-gray-700 z-[9]"
        aria-label="navigate-wrapper"
      >
        <section className="container flex items-center justify-between">
          <section>
            {mode === "dark" ? (
              <button
                onClick={toogleMode}
                className="flex items-center justify-center ml-1 py-[8px]"
              >
                <MoonIcon />
              </button>
            ) : (
              <button
                onClick={toogleMode}
                className="flex items-center justify-center py-[7px]"
              >
                <SunIcon />
              </button>
            )}
          </section>
          <section className="flex items-center gap-3 lg:gap-5">
            <nav
              className="
            hidden md:flex
            md:relative md:flex-row items-center justify-center gap-2 
            "
              aria-label="nav-large-mode"
            >
              <ALink href="/">Home</ALink>
              <ALink
                activeSlug={router.pathname === "/blog/[slug]"}
                href="/blog"
              >
                Blog
              </ALink>
              <ALink href="/about">About</ALink>
              <ALink href="/portfolio">Portfolio</ALink>
              {/* <ALink href="/snippet">Snippets</ALink> */}
            </nav>
            <button
              onClick={() => setMobileMode((P) => !P)}
              className="md:hidden"
              aria-label="toggle-menus-botton"
            >
              {/* 2 bars  */}
              <div></div>
              <div></div>
            </button>
          </section>
        </section>
      </header>

      {mobileMode ? (
        <AnimatePresence>
          <motion.section
            initial={{ left: -30, opacity: 0 }}
            animate={{ left: 0, opacity: 1 }}
            exit={{ left: -30, opacity: 0 }}
            className="md:hidden fixed top-0 inset-0 bg-light/50 dark:bg-dark/50 z-[10]"
          >
            <nav
              className="flex flex-col gap-5 bg-light dark:bg-dark p-7"
              onClick={() => setMobileMode((P) => !P)}
              aria-label="nav-mobile-mode"
            >
              <button className="md:hidden">
                <GrFormClose className="dark:bg-white text-lg" />
              </button>
              <ALink href="/">Home</ALink>
              <ALink activeSlug={router.pathname === "/[slug]"} href="/blog">
                Blog
              </ALink>
              <ALink href="/about">About</ALink>
              <ALink href="/portfolio">Portfolio</ALink>
              <ALink href="/snippet">Snippets</ALink>
            </nav>
          </motion.section>
        </AnimatePresence>
      ) : null}
    </>
  );
};
