import { AnimatedSection } from "./AnimatedSection";
import { ShoppingBag, Hexagon, Quote, Leaf, MessageSquare, Anchor } from "lucide-react";

const logos = [
  { name: "Shopify", content: <div className="flex items-center gap-1.5"><ShoppingBag className="w-6 h-6" /><span className="text-xl font-bold tracking-tight lowercase">shopify</span></div> },
  { name: "Klarna", content: <div className="text-2xl font-serif font-semibold tracking-tight">Klarna.</div> },
  { name: "Reddit", content: <div className="flex items-center gap-1.5"><Hexagon className="w-6 h-6" /><span className="text-xl font-bold tracking-tight lowercase">reddit</span></div> },
  { name: "Nike", content: <div className="text-2xl font-black italic tracking-tighter uppercase">NIKE</div> },
  { name: "Zapier", content: <div className="text-xl font-black tracking-tighter lowercase">_zapier</div> },
  { name: "NU", content: <div className="text-3xl font-bold tracking-tighter lowercase">nu</div> },
  { name: "Jelly Belly", content: <div className="text-lg font-serif italic font-bold leading-[0.8] flex flex-col items-center"><span className="ml-2">Jelly</span><span className="-ml-2">Belly</span></div> },
  { name: "Revolut", content: <div className="text-[22px] font-semibold tracking-tight">Revolut</div> },
  { name: "Forever 21", content: <div className="text-xs font-bold tracking-widest uppercase">Forever 21</div> },
  { name: "Red Bull", content: <div className="text-xl font-black tracking-tighter">Red Bull</div> },
  { name: "Calvin Klein", content: <div className="text-sm font-light tracking-[0.2em]">Calvin Klein</div> },
  { name: "Intercom", content: <div className="flex items-center gap-1.5"><MessageSquare className="w-5 h-5 fill-current" /><span className="text-xs font-bold tracking-widest uppercase">Intercom</span></div> },
  { name: "Hermes", content: <div className="flex flex-col items-center"><Anchor className="w-5 h-5" /><span className="text-[8px] font-serif tracking-widest uppercase mt-0.5">Hermes</span></div> },
  { name: "Hello Fresh", content: <div className="flex items-center gap-1.5"><Leaf className="w-6 h-6" /><div className="text-[10px] font-black tracking-tighter uppercase leading-[1.1] flex flex-col"><span>Hello</span><span>Fresh</span></div></div> },
];

export const TrustedBy = () => (
  <section className="py-16 bg-card border-y border-border">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <AnimatedSection className="text-center mb-10 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-[34px] font-medium text-muted-foreground leading-tight tracking-tight">
          Trusted by <span className="font-bold text-foreground">startups and fast-growing companies</span> to build teams that scale
        </h2>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-x-8 gap-y-12 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 transition-opacity duration-500 hover:opacity-100">
          {logos.map((logo, i) => (
            <div 
              key={`${logo.name}-${i}`} 
              className="flex items-center justify-center text-foreground hover:text-primary transition-colors cursor-default"
            >
              {logo.content}
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);
