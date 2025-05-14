import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
  subheading: string;
  quickLinks: IMenuItem[];
  email: string;
  telephone: string;
  socials: ISocials;
} = {
  subheading:
    "Transform your digital habits and boost productivity with mindful technology use.",
  quickLinks: [
    {
      text: "Features",
      url: "#features",
    },
    {
      text: "Pricing",
      url: "#pricing",
    },
    {
      text: "Success Stories",
      url: "#testimonials",
    },
    {
      text: "Privacy Policy",
      url: "/privacy-policy",
    },
    {
      text: "Terms & Conditions",
      url: "/terms",
    },
  ],
  email: "mimiko.apps@gmail.com",
  telephone: "+33 (6) 25428638",
  socials: {},
};
