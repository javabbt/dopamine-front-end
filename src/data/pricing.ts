import { IPricing } from "@/types";

export const tiers: IPricing[] = [
  {
    name: "Weekly",
    price: 2.99,
    features: [
      "Full access to all features",
      "Weekly billing cycle",
      "Cancel anytime",
      "Email support",
    ],
  },
  {
    name: "Monthly",
    price: 9.99,
    features: [
      "Full access to all features",
      "Monthly billing cycle",
      "Cancel anytime",
      "Priority email support",
      "Save 17% vs weekly plan",
    ],
  },
  {
    name: "Yearly",
    price: 79.99,
    features: [
      "Full access to all features",
      "Annual billing cycle",
      "Cancel anytime",
      "Priority email & phone support",
      "Save 33% vs monthly plan",
      "Best value option",
    ],
  },
];
