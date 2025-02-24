import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function PokemonIntro({ onComplete }: { onComplete: () => void }) {
  const pokemonRef = useRef(null);
  const bentoRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => onComplete()
    });

    // Initial pokeball animation
    tl.from(pokemonRef.current, {
      scale: 0,
      duration: 0.5,
      ease: "back.out"
    })
    .to(pokemonRef.current, {
      rotate: -10,
      duration: 0.2,
      repeat: 2,
      yoyo: true
    })
    .to(pokemonRef.current, {
      scale: 1.2,
      duration: 0.3
    })
    .to(pokemonRef.current, {
      opacity: 0,
      scale: 2,
      duration: 0.5
    });

    // Animate bento boxes
    bentoRefs.current.forEach((ref, index) => {
      tl.from(ref, {
        opacity: 0,
        scale: 0,
        x: 0,
        y: 0,
        duration: 0.5,
        delay: index * 0.1,
        ease: "back.out(1.7)"
      }, "-=0.3");
    });
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary">
      <div ref={pokemonRef} className="pokeball-container">
        <div className="pokeball">
          <div className="pokeball-half top"></div>
          <div className="pokeball-half bottom"></div>
          <div className="pokeball-line"></div>
          <div className="pokeball-button"></div>
        </div>
      </div>
    </div>
  );
} 