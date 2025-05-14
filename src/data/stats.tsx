import { BsBarChartFill, BsFillStarFill } from "react-icons/bs";
import { PiGlobeFill } from "react-icons/pi";

import { IStats } from "@/types";

export const stats: IStats[] = [
  {
    title: "50K+",
    icon: <BsBarChartFill size={34} className="text-purple-500" />,
    description:
      "Dopamine detox sessions completed by our users, helping them build healthier habits.",
  },
  {
    title: "4.8",
    icon: <BsFillStarFill size={34} className="text-yellow-500" />,
    description:
      "Star rating from users who have successfully reduced their digital addiction.",
  },
  {
    title: "100K+ ",
    icon: <PiGlobeFill size={34} className="text-green-600" />,
    description:
      "Active users worldwide, building healthier digital habits together.",
  },
];
