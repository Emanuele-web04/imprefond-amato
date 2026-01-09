/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { useInView } from "motion/react";

interface CounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  isInView: boolean;
}

function Counter({
  end,
  suffix = "",
  prefix = "",
  duration = 2,
  isInView,
}: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min(
        (currentTime - startTime) / (duration * 1000),
        1
      );

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(
        startValue + (end - startValue) * easeOutQuart
      );

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, isInView]);

  return (
    <span>
      {prefix}
      {count.toLocaleString("it-IT")}
      {suffix}
    </span>
  );
}

interface StatCardProps {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  isInView: boolean;
}

function StatCard({ value, label, suffix, prefix, isInView }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className="text-3xl md:text-5xl font-bold text-gray-900 mb-2">
        <Counter
          end={value}
          suffix={suffix}
          prefix={prefix}
          isInView={isInView}
        />
      </div>
      <div className="text-lg md:text-xl text-gray-600 font-medium font-geist-sans">
        {label}
      </div>
    </motion.div>
  );
}

export function INumeri() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative w-full py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            I Numeri
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-geist-sans">
            La prova sociale della nostra esperienza e affidabilità nel settore
            delle fondazioni speciali
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <StatCard
            value={40}
            label="Anni di Esperienza"
            suffix="+"
            isInView={isInView}
          />
          <StatCard
            value={500}
            label="Cantieri Completati"
            suffix="+"
            isInView={isInView}
          />
          <StatCard
            value={150000}
            label="Metri Lineari Perforati"
            suffix="+"
            isInView={isInView}
          />
          <StatCard
            value={5}
            label="Certificazioni"
            suffix=""
            isInView={isInView}
          />
        </div>
      </div>
    </section>
  );
}
