export type Theme = {
    id: string;
    name: string;
    emoji: string;
    bgStart: string;
    bgEnd: string;
    textColor: string;
    cardBgStart: string;
    cardBgEnd: string;
    borderColor: string;
    controlBgStart: string;
    controlBgEnd: string;
  };
  
  export const themes: Theme[] = [
    {
      id: "neutral",
      name: "Neutral 🤍",
      emoji: "🤍",
      bgStart: "from-white",
      bgEnd: "to-gray-100",
      textColor: "text-gray-900",
      cardBgStart: "from-white",
      cardBgEnd: "to-gray-50",
      borderColor: "border-gray-300",
      controlBgStart: "from-gray-50",
      controlBgEnd: "to-gray-200",
    },
    {
      id: "blue-night",
      name: "Blue Night 🌌",
      emoji: "🌌",
      bgStart: "from-gray-900",
      bgEnd: "to-blue-900",
      textColor: "text-white",
      cardBgStart: "from-gray-800",
      cardBgEnd: "to-gray-700",
      borderColor: "border-gray-600",
      controlBgStart: "from-gray-700",
      controlBgEnd: "to-gray-600",
    },
    {
      id: "green-forest",
      name: "Green Forest 🌳",
      emoji: "🌳",
      bgStart: "from-green-50",
      bgEnd: "to-green-200",
      textColor: "text-gray-900",
      cardBgStart: "from-green-100",
      cardBgEnd: "to-green-50",
      borderColor: "border-green-300",
      controlBgStart: "from-green-50",
      controlBgEnd: "to-green-200",
    },
    {
      id: "sunset",
      name: "Sunset 🌅",
      emoji: "🌅",
      bgStart: "from-orange-50",
      bgEnd: "to-pink-100",
      textColor: "text-gray-900",
      cardBgStart: "from-orange-100",
      cardBgEnd: "to-pink-50",
      borderColor: "border-orange-200",
      controlBgStart: "from-orange-50",
      controlBgEnd: "to-pink-100",
    },
    {
      id: "purple-dream",
      name: "Purple Dream 💜",
      emoji: "💜",
      bgStart: "from-purple-50",
      bgEnd: "to-purple-200",
      textColor: "text-gray-900",
      cardBgStart: "from-purple-100",
      cardBgEnd: "to-purple-50",
      borderColor: "border-purple-300",
      controlBgStart: "from-purple-50",
      controlBgEnd: "to-purple-200",
    },
    {
      id: "gray-elegance",
      name: "Gray Elegance 🖤",
      emoji: "🖤",
      bgStart: "from-gray-100",
      bgEnd: "to-gray-300",
      textColor: "text-gray-900",
      cardBgStart: "from-gray-200",
      cardBgEnd: "to-gray-100",
      borderColor: "border-gray-400",
      controlBgStart: "from-gray-100",
      controlBgEnd: "to-gray-300",
    },
  ];
  