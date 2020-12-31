import bcrypt from 'bcryptjs';
const data = {

    users: [
        {
            name:'Dung',
            email:'admin@example.com',
            password: bcrypt.hashSync('1234',8),
            isAdmin: true,
        },
        {
            name:'Nam',
            email:'user@example.com',
            password: bcrypt.hashSync('1234',8),
            isAdmin: true,
        },
    ],

    products : [
        {
           
            name :' ao khoac dai',
            category :'shirts',
            image : '/image/product-8.jpg',
            price:120,
            countInStock: 10,
            brand : 'nike',
            rating :4.5,
            numReviews :10,
            description: 'hight product',

        },
        {
          
            name :' ao khoac ngan co',
            category :'shirts',
            image : '/image/product-2.jpg',
            price:12000,
            countInStock: 15,
            brand : 'polo',
            rating :5,
            numReviews :15,
            description: 'hight product',

        },
        {
         
            name :' ao dai',
            category :'shirts',
            image : '/image/product-3.jpg',
            price:1000,
            countInStock: 10,
            brand : 'puma',
            rating :5,
            numReviews :10,
            description: 'hight product',

        },
        {
           
            name :' quan dai',
            category :'shirts',
            image : '/image/product-4.jpg',
            price:1500,
            countInStock: 5,
            brand : 'jeans',
            rating  :5,
            numReviews :5,
            description: 'hight product',

        },
        {
      
            name :' ao tay dai',
            category :'shirts',
            image : '/image/product-5.jpg',
            price:5020,
            countInStock: 18,
            brand : 'nike',
            rating : 4.5,
            numReviews :17,
            description: 'hight product',

        },
        {
         
            name :' ao tay ngan',
            category :'shirts',
            image : '/image/product-6.jpg',
            price:7000,
            countInStock: 20,
            brand : 'addidas',
            rating : 4,
            numReviews :7,
            description: 'hight product',

        },
    ],
}
export default data;