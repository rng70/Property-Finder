import { BuyHome, RentHome, FinanceHome } from '../static';

const IndexCardData = [
  {
    title: 'Buy a home',
    description:
      'We make it easy for you to browse homes. When you’re ready, you can also connect with a local agent, explore financing solutions, schedule home tours, and more.',
    buttonTitle: 'Search homes',
    href: 'homes',
    image: BuyHome,
  },
  {
    title: 'Finance a home',
    description:
      'We make it easy to take steps to find the right loan, so you can get the home you want',
    buttonTitle: 'Start now',
    href: 'loan',
    image: FinanceHome,
  },
  {
    title: 'Rent a home',
    description:
      "We're creating a seamless online experience - from buying to renting houses, commercial spaces and many more",
    buttonTitle: 'Find rentals',
    href: 'rents',
    image: RentHome,
  },
  {
    title: 'Rent a Space',
    description:
      "We're creating a seamless online experience - from buying to renting houses, commercial spaces and many more",
    buttonTitle: 'Find rentals',
    href: 'commercials',
    image: RentHome,
  },
  {
    title: 'Buy a land',
    description:
      'We make it easy for you to buy lands. When you’re ready, you can also connect with a local agent, explore financing solutions, schedule appointment with the owner.',
    buttonTitle: 'Search lands',
    href: 'lands',
    image: BuyHome,
  },
];

export function getIndexCardData(params) {
  return IndexCardData;
}
