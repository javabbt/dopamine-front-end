import React from "react";
import { siteDetails } from "@/data/siteDetails";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Shield,
  Book,
  Lock,
  CreditCard,
  Zap,
  RefreshCcw,
  Mail,
} from "lucide-react";

const Terms: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const sections = [
    {
      id: 1,
      title: "Acceptance of Terms",
      icon: <Shield className="w-5 h-5" />,
      content: `By accessing and using ${siteDetails.siteName}, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our service.`,
    },
    {
      id: 2,
      title: "Description of Service",
      icon: <Book className="w-5 h-5" />,
      content: `${siteDetails.siteName} is a digital wellness application designed to help users track and manage their digital habits and addictions. The service includes features for monitoring usage patterns, setting goals, and receiving insights about digital consumption.`,
    },
    {
      id: 3,
      title: "User Responsibilities",
      icon: <Lock className="w-5 h-5" />,
      content: [
        "Provide accurate and complete information",
        "Use the service for personal, non-commercial purposes",
        "Not share your account credentials",
        "Use the service in compliance with all applicable laws",
      ],
    },
    {
      id: 4,
      title: "Subscription and Payments",
      icon: <CreditCard className="w-5 h-5" />,
      content: `Some features of ${siteDetails.siteName} may require a paid subscription. By subscribing, you agree to pay all fees associated with your chosen plan. Subscriptions automatically renew unless cancelled before the renewal date.`,
    },
    {
      id: 5,
      title: "Intellectual Property",
      icon: <Zap className="w-5 h-5" />,
      content: `All content, features, and functionality of ${siteDetails.siteName} are owned by us and are protected by international copyright, trademark, and other intellectual property laws.`,
    },
    {
      id: 6,
      title: "Limitation of Liability",
      icon: <Shield className="w-5 h-5" />,
      content: `${siteDetails.siteName} is provided &quot;as is&quot; without any warranties. We are not responsible for any decisions made based on the information provided by our service.`,
    },
    {
      id: 7,
      title: "Changes to Terms",
      icon: <RefreshCcw className="w-5 h-5" />,
      content: `We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through the application.`,
    },
    {
      id: 8,
      title: "Contact Information",
      icon: <Mail className="w-5 h-5" />,
      content: (
        <>
          For any questions regarding these Terms and Conditions, please contact
          us at{" "}
          <a
            href="mailto:mimiko.apps@gmail.com"
            className="text-primary hover:text-primary/80 transition-colors duration-200 font-medium underline underline-offset-4"
          >
            mimiko.apps@gmail.com
          </a>
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5 overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-40 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 mb-4">
            Terms and Conditions
          </h1>
          <div className="w-32 h-1.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 mx-auto rounded-full"></div>
          <p className="mt-6 text-foreground/80 max-w-2xl mx-auto">
            Please read these terms carefully before using our service. By using{" "}
            {siteDetails.siteName}, you&apos;re agreeing to follow these
            guidelines.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {sections.map((section, i) => (
            <motion.div
              key={section.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeIn}
              className="bg-card/70 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl border border-border/50 hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors duration-300">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">
                    {section.title}
                  </h2>
                </div>

                {Array.isArray(section.content) ? (
                  <ul className="space-y-3 text-foreground/80">
                    {section.content.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-foreground/80 leading-relaxed">
                    {section.content}
                  </p>
                )}
              </div>
              <div className="h-1.5 w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-sm text-foreground/60"
        >
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p className="mt-2">
            © {new Date().getFullYear()} {siteDetails.siteName}. All rights
            reserved.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;
