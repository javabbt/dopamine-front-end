import React, { useState } from "react";
import { siteDetails } from "@/data/siteDetails";
import { motion } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  Shield,
  Lock,
  User,
  Mail,
  Clock,
  FileText,
} from "lucide-react";

const PrivacyPolicy: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<number | null>(0);

  const sectionIcons = [
    <FileText key="intro" className="h-6 w-6" />,
    <User key="collect" className="h-6 w-6" />,
    <Shield key="use" className="h-6 w-6" />,
    <Lock key="security" className="h-6 w-6" />,
    <User key="rights" className="h-6 w-6" />,
    <Mail key="contact" className="h-6 w-6" />,
    <Clock key="updates" className="h-6 w-6" />,
  ];

  const sections = [
    {
      title: "1. Introduction",
      content: (
        <p className="leading-relaxed">
          At {siteDetails.siteName}, we take your privacy seriously. This
          Privacy Policy explains how we collect, use, disclose, and safeguard
          your information when you use our dopamine tracking and addiction
          management application.
        </p>
      ),
    },
    {
      title: "2. Information We Collect",
      content: (
        <>
          <p className="mb-4">We collect the following types of information:</p>
          <ul className="list-none space-y-3">
            {[
              "Usage data related to your digital habits and patterns",
              "Self-reported addiction tracking data",
              "Account information (email, name)",
              "Device information and app usage statistics",
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-3 group"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="h-2 w-2 rounded-full bg-primary group-hover:scale-150 transition-transform duration-300"></span>
                <span className="group-hover:text-primary transition-colors duration-300">
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
        </>
      ),
    },
    {
      title: "3. How We Use Your Information",
      content: (
        <>
          <p className="mb-4">We use your information to:</p>
          <ul className="list-none space-y-3">
            {[
              "Provide personalized addiction tracking and management",
              "Generate insights about your digital habits",
              "Improve our services and user experience",
              "Send important updates and notifications",
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-3 group"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="h-2 w-2 rounded-full bg-primary group-hover:scale-150 transition-transform duration-300"></span>
                <span className="group-hover:text-primary transition-colors duration-300">
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
        </>
      ),
    },
    {
      title: "4. Data Security",
      content: (
        <p className="leading-relaxed">
          We implement appropriate security measures to protect your personal
          information. Your sensitive addiction data is processed locally on
          your device when possible, and all data transmission is encrypted.
        </p>
      ),
    },
    {
      title: "5. Your Rights",
      content: (
        <>
          <p className="mb-4">You have the right to:</p>
          <ul className="list-none space-y-3">
            {[
              "Access your personal data",
              "Correct inaccurate data",
              "Request deletion of your data",
              "Opt-out of data collection",
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-3 group"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="h-2 w-2 rounded-full bg-primary group-hover:scale-150 transition-transform duration-300"></span>
                <span className="group-hover:text-primary transition-colors duration-300">
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
        </>
      ),
    },
    {
      title: "6. Contact Us",
      content: (
        <p className="leading-relaxed">
          If you have any questions about this Privacy Policy, please contact us
          at{" "}
          <a
            href={`mailto:${siteDetails.email}`}
            className="text-primary hover:text-primary/80 transition-colors duration-300 font-medium hover:underline decoration-2 underline-offset-4"
          >
            {siteDetails.email}
          </a>
        </p>
      ),
    },
    {
      title: "7. Updates to This Policy",
      content: (
        <p className="leading-relaxed">
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new Privacy Policy on this page.
        </p>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 border border-purple-100 relative overflow-hidden max-w-4xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-100/30 via-pink-100/20 to-indigo-100/30 pointer-events-none"></div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent relative"
          >
            Privacy Policy
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1.5 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 rounded-full"></div>
          </motion.h1>

          <div className="space-y-6 relative">
            {sections.map((section, index) => (
              <motion.section
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white/80 backdrop-blur-sm rounded-2xl border border-purple-100 overflow-hidden transition-all duration-300 ${
                  expandedSection === index
                    ? "shadow-xl scale-[1.02] ring-2 ring-purple-200"
                    : "hover:shadow-lg hover:bg-white/90"
                }`}
              >
                <button
                  onClick={() =>
                    setExpandedSection(expandedSection === index ? null : index)
                  }
                  className="w-full p-6 flex items-center justify-between hover:bg-purple-50/50 transition-colors duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-purple-600 group-hover:scale-110 transition-transform duration-300">
                      {sectionIcons[index]}
                    </div>
                    <h2 className="text-2xl font-semibold text-purple-700 group-hover:text-purple-600 transition-colors duration-300">
                      {section.title}
                    </h2>
                  </div>
                  {expandedSection === index ? (
                    <ChevronUp className="h-6 w-6 text-purple-600 group-hover:scale-110 transition-transform duration-300" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-purple-600 group-hover:scale-110 transition-transform duration-300" />
                  )}
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: expandedSection === index ? "auto" : 0,
                    opacity: expandedSection === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 text-gray-700">
                    {section.content}
                  </div>
                </motion.div>
              </motion.section>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
