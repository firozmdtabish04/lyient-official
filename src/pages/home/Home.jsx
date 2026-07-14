import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import HomeHeroPremium from "../../components/ui/HomeHeroPremium";
import HeroSlider from "../../components/home/HeroSlider";
import CompanySections from "../../components/home/CompanySections";
import ServicesSection from "../../components/home/ServicesSection";
import StatsSection from "../../components/home/StatsSection";
import CTASection from "../../components/home/CTASection";
import TestimonialsSection from "../../components/home/TestimonialsSection";
const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1400&auto=format&fit=crop",
    tag: "🚀 Trusted by 120K+ developers",
    title: "Simply better hosting",
    highlight: "for WordPress.",
    description:
      "Lightning-fast, secure, and scalable hosting trusted by agencies and businesses worldwide.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop",
    tag: "☁ Cloud Infrastructure",
    title: "Powerful Cloud",
    highlight: "Solutions.",
    description:
      "Build modern cloud applications with maximum uptime, security and performance.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400&auto=format&fit=crop",
    tag: "🤖 AI Powered",
    title: "Future Ready",
    highlight: "Technology.",
    description:
      "Transform your business with AI, automation, enterprise software and digital solutions.",
  },
];

function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <HeroSlider />
      <CompanySections />
      <ServicesSection />
      <StatsSection />
      <CTASection />
      <TestimonialsSection />
    </>
  );
}

export default Home;
