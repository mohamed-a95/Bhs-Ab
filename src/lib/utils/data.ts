// Car types for rental
export const CarTypes = [
  {
    name: "Personbil (Kompakt)",
    description: "Toyota Yaris eller liknande",
    pricePerDay: "450",
    imgSrc: "/images/car-rental.jpg",
    passengers: "4",
    luggage: "2 stora väskor",
    fuelEconomy: "Låg bränsleförbrukning"
  },
  {
    name: "Kombi",
    description: "Volvo V60 eller liknande",
    pricePerDay: "650",
    imgSrc: "/images/car-rental.jpg",
    passengers: "5",
    luggage: "4 stora väskor",
    fuelEconomy: "Medel bränsleförbrukning"
  },
  {
    name: "Skåpbil",
    description: "Mercedes Sprinter eller liknande",
    pricePerDay: "950",
    imgSrc: "/images/car-rental.jpg",
    passengers: "3",
    luggage: "15 kubikmeter lastutrymme",
    fuelEconomy: "B-körkort tillräckligt"
  }
];

// Personal car pricing data
export const PersonalCarPricing = [
  {
    name: "Kompaktbil",
    description: "Toyota Yaris eller liknande",
    day: "450 kr",
    weekend: "1 200 kr",
    week: "2 500 kr",
    extraPerKm: "1,50 kr"
  },
  {
    name: "Mellanklass",
    description: "Volkswagen Golf eller liknande",
    day: "550 kr",
    weekend: "1 400 kr",
    week: "3 000 kr",
    extraPerKm: "1,75 kr"
  },
  {
    name: "Kombi",
    description: "Volvo V60 eller liknande",
    day: "650 kr",
    weekend: "1 600 kr",
    week: "3 500 kr",
    extraPerKm: "2,00 kr"
  },
  {
    name: "SUV",
    description: "Volvo XC60 eller liknande",
    day: "850 kr",
    weekend: "2 200 kr",
    week: "4 800 kr",
    extraPerKm: "2,50 kr"
  }
];

// Van pricing data
export const VanPricing = [
  {
    name: "Lastbil 1",
    description: "11 m³",
    shortTerm: "529 kr",
    day: "839 kr",
    day1: "1 899 kr",
    day2: "1 319 kr",
    week: "5 479 kr",
    weekFree: "6 799 kr",
    month: "15 999 kr",
    extraPerKm: "5,0 kr",
    selfRisk: "140 kr"
  },
  {
    name: "Lastbil 2",
    description: "18 m³",
    shortTerm: "759 kr",
    day: "1 299 kr",
    day1: "2 499 kr",
    day2: "1 499 kr",
    week: "7 999 kr",
    weekFree: "9 999 kr",
    month: "20 199 kr",
    extraPerKm: "6,0 kr",
    selfRisk: "140 kr"
  },
  {
    name: "Lastbil 3",
    description: "20 m³",
    shortTerm: "939 kr",
    day: "1 519 kr",
    day1: "3 099 kr",
    day2: "1 749 kr",
    week: "9 999 kr",
    weekFree: "12 999 kr",
    month: "26 259 kr",
    extraPerKm: "7,5 kr",
    selfRisk: "140 kr"
  },
  {
    name: "Lastbil 2 + släp",
    description: "18 m³ + 11 m³",
    shortTerm: "1 199 kr",
    day: "1 899 kr",
    day1: "3 399 kr",
    day2: "4 799 kr",
    week: "10 999 kr",
    weekFree: "13 599 kr",
    month: "–",
    extraPerKm: "8,0 kr",
    selfRisk: "195 kr"
  }
];

// Trailer pricing data
export const TrailerPricing = [
  {
    name: "Täckt flyttsläp",
    description: "11m³ lastutrymme",
    shortTerm: "200 kr",
    day: "339 kr",
    weekend: "949 kr",
    week: "1 699 kr",
    insurance: "35 kr/dygn",
    weekendRules: [
      "Hämtar du släpet/takboxen innan kl. 12 på fredag ska den återlämnas samma tid på måndag.",
      "Hämtar du släpet/takboxen efter kl. 12 på fredag ska den återlämnas senast kl. 12 på måndag."
    ]
  },
  {
    name: "Thule Ocean 700",
    description: "Takbox",
    base: "159 kr",
    day: "70 kr",
    twoDays: "159 kr",
    weekend: "238 kr",
    week: "549 kr"
  }
];

// Moving price data
export const MovingPricing = {
  hourlyRates: [
    {
      description: "2 flyttare + skåpbil",
      time: "Vardagar 7-18",
      price: "720 kr/tim"
    },
    {
      description: "3 flyttare + skåpbil",
      time: "Vardagar 7-18",
      price: "980 kr/tim"
    },
    {
      description: "4 flyttare + skåpbil",
      time: "Vardagar 7-18",
      price: "1 250 kr/tim"
    }
  ],
  additionalServices: [
    {
      name: "Packning",
      description: "Per person och timme",
      price: "395 kr/tim"
    },
    {
      name: "Flyttstädning",
      description: "Pris per m²",
      price: "från 20 kr/m²"
    },
    {
      name: "Emballage",
      description: "Kartonger, tejp, bubbelplast",
      price: "Enligt prislista"
    },
    {
      name: "Möbelmontering",
      description: "Per timme",
      price: "450 kr/tim"
    }
  ]
};

// New rental pricing data
export const RentalPricing = {
  columns: ["Hyresperiod", "Plan", "Personbil", "Minibuss"],
  data: [
    {
      period: "Dygn",
      plan: "Inkl. 100 km",
      car: "379 kr",
      van: "1 099 kr"
    },
    {
      period: "Dygn",
      plan: "Fri körsträcka",
      car: "529 kr",
      van: "1 099 kr"
    },
    {
      period: "Extra dygn",
      plan: "Fri körsträcka",
      car: "489 kr",
      van: "919 kr"
    },
    {
      period: "Weekend",
      plan: "Inkl. 300 km",
      car: "839 kr",
      van: "1 889 kr"
    },
    {
      period: "Weekend",
      plan: "Fri körsträcka",
      car: "1 049 kr",
      van: "2 399 kr"
    },
    {
      period: "Vecka",
      plan: "Inkl. 700 km",
      car: "1 899 kr",
      van: "4 799 kr"
    },
    {
      period: "Vecka",
      plan: "Fri körsträcka",
      car: "2 499 kr",
      van: "5 099 kr"
    },
    {
      period: "Månad",
      plan: "Inkl. 2100 km",
      car: "8 999 kr",
      van: "14 999 kr"
    }
  ],
  extraInfo: [
    {
      period: "Extra km",
      plan: null,
      car: "2,35 kr",
      van: "5,00 kr"
    },
    {
      period: "Självriskreducering",
      plan: null,
      car: "100 kr",
      van: "140 kr"
    }
  ],
  footerText: "Alla priser är inklusive moms. Självrisk 4000 kr. Körkortstid minst 1 år och minst 20 års ålder."
};