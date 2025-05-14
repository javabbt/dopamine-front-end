import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
  {
    question: `Is ${siteDetails.siteName} secure?`,
    answer:
      "Absolutely. We use industry-standard encryption to protect your data and ensure your privacy. Your personal information is always kept secure and confidential.",
  },
  {
    question: `Can I use ${siteDetails.siteName} on multiple devices?`,
    answer:
      "Yes! Your Dopamine account syncs seamlessly across all your devices - smartphone, tablet, and computer, so you can stay connected wherever you go.",
  },
  {
    question: "How does Dopamine help me stay focused?",
    answer: `Dopamine uses scientifically-proven techniques to help you build better habits and maintain focus. Our smart tracking and personalized insights help you understand and improve your productivity patterns.`,
  },
  {
    question: "Do I need any special equipment to use Dopamine?",
    answer:
      "Not at all! All you need is your smartphone or computer. Our app is designed to be intuitive and easy to use, regardless of your technical expertise.",
  },
  {
    question: "What if I need help using the app?",
    answer:
      "Our dedicated support team is available to help you via chat or email. We also provide comprehensive in-app guides and a detailed knowledge base to help you get the most out of Dopamine.",
  },
];
