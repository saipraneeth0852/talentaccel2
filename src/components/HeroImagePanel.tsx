import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HeroImagePanelProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  glowClassName?: string;
}

export const HeroImagePanel = ({
  src,
  alt,
  className,
  imageClassName,
  glowClassName,
}: HeroImagePanelProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.96, y: 24 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.25, ease: [0.23, 1, 0.32, 1] }}
    className={cn("relative mx-auto w-full max-w-xl", className)}
  >
    <div
      className={cn(
        "absolute inset-x-[10%] top-10 bottom-0 rounded-full bg-gradient-to-br from-primary/18 via-primary/8 to-secondary/18 blur-3xl",
        glowClassName,
      )}
    />
    <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 p-2 shadow-[0_30px_80px_-28px_rgba(11,32,72,0.35)] backdrop-blur-sm">
      <img
        src={src}
        alt={alt}
        className={cn(
          "h-[250px] w-full rounded-[1.5rem] object-cover object-center sm:h-[320px] lg:h-[460px]",
          imageClassName,
        )}
      />
    </div>
  </motion.div>
);
