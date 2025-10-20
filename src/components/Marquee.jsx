import React, { useEffect, useMemo, useRef } from "react";
import { Icon } from "@iconify/react";
import gsap from "gsap";

const Marquee = ({
  items = [],
  className = "text-white bg-black",
  icon = "mdi:star-four-points",
  iconClassName = "",
  reverse = false,
  speed = 120,       // px/sec
  gap = 64,          // px tra item
  pauseOnHover = true,
  height,            // es: 80 o 100
}) => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const tlRef = useRef(null);
  const roRef = useRef(null);

  // prefer reduced motion
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // crea gli item DOM di base
  const baseItems = useMemo(
    () =>
      items.map((text, i) => (
        <span
          key={`${text}-${i}`}
          className="flex items-center whitespace-nowrap"
          style={{ paddingLeft: gap, paddingRight: gap }}
        >
          {text}
          <Icon icon={icon} className={iconClassName} />
        </span>
      )),
    [items, icon, iconClassName, gap]
  );

  // funzione che costruisce una traccia abbastanza lunga
  const buildTrack = () => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return { width: 0 };

    // reset
    track.innerHTML = "";

    // inserisci gli item base almeno una volta
    const fragment = document.createDocumentFragment();
    baseItems.forEach((vnode) => {
      // render “manuale”: creiamo span con gli stessi contenuti
      const span = document.createElement("span");
      span.className = "flex items-center whitespace-nowrap";
      span.style.paddingLeft = `${gap}px`;
      span.style.paddingRight = `${gap}px`;
      // testo
      const text = vnode.key.split("-").slice(0, -1).join("-");
      // Non possiamo leggere il testo dal vnode; ricreiamo:
      // Migliore: leggiamo da items direttamente con stesso indice
    });
    // ↑ il frammento sopra non può ricreare il vnode in runtime.
    // Usiamo quindi render via React e poi cloneremo i nodi.

    // Strategia: render via React (baseItems) -> poi clona i nodi fino a 2x container

    // 1) Montiamo baseItems con React “normale”
    // (Sono già montati perché li mettiamo nel JSX; per la costruzione dinamica
    // duplicheremo i nodi già presenti in track).

    return { width: 0 };
  };

  // Inizializziamo GSAP: costruiamo loop semplice su una traccia lunga
  const initGsap = () => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    // kill vecchia timeline
    if (tlRef.current) tlRef.current.kill();

    // Calcola larghezza del container e della traccia; duplica finché >= 2× container
    const ensureLength = () => {
      const containerW = container.clientWidth;
      let trackW = track.scrollWidth;

      // Se la traccia è vuota o troppo corta, duplica i figli finché non superi 2x container
      if (trackW === 0) return 0;

      // Duplichiamo interi blocchi di contenuto
      while (trackW < containerW * 2) {
        const clones = Array.from(track.children).map((el) => el.cloneNode(true));
        clones.forEach((c) => track.appendChild(c));
        trackW = track.scrollWidth;
        // fail-safe per evitare loop infiniti
        if (track.children.length > 200) break;
      }
      return trackW;
    };

    const loopW = ensureLength();
    if (!loopW) return;

    // durata in base a px/sec
    const duration = loopW / Math.max(20, speed);

    // Animazione: muovi la traccia a sinistra (o destra), avvolgendo con modulo
    tlRef.current = gsap.to(track, {
      x: reverse ? `+=${loopW}` : `-=${loopW}`,
      duration,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: (x) => {
          const v = parseFloat(x);
          let mod = v % loopW;
          // per direzioni negative garantiamo continuità
          if (!reverse && v <= -loopW) mod = v % loopW;
          if (reverse && v >= loopW) mod = v % loopW;
          return `${mod}px`;
        },
      },
    });
  };

  // mount + resize
  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    if (prefersReducedMotion) {
      // niente animazione: mostriamo una sola riga statica
      if (tlRef.current) tlRef.current.kill();
      return;
    }

    // init + resize observer
    const setup = () => {
      initGsap();
    };

    setup();

    if ("ResizeObserver" in window) {
      roRef.current = new ResizeObserver(() => {
        initGsap();
      });
      roRef.current.observe(container);
    } else {
      const onResize = () => initGsap();
      window.addEventListener("resize", onResize);
      return () => window.removeEventListener("resize", onResize);
    }

    // pause on hover
    const onEnter = () => tlRef.current && tlRef.current.timeScale(0);
    const onLeave = () => tlRef.current && tlRef.current.timeScale(1);

    if (pauseOnHover) {
      container.addEventListener("mouseenter", onEnter);
      container.addEventListener("mouseleave", onLeave);
    }

    return () => {
      if (tlRef.current) tlRef.current.kill();
      if (roRef.current) roRef.current.disconnect();
      if (pauseOnHover) {
        container.removeEventListener("mouseenter", onEnter);
        container.removeEventListener("mouseleave", onLeave);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, reverse, speed, gap, pauseOnHover, prefersReducedMotion]);

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden w-full ${
        height ? "" : "h-20 md:h-[100px]"
      } flex items-center font-light uppercase ${className}`}
      style={{ height: height ? `${height}px` : undefined }}
      aria-live="off"
    >
      {/* TRACK: render base una sola volta; poi GSAP clonerà via DOM (appendChild) duplicando i nodi già montati */}
      <div
        ref={trackRef}
        className="flex will-change-transform"
        style={{
          // evita line-height strani e salti verticali
          lineHeight: 1,
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        }}
      >
        {baseItems}
      </div>
    </div>
  );
};

export default Marquee;