import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

import { cn } from "./cn";

export const HoverEffect = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 ",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          to={item?.link}
          key={item?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 bg-amber-400 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle className="font-sans text-center p-5">
              {item.title}
            </CardTitle>
            <CardDescription className="font-sans p-5">
              {item.description}
            </CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
};

const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-96 w-full overflow-hidden bg-[#222222] border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50 w-full">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

const CardTitle = ({ className, children }) => {
  return (
    <h4
      className={cn(
        "font-bold tracking-wide mt-4 text-lg overflow-ellipsis text-overflow-ellipsis",
        className
      )}
      style={{ color: "white" }}
    >
      {children}
    </h4>
  );
};

const CardDescription = ({ className, children }) => {
  return (
    <p
      className={cn(
        "mt-4 text-zinc-400 tracking-wide leading-relaxed text-base overflow-ellipsis text-overflow-ellipsis",
        className
      )}
    >
      {children}
    </p>
  );
};

export default { HoverEffect, Card, CardTitle, CardDescription };
