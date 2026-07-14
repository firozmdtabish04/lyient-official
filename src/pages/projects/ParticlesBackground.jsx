import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

function ParticlesBackground() {
  const init = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      init={init}
      options={{
        fullScreen: { enable: false },

        particles: {
          number: {
            value: 80,
            density: { enable: true, area: 800 },
          },

          color: {
            value: ["#facc15", "#f97316", "#fde68a"], // warm glow (like your image)
          },

          shape: {
            type: "circle",
          },

          opacity: {
            value: { min: 0.2, max: 0.8 },
            animation: {
              enable: true,
              speed: 0.5,
              sync: false,
            },
          },

          size: {
            value: { min: 1, max: 6 },
            animation: {
              enable: true,
              speed: 2,
              sync: false,
            },
          },

          move: {
            enable: true,
            speed: 1.4,
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "bounce",
            },
          },

          blur: {
            enable: true,
            value: 4,
          },
        },

        interactivity: {
          events: {
            onHover: {
              enable: false,
            },
          },
        },

        detectRetina: true,
      }}
      className="pointer-events-none absolute inset-0 z-0 opacity-35"
    />
  );
}

export default ParticlesBackground;
