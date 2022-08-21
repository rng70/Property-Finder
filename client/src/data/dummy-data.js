const DUMMY_PROPERTIES = [
    {
      id: 'p1',
      title: 'Kazipara Smart Appartment Domino',
      description:
        'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
      location: 'Somestreet 25, 12345 San Somewhereo',
      date: '2021-05-12',
      image: 'images/prop1.jpg',
      isFeatured: false,
    },
    {
      id: 'p2',
      title: 'Rightway Airport Plaza',
      description:
        "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
      location: 'New Wall Street 5, 98765 New Work',
      date: '2021-05-30',
      image: 'images/prop2.jpg',
      isFeatured: true,
    },
    {
      id: 'p3',
      title: 'Purbachal American City',
      description:
        'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
      location: 'My Street 12, 10115 Broke City',
      date: '2022-04-10',
      image: 'images/prop3.jpg',
      isFeatured: true,
    }
  ];
  
  export function getFeaturedEvents() {
    return DUMMY_PROPERTIES.filter((property) => property.isFeatured);
  }
  
  export function getAllProperties() {
    return DUMMY_PROPERTIES;
  }
 /* 
  export function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;
  
    let filteredEvents = DUMMY_EVENTS.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
  
    return filteredEvents;
  }
  
  export function getEventById(id) {
    return DUMMY_EVENTS.find((event) => event.id === id);
  }*/