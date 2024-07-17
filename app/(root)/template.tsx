"use client";

import { AnimatePresence, motion, Spring } from "framer-motion";
import { usePathname } from "next/navigation";
import Script from "next/script";

export default function Template({ children }: { children: React.ReactNode }) {
  const transitionSpringPhysics: Spring = {
    type: "spring",
    mass: 0.2,
    stiffness: 80,
    damping: 10,
  };

  const pathname = usePathname();
  return (
    <>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-RD2ZJ75HVP"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-RD2ZJ75HVP');
            `,
        }}
      />
      <Script
        id="clarity-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                        (function(c,l,a,r,i,t,y){
                            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                        })(window, document, "clarity", "script", "n8elajyvxk");
                    `,
        }}
      />
      <AnimatePresence mode="wait">
        <motion.div key={pathname} className="overflow-hidden">
          <motion.div
            className="bg-gradient-to-r dark:from-indigo-500 dark:to-purple-500 !overflow-hidden"
            style={{
              position: "fixed",
              width: "100vw",
              zIndex: 1000,
              top: 0,
            }}
            transition={transitionSpringPhysics}
            animate={{ height: "0vh" }}
            exit={{ height: "100vh" }}
          />

          <motion.div
            className="bg-gradient-to-r dark:from-indigo-500 dark:to-purple-500 !overflow-hidden"
            style={{
              position: "fixed",
              width: "100vw",
              zIndex: 1000,
              bottom: 0,
            }}
            transition={transitionSpringPhysics}
            initial={{ height: "100vh" }}
            animate={{ height: "0vh", transition: { delay: 0.2 } }}
          />
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
              delay: 0.35,
            }}
          >
            <div className="min-h-[85vh]">{children}</div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
