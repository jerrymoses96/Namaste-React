import React from "react";
import ReactDOM from "react-dom/client";

// header component
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="https://media.istockphoto.com/id/1138202866/vector/banner-for-breakfast-time-with-fork-and-knife.jpg?s=612x612&w=0&k=20&c=ZmRCbQSnObZf8ETLp27ZKhdaSCXgXBV2-U9McR8DkPk=" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const resList = [
  {
    info: {
      id: "250361",
      name: "Pizza Hut",
      cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
      locality: "Edapally - Panvel Highway",
      areaName: "Kannur",
      costForTwo: "₹300 for two",
      cuisines: ["Pizzas"],
      avgRating: 4,
      parentId: "721",
      avgRatingString: "4.0",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 1.3,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        lastMileTravelString: "1.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-11 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹120 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/pizza-hut-edapally-panvel-highway-kannur-kannur-250361",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "411529",
      name: "Komalavilas Pure Veg Hotel",
      cloudinaryImageId: "hvmdeh4p1inptsm4nflo",
      locality: "Ballard Road",
      areaName: "Kannur",
      costForTwo: "₹150 for two",
      cuisines: ["South Indian", "Kerala", "North Indian"],
      avgRating: 4.4,
      veg: true,
      parentId: "453439",
      avgRatingString: "4.4",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 1.5,
        serviceability: "SERVICEABLE",
        slaString: "20 mins",
        lastMileTravelString: "1.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-10 21:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹120 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/komalavilas-pure-veg-hotel-ballard-road-kannur-kannur-411529",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "283994",
      name: "MRA Restaurant And Bakery",
      cloudinaryImageId: "akcxxdsmuhyhsldx31zi",
      locality: "MK Road",
      areaName: "Railway Station",
      costForTwo: "₹350 for two",
      cuisines: ["Continental", "Kerala", "Chinese", "Arabian"],
      avgRating: 4.3,
      parentId: "140612",
      avgRatingString: "4.3",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 1.5,
        serviceability: "SERVICEABLE",
        slaString: "24 mins",
        lastMileTravelString: "1.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-10 22:15:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹120 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/mra-restaurant-and-bakery-mk-road-railway-station-kannur-283994",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "347388",
      name: "Westind burgers",
      cloudinaryImageId: "wfz1rgtwkdojgrc9ehml",
      locality: "SN Park road",
      areaName: "SN Park",
      costForTwo: "₹250 for two",
      cuisines: ["Burgers", "Beverages", "Pastas"],
      avgRating: 4.5,
      parentId: "225679",
      avgRatingString: "4.5",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 1.9,
        serviceability: "SERVICEABLE",
        slaString: "22 mins",
        lastMileTravelString: "1.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-10 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹120 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/westind-burgers-road-sn-park-kannur-347388",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "207144",
      name: "Citapani Express",
      cloudinaryImageId: "whphfop2vopdbxdn8v6x",
      locality: "Puzhathi Housing Colony",
      areaName: "Caltex",
      costForTwo: "₹200 for two",
      cuisines: ["Arabian", "American", "Biryani"],
      avgRating: 4,
      parentId: "387428",
      avgRatingString: "4.0",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 17,
        lastMileTravel: 0.8,
        serviceability: "SERVICEABLE",
        slaString: "17 mins",
        lastMileTravelString: "0.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-11 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹120 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/citapani-express-puzhathi-housing-colony-caltex-kannur-207144",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "390778",
      name: "Pulari Restaurant",
      cloudinaryImageId: "ycufdm38buar431iewre",
      locality: "Puzhathi Housing Colony",
      areaName: "South Bazar",
      costForTwo: "₹250 for two",
      cuisines: ["Seafood", "Chinese", "Indian", "Kerala"],
      avgRating: 4.4,
      parentId: "253022",
      avgRatingString: "4.4",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 0.8,
        serviceability: "SERVICEABLE",
        slaString: "28 mins",
        lastMileTravelString: "0.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-10 22:20:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹120 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/pulari-restaurant-puzhathi-housing-colony-south-bazar-kannur-390778",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "207148",
      name: "Cita Pani",
      cloudinaryImageId: "jeb98cjs32auzprylpsa",
      locality: "SN Park road",
      areaName: "SN Park",
      costForTwo: "₹200 for two",
      cuisines: ["Chinese", "Arabian", "Barbecue"],
      avgRating: 4,
      parentId: "20233",
      avgRatingString: "4.0",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 1.9,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        lastMileTravelString: "1.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-10 22:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹120 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/cita-pani-road-sn-park-kannur-207148",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "522381",
      name: "Falooda Nation",
      cloudinaryImageId: "bb307b38b4babf5b2ba9f6461c718ae7",
      locality: "Kannur-Valapattanam Road",
      areaName: "Kannur",
      costForTwo: "₹300 for two",
      cuisines: ["Desserts", "Ice Cream", "Beverages"],
      avgRating: 4.3,
      veg: true,
      parentId: "20231",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 18,
        lastMileTravel: 1.8,
        serviceability: "SERVICEABLE",
        slaString: "18 mins",
        lastMileTravelString: "1.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-10 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹120 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/falooda-nation-valapattanam-road-kannur-kannur-522381",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "357282",
      name: "Burger Lounge",
      cloudinaryImageId: "jd0sgfrzqf0rff1otklf",
      locality: "PS Road",
      areaName: "SN Park",
      costForTwo: "₹250 for two",
      cuisines: ["Burgers", "Beverages"],
      avgRating: 4.4,
      parentId: "12757",
      avgRatingString: "4.4",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 1.9,
        serviceability: "SERVICEABLE",
        slaString: "21 mins",
        lastMileTravelString: "1.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-10 22:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹120 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/burger-lounge-ps-road-sn-park-kannur-357282",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "261202",
      name: "Chicking",
      cloudinaryImageId: "86f52324ecee5fc94cbf63c4a568b672",
      locality: "Capitol Mall",
      areaName: "Kannur",
      costForTwo: "₹350 for two",
      cuisines: [
        "Snacks",
        "Grill",
        "Fast Food",
        "American",
        "Pizzas",
        "Mexican",
        "Beverages",
      ],
      avgRating: 4.1,
      parentId: "251",
      avgRatingString: "4.1",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 1,
        serviceability: "SERVICEABLE",
        slaString: "24 mins",
        lastMileTravelString: "1.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-10 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹120 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/chicking-capitol-mall-kannur-kannur-261202",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "406932",
      name: "Baskin Robbins - Ice Cream Desserts",
      cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
      locality: "Ballard Road",
      areaName: "Kannur",
      costForTwo: "₹250 for two",
      cuisines: ["Desserts", "Ice Cream"],
      avgRating: 4.4,
      veg: true,
      parentId: "5588",
      avgRatingString: "4.4",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 1.7,
        serviceability: "SERVICEABLE",
        slaString: "21 mins",
        lastMileTravelString: "1.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-10 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹120 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-ballard-road-kannur-kannur-406932",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "199237",
      name: "KFC",
      cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
      locality: "Auto Stand Road",
      areaName: "Kannur",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      avgRating: 4.3,
      parentId: "547",
      avgRatingString: "4.3",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 18,
        lastMileTravel: 2,
        serviceability: "SERVICEABLE",
        slaString: "18 mins",
        lastMileTravelString: "2.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-10 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹120 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/kfc-auto-stand-road-kannur-kannur-199237",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "221225",
      name: "Ibaco",
      cloudinaryImageId: "dcys8qphehizrcjz57zc",
      locality: "SN Park Road",
      areaName: "Kannur",
      costForTwo: "₹200 for two",
      cuisines: ["Desserts", "Ice Cream"],
      avgRating: 4.5,
      veg: true,
      parentId: "3481",
      avgRatingString: "4.5",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 17,
        lastMileTravel: 1.6,
        serviceability: "SERVICEABLE",
        slaString: "17 mins",
        lastMileTravelString: "1.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-10 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹120 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/ibaco-sn-park-road-kannur-kannur-221225",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "418595",
      name: "A One Hotel",
      cloudinaryImageId: "ccyexp4sbe1cahxs79sx",
      locality: "Thana - Anayidukku Road",
      areaName: "Thana",
      costForTwo: "₹200 for two",
      cuisines: ["South Indian", "Kerala", "Seafood"],
      avgRating: 4.3,
      parentId: "24754",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 16,
        lastMileTravel: 1.6,
        serviceability: "SERVICEABLE",
        slaString: "16 mins",
        lastMileTravelString: "1.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-10 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹120 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/a-one-hotel-anayidukku-road-thana-kannur-418595",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "365627",
      name: "Domino's Pizza",
      cloudinaryImageId: "wikglulyo6dbbe1jy9hh",
      locality: "MK Road",
      areaName: "Kannur",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.6,
      parentId: "2456",
      avgRatingString: "4.6",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 25,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-10 22:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹120 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/dominos-pizza-mk-road-kannur-kannur-365627",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "407741",
      name: "Hurry Berry",
      cloudinaryImageId: "zubw03oxruqwx9hxg3tq",
      locality: "Mahatma Gandhi Road",
      areaName: "Kannur",
      costForTwo: "₹200 for two",
      cuisines: ["Burgers", "Desserts", "Beverages", "Ice Cream"],
      avgRating: 4.2,
      parentId: "247542",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 1.5,
        serviceability: "SERVICEABLE",
        slaString: "29 mins",
        lastMileTravelString: "1.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-10 23:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹120 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/hurry-berry-mahatma-gandhi-road-kannur-kannur-407741",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "630159",
      name: "Smoke House Barbeque Co",
      cloudinaryImageId: "j1fydmfzeeoajpbe8ad5",
      locality: "SN Park road",
      areaName: "SN Park",
      costForTwo: "₹283 for two",
      cuisines: ["Arabian", "Barbecue", "Burgers"],
      avgRating: 4.2,
      parentId: "376372",
      avgRatingString: "4.2",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 1.6,
        serviceability: "SERVICEABLE",
        slaString: "23 mins",
        lastMileTravelString: "1.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-10 23:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹120 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/smoke-house-barbeque-co-road-sn-park-kannur-630159",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "283974",
      name: "Hotel Soft",
      cloudinaryImageId: "gwbt9qqfl7t6jzowqsb4",
      locality: "Fort Road",
      areaName: "Fort Road",
      costForTwo: "₹300 for two",
      cuisines: ["Biryani", "Chinese"],
      avgRating: 4.3,
      parentId: "102518",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 17,
        lastMileTravel: 1.6,
        serviceability: "SERVICEABLE",
        slaString: "17 mins",
        lastMileTravelString: "1.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-10 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹120 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/hotel-soft-fort-road-kannur-283974",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "207122",
      name: "Raandhal",
      cloudinaryImageId: "mid1rhnbvw1oiozxl92r",
      locality: "South Bazaar",
      areaName: "Talap",
      costForTwo: "₹200 for two",
      cuisines: ["Chinese", "Arabian", "North Indian", "Kerala"],
      avgRating: 4.2,
      parentId: "164029",
      avgRatingString: "4.2",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 1.8,
        serviceability: "SERVICEABLE",
        slaString: "24 mins",
        lastMileTravelString: "1.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-10 22:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹120 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/raandhal-south-bazaar-talap-kannur-207122",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "246173",
      name: "Cabane Bambou",
      cloudinaryImageId: "wxvdffu6tswhch3yetnm",
      locality: "Pamban Madhavan Road",
      areaName: "Talap",
      costForTwo: "₹350 for two",
      cuisines: ["Chinese", "North Indian", "Ice Cream", "Biryani"],
      avgRating: 4.2,
      parentId: "52045",
      avgRatingString: "4.2",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 2.4,
        serviceability: "SERVICEABLE",
        slaString: "26 mins",
        lastMileTravelString: "2.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-01-10 22:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹120 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/cabane-bambou-pamban-madhavan-road-talap-kannur-246173",
      type: "WEBLINK",
    },
  },
];
// restaurant cards component

const RestaurantCard = (props) => {
  const { resData } = props;
  const {cloudinaryImageId,name,cuisines} = resData?.info;

  return (
    <div className="res-card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="restaurant img"
      />
      <h2>{name}</h2>
      <p>{cuisines.join(", ")}</p>
      <h5>4.4 stars</h5>
      <h5>38 minutes</h5>
      <button className="btn">Add to Cart</button>
    </div>
  );
};

// body component

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="search" placeholder="Search for food or Restaurents" />
        <button className="search-button">Search</button>
      </div>
      <div className="restaurant-container">
        {
          resList.map(restaurant=>{
            return(
              <RestaurantCard key={restaurant.info.id} resData ={restaurant}/>
            )
            

          })


        }
      </div>
    </div>
  );
};

// main container div
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
