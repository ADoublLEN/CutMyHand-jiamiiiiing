import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Jiaming',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Hanyue',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],

  products: [
    {
      //_id: '1',
      name: 'AM65Less',
      slug: 'am65less',
      image: '/images/am65.jpg',
      brand: 'Angry Miao',
      category: '65',
      description: 'A AM65less keyboard',
      price: 400,
      countInStock: 0,
      rating: 4.5,
      numReviews: 10,
    },
    {
      //_id: '2',
      name: 'Space65',
      slug: 'space65',
      category: '65',
      image: '/images/space65.jpg',
      price: 300,
      countInStock: 100,
      brand: 'Gray Studio',
      rating: 4.5,
      numReviews: 14,
      description: 'A Space65 keyboard',
    },
    {
      //_id: '3',
      name: 'meta75',
      slug: 'meta75',
      category: '80',
      image: '/images/meta75.jpg',
      price: 500,
      countInStock: 1,
      brand: 'Matrix Lab',
      rating: 5,
      numReviews: 20,
      description: 'A Meta75 keyboard',
    },
    {
      //_id: '4',
      name: 'Am AFA',
      slug: 'am-afa',
      category: '75',
      image: '/images/amafa.jpg',
      price: 600,
      countInStock: 1,
      brand: 'Angry Miao',
      rating: 4.0,
      numReviews: 100,
      description: 'A AmAFA keyboard',
    },
  ],
};

export default data;
