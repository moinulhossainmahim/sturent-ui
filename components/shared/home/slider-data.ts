export interface ISliderData {
  id: number;
  title: string;
  description: string;
  img: string
};

export const sliderData: ISliderData[] = [
  {
    id: 1,
    title: 'Find Your Perfect Room with stuRENT',
    description: "Browse through hundreds of listings tailored for university students. Whether you're looking for single rooms, sublets, or entire flats, stuRENT has got you covered. Use our advanced filters to find accommodations based on type, gender, and proximity to your university.",
    img: '/assets/slide-1.jpeg'
  },
  {
    id: 2,
    title: 'Easy and Secure Booking',
    description: "stuRENT ensures a seamless booking experience with secure payment options and verified listings. Create your account, verify your identity, and book your accommodation with confidence. Our platform supports Google Authentication for quick sign-ins.",
    img: '/assets/slide-2.jpeg'
  },
  {
    id: 3,
    title: 'Host Your Listing with Ease',
    description: "Are you a host looking to rent out a room? stuRENT allows you to list your property effortlessly. Upload photos, add detailed descriptions, and reach a wide audience of university students searching for accommodations.",
    img: '/assets/slide-3.jpeg'
  },
  {
    id: 4,
    title: 'Personalized Recommendations',
    description: "Get recommendations tailored to your preferences. Save your favorite listings to your wishlist and receive notifications for similar rooms. Our advanced algorithm helps you find the best match based on your search history and preferences.",
    img: '/assets/slide-4.jpeg'
  },
  {
    id: 5,
    title: 'Stay Connected with University Life',
    description: "stuRENT helps you stay close to your university. Filter listings by proximity to your campus, ensuring you never miss out on important events and activities. Enjoy the convenience of living near your university.",
    img: '/assets/slide-5.jpeg'
  },
];
