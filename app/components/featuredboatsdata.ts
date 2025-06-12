export type FeaturedBoat = {
   imageSrc: string;
   title: string;
   price: string;
   logoSrc: string;
   details: {
      iconSrc: string;
      label: string;
      value: string;
   }[];
};

export const featuredBoats: FeaturedBoat[] = [
   {
      imageSrc: '/assets/boats/featuredboat1.png',
      title: 'Enduro 830',
      price: 'From 134 500 € (VAT excluded)',
      logoSrc: '/assets/nord.png',
      details: [
         {
            iconSrc: '/assets/Lightning.svg',
            label: 'Max. engine power',
            value: '500 HP',
         },
         {
            iconSrc: '/assets/drop.svg',
            label: 'Water tank',
            value: '12 GAL',
         },
         {
            iconSrc: '/assets/Rulericon.svg',
            label: 'Length Overall',
            value: '27.2 FT',
         },
      ],
   },
   {
      imageSrc: '/assets/boats/featuredboat2.png',
      title: 'FJORD 41 XP',
      price: 'From 134 500 € (VAT excluded)',
      logoSrc: '/assets/fjord-black.svg',
      details: [
         {
            iconSrc: '/assets/Lightning.svg',
            label: 'Max. engine power',
            value: '500 HP',
         },
         {
            iconSrc: '/assets/drop.svg',
            label: 'Water tank',
            value: '12 GAL',
         },
         {
            iconSrc: '/assets/Rulericon.svg',
            label: 'Length Overall',
            value: '27.2 FT',
         },
      ],
   },
]; 