export const initialState = {
  products: {
    data: [ 
      {   
        image:
          'https://images.pexels.com/photos/3068579/pexels-photo-3068579.jpeg?cs=srgb&dl=pexels-maria-georgieva-3068579.jpg&fm=jpg',
        name: 'klocki',
        price: 50,
        text: 'Lorem ipsum lorem ipsum',      
      },
      {   
        image:
          'https://images.pexels.com/photos/3068579/pexels-photo-3068579.jpeg?cs=srgb&dl=pexels-maria-georgieva-3068579.jpg&fm=jpg',
        name: 'klocki',
        price: 50,
        text: 'Lorem ipsum lorem ipsum', 
      },
      {   
        image:
          'https://images.pexels.com/photos/3068579/pexels-photo-3068579.jpeg?cs=srgb&dl=pexels-maria-georgieva-3068579.jpg&fm=jpg',
        name: 'klocki',
        price: 50,
        text: 'Lorem ipsum lorem ipsum',       
      },
     
    ],
    loading: {
      active: false,
      error: false,
    },
    oneProduct: {},
  },
  cart: [],
  modal: false,
};
