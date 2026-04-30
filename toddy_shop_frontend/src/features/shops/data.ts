export const SHOP_DETAILS = [
  {
    id: "mullapanthal",
    name: "Mullapanthal",
    tagline: "A heritage taproom tucked in the heart of Kottayam's backwaters",
    district: "Kottayam",
    location: "Vaikom Road, Kottayam",
    rating: 4.9,
    totalReviews: 312,
    badge: "Hygiene Verified",
    badgeColor: "bg-green-600",
    tag: "OPEN NOW",
    isOpen: true,
    phone: "+91 94470 12345",
    established: "1978",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBDtRKnc2i9k7SEwueHB4tGtUJE4H7JgA8p6AWjdXjSEhsSSejTcjkfN6Z99ftEZ5ackKKtygL8KJZPjVCNfS_5cOb2K12dNfkkD9XlCpWLC5h8eOi1hzvnHAfmVJMcMu2n64nL8KULjhGKjEk2KYA_wSFoM4crYIX3Ff8P1YrdmwMzjjkwq1LjMIlXYhGQnLzySPW9Zv86vBoWJibZapYx_KOoNAzeiXqpKE5GOrdSIPRfdIodOik4xZm28U8GHHIIRJRpJPsbMykY",
    alt: "Traditional thatched roof toddy shop in a lush coconut grove",
    hours: [
      { day: "Monday – Friday", time: "10:00 AM – 10:00 PM" },
      { day: "Saturday", time: "9:00 AM – 11:00 PM" },
      { day: "Sunday", time: "9:00 AM – 10:00 PM" },
    ],
    amenities: [
      { icon: "local_parking", label: "Parking" },
      { icon: "wifi", label: "Free Wi-Fi" },
      { icon: "ac_unit", label: "AC Room" },
      { icon: "outdoor_grill", label: "Open Air Seating" },
      { icon: "wc", label: "Clean Restrooms" },
      { icon: "payments", label: "UPI Accepted" },
    ],
    menu: [
      {
        category: "Toddy",
        items: [
          { name: "Fresh Sweet Toddy", price: "₹60", description: "Freshly tapped, mildly sweet, best before noon" },
          { name: "Fermented Toddy", price: "₹80", description: "Classic afternoon toddy with a sharp kick" },
        ],
      },
      {
        category: "Seafood",
        items: [
          { name: "Karimeen Pollichathu", price: "₹320", description: "Pearl spot wrapped in banana leaf with Kerala masala" },
          { name: "Prawns Fry", price: "₹280", description: "Crispy fried prawns with coconut oil and green chillies" },
          { name: "Fish Curry", price: "₹180", description: "Traditional red fish curry cooked in earthen pot" },
        ],
      },
      {
        category: "Meat",
        items: [
          { name: "Beef Roast", price: "₹220", description: "Slow cooked beef with coconut slivers and curry leaves" },
          { name: "Duck Roast", price: "₹280", description: "Kerala-style duck in thick spicy brown gravy" },
          { name: "Chicken Curry", price: "₹200", description: "Country chicken in roasted coconut gravy" },
        ],
      },
      {
        category: "Sides",
        items: [
          { name: "Kappa (Tapioca)", price: "₹60", description: "Steamed tapioca served with chutney" },
          { name: "Puttu & Kadala", price: "₹80", description: "Steamed rice cake with black chickpea curry" },
        ],
      },
    ],
    reviews: [
      {
        id: 1,
        author: "Vishnu Raj",
        avatar: "VR",
        rating: 5,
        date: "Mar 2024",
        text: "Best Karimeen Pollichathu I've had in Kottayam. The toddy is fresh and the ambience is pure Kerala nostalgia. A must-visit for anyone passing through.",
      },
      {
        id: 2,
        author: "Meera Nair",
        avatar: "MN",
        rating: 5,
        date: "Feb 2024",
        text: "Came here with family. The fish curry is outstanding — perfectly balanced spices. The staff is warm and the hygiene is genuinely top-notch.",
      },
      {
        id: 3,
        author: "Arun Thomas",
        avatar: "AT",
        rating: 4,
        date: "Jan 2024",
        text: "Authentic toddy shop experience. The beef roast is exceptional. Parking can be a little tight on weekends, but worth the visit.",
      },
    ],
  },
  {
    id: "karimpumkala",
    name: "Karimpumkala",
    tagline: "Famous for its backwater views and legendary Karimeen preparation",
    district: "Alappuzha",
    location: "Kainakary, Alappuzha",
    rating: 4.8,
    totalReviews: 267,
    badge: "Top Rated",
    badgeColor: "bg-primary-container",
    tag: "FAMOUS FOR FOOD",
    isOpen: true,
    phone: "+91 94470 23456",
    established: "1985",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAJu8Bvwb_h-7hVTXzQFamXklqT_2UuLbWLgpOTZK0DtmB1VYWa0A1ttTWVAA8tuOxoRhVt8kx_aJ9OLFaIUem6Md_mMoOJTikqY27G2ZGLp0Q805mIy2g8232EeBq6QKLc38vF7neFvviE35kcHoULlEQXPZsUgLSD3lYFgt7ndr7PUo3WfgxhLwlHFVjFpEtHuEsf3Nyql-Y_oYqiTRJ7M85Hpvog4DXU0BwSsfakArhwWh_DH2sHRm78Xh9b_aHqkePsOQ02G8c",
    alt: "Aerial view of traditional backwater toddy shop with red tiled roof",
    hours: [
      { day: "Monday – Saturday", time: "10:00 AM – 9:30 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    amenities: [
      { icon: "directions_boat", label: "Boat Access" },
      { icon: "outdoor_grill", label: "Open Air Seating" },
      { icon: "payments", label: "UPI Accepted" },
      { icon: "wc", label: "Clean Restrooms" },
    ],
    menu: [
      {
        category: "Toddy",
        items: [
          { name: "Sweet Toddy", price: "₹60", description: "Morning tapped, mildly sweet" },
          { name: "Fermented Toddy", price: "₹80", description: "Afternoon strength toddy" },
        ],
      },
      {
        category: "Seafood",
        items: [
          { name: "Karimeen Pollichathu", price: "₹340", description: "Signature dish — rivalling any restaurant in Kerala" },
          { name: "Crab Roast", price: "₹380", description: "Mud crab in spicy masala, best in Alappuzha" },
        ],
      },
    ],
    reviews: [
      {
        id: 1,
        author: "Sree Kumar",
        avatar: "SK",
        rating: 5,
        date: "Apr 2024",
        text: "The Karimeen here is the best I've ever had. Came by boat — worth every minute of the journey.",
      },
      {
        id: 2,
        author: "Divya Menon",
        avatar: "DM",
        rating: 5,
        date: "Mar 2024",
        text: "Authentic backwater experience. The setting by the canal is breathtaking. Crab roast is a must order.",
      },
    ],
  },
  {
    id: "puzhayoram",
    name: "Puzhayoram",
    tagline: "Riverside dining with the freshest catch from Periyar every morning",
    district: "Ernakulam",
    location: "Nettoor, Ernakulam",
    rating: 4.7,
    totalReviews: 198,
    badge: null,
    badgeColor: "",
    tag: "RIVER VIEW",
    isOpen: false,
    phone: "+91 94470 34567",
    established: "1992",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDQ73YOD94h6groYgqNCi1NHTRapRDwQgptbzZr_0GF8Y3wHaPJcau_twmPalbxA04lxKuOgsORakqWQ0jMG8FqDJ5PdBNilyCgyd6yW0OSu-DavnAHFqT88GYGnjp1jwsA_2ijjxomiCwNxDaF1bibjRb5Amqiu6fnrAoP7Lry66Tscr8w5soarY8y6wntrvCTp294qhPkBM5P3ulR7vsK7TEfUZt3l95m-atUn4buSF5ChD6UyMVPzzjDAXHqp0JRSe3VLOVrRUs",
    alt: "Interior of a rustic toddy shop with wooden benches and palm leaf decor",
    hours: [
      { day: "Tuesday – Sunday", time: "11:00 AM – 9:00 PM" },
      { day: "Monday", time: "Closed" },
    ],
    amenities: [
      { icon: "local_parking", label: "Parking" },
      { icon: "outdoor_grill", label: "River View Seating" },
      { icon: "payments", label: "UPI Accepted" },
    ],
    menu: [
      {
        category: "Toddy",
        items: [
          { name: "Sweet Toddy", price: "₹60", description: "River-cooled, freshly tapped" },
        ],
      },
      {
        category: "Seafood",
        items: [
          { name: "River Fish Curry", price: "₹160", description: "Daily fresh catch from Periyar" },
          { name: "Prawns Roast", price: "₹260", description: "Dry roasted Kerala prawns" },
        ],
      },
    ],
    reviews: [
      {
        id: 1,
        author: "Anoop Varghese",
        avatar: "AV",
        rating: 5,
        date: "Feb 2024",
        text: "The river view alone is worth the visit. Fish curry is freshness personified.",
      },
    ],
  },
  {
    id: "kiliroor",
    name: "Kiliroor Shaap",
    tagline: "Over four decades of unbroken toddy shop tradition in old Kottayam",
    district: "Kottayam",
    location: "Kiliroor, Kottayam",
    rating: 4.6,
    totalReviews: 145,
    badge: null,
    badgeColor: "",
    tag: "OLD HERITAGE",
    isOpen: true,
    phone: "+91 94470 45678",
    established: "1971",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBebhMv23641swdu2vkIIXss1Z0c4GBo7JRyaGVF6_lpLN8_R-7gcKL62glqGN4Ie4v56nm08aqHKzM609BJKwVGVni80otA9w5FtMAsi5gyH3rC6FpmRBF8e-jAh8OIWb9flNCjMkWPNisIVAyppsfnue7zAneOkrnxQ45TADVy_6uVImrnH0M317yjZGTvIiB01F6Qg0Z3rehDxXuRmCLtIjU0-N39UWpwroRFq4yZzWSfi2_9QzAlAY9xvhiRQI7G-SVpUtit1Q",
    alt: "Close up of a traditional earthen pot with toddy and spices",
    hours: [
      { day: "Monday – Sunday", time: "10:00 AM – 9:00 PM" },
    ],
    amenities: [
      { icon: "outdoor_grill", label: "Open Air Seating" },
      { icon: "payments", label: "Cash Only" },
      { icon: "wc", label: "Restrooms" },
    ],
    menu: [
      {
        category: "Toddy",
        items: [
          { name: "Traditional Toddy", price: "₹50", description: "Old-school earthen pot toddy" },
        ],
      },
      {
        category: "Food",
        items: [
          { name: "Kappa & Meen Curry", price: "₹120", description: "Classic tapioca with spicy fish curry" },
          { name: "Beef Fry", price: "₹180", description: "Dry fried beef with coconut slivers" },
        ],
      },
    ],
    reviews: [
      {
        id: 1,
        author: "Rajan Pillai",
        avatar: "RP",
        rating: 5,
        date: "Jan 2024",
        text: "The oldest toddy shop I've been to. The earthen pot toddy takes you back in time. A piece of living history.",
      },
    ],
  },
] as const;

export type ShopDetail = (typeof SHOP_DETAILS)[number];
