export const SelectTravellerList = [
  {
    id: 1,
    title: "Just Me",
    desc: "A sole traveler in exploration",
    icon: "✈️",
    people: "1 people",
  },
  {
    id: 2,
    title: "A Couple",
    desc: "Two traveller in tandem",
    icon: "👩‍❤️‍👨",
    people: "2 people",
  },
  {
    id: 3,
    title: "Family",
    desc: "A group of fun loving adventurists",
    icon: "👪",
    people: "3 to 5",
  },
  {
    id: 4,
    title: "Friends",
    desc: "A bunch of thrill-seekers",
    icon: "🏖️",
    people: "4",
  },
];

export const SelectBudgetOptions = [
  {
    id: 1,
    title: "Cheap",
    desc: "Stay conscious of costs",
    icon: "💵",
  },
  {
    id: 2,
    title: "Moderate",
    desc: "Keep cost on the average",
    icon: "💰",
  },
  {
    id: 3,
    title: "Luxury",
    desc: "Don't worry about cost",
    icon: "💸",
  },
];

export const AI_PROMPT =
  "Generate Travel plan for Location: {location}, for {totalDays} Days and {totalNights} Night for {traveller} with a {budget} budget with a Flight Details, Flight Price with booking url, Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and places to visit nearby with PlaceName, Place Details, Place Image Url, Geo Coordinates, Ticket Pricing, time to travel each of the location for {totalDays} Days and {totalNights} night with each day plan with best time to visit in JSON format";
