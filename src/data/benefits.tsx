import {
  FiBarChart2,
  FiBriefcase,
  FiDollarSign,
  FiLock,
  FiPieChart,
  FiShield,
  FiTarget,
  FiTrendingUp,
  FiUser,
} from "react-icons/fi";

import { IBenefit } from "@/types";

export const benefits: IBenefit[] = [
  {
    title: "Track Your Addictions",
    description:
      "Monitor your digital and physical addictions - from social media scrolling to sugar consumption. Our AI-powered tracking helps you understand your dopamine triggers and patterns.",
    bullets: [
      {
        title: "Smart Detection",
        description:
          "Automatically identifies addictive patterns in your digital and physical habits.",
        icon: <FiBarChart2 size={26} />,
      },
      {
        title: "Customizable Goals",
        description:
          "Set daily limits for different addictive behaviors and track progress.",
        icon: <FiTarget size={26} />,
      },
      {
        title: "Progress Insights",
        description: "Get detailed reports on your dopamine detox journey.",
        icon: <FiTrendingUp size={26} />,
      },
    ],
    imageSrc: "/images/home.png",
  },
  {
    title: "Break the Dopamine Loop",
    description:
      "Take control of your addictive behaviors with proven techniques and personalized strategies to reduce overstimulation and build healthier habits.",
    bullets: [
      {
        title: "Focus Mode",
        description:
          "Block addictive apps and content during important moments.",
        icon: <FiDollarSign size={26} />,
      },
      {
        title: "Guided Recovery",
        description:
          "Follow step-by-step programs to reduce dependency on dopamine triggers.",
        icon: <FiBriefcase size={26} />,
      },
      {
        title: "Real-Time Alerts",
        description:
          "Get notified when you're approaching your addiction limits.",
        icon: <FiPieChart size={26} />,
      },
    ],
    imageSrc: "/images/mockup-2.png",
  },
  {
    title: "Privacy First",
    description:
      "Your journey to break free from dopamine addiction is deeply personal. We ensure your sensitive data stays private and secure while you work towards better habits.",
    bullets: [
      {
        title: "Local Processing",
        description:
          "Your sensitive addiction data is processed on-device for maximum privacy.",
        icon: <FiLock size={26} />,
      },
      {
        title: "Anonymous Analytics",
        description:
          "Share only what you're comfortable with about your recovery journey.",
        icon: <FiUser size={26} />,
      },
      {
        title: "Secure Storage",
        description: "Your personal addiction data is encrypted and protected.",
        icon: <FiShield size={26} />,
      },
    ],
    imageSrc: "/images/mockup-1.png",
  },
];
