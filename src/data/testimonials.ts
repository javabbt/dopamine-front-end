import { ITestimonial } from "@/types";
import { siteDetails } from "./siteDetails";

export const testimonials: ITestimonial[] = [
  {
    name: "Alex Chen",
    role: "Software Engineer",
    message: `${siteDetails.siteName} has been a game-changer in my battle against social media addiction. The app's tracking features helped me realize how much time I was wasting on mindless scrolling. I've reclaimed 3 hours of my day!`,
    avatar: "/images/testimonial-1.webp",
  },
  {
    name: "Sarah Martinez",
    role: "Graduate Student",
    message: `As someone struggling with sugar addiction, ${siteDetails.siteName}'s habit tracking and insights have been invaluable. The dopamine loop visualization helped me understand my triggers and break free from unhealthy patterns.`,
    avatar: "/images/testimonial-2.webp",
  },
  {
    name: "Michael Thompson",
    role: "Digital Marketing Specialist",
    message: `${siteDetails.siteName} helped me overcome my YouTube binge-watching habit. The app's gentle reminders and progress tracking made me more mindful of my screen time. I'm now more productive and present in my daily life.`,
    avatar: "/images/testimonial-3.webp",
  },
];
