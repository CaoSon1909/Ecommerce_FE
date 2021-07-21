var initialState = [
    {
        id: 1,
        name: 'Iphone 7 plus',
        image: 'https://www.xtmobile.vn/vnt_upload/product/Hinh_DT/Iphone/7-plus/thumbs/(600x600)_crop_7_plus_800x800.jpg',
        description: 'Sản phẩm của Apple',
        price: 500,
        inventory: 10,
        rating: 3
    },
    {
        id: 2,
        name: 'Samsung Galaxy S',
        image: 'https://vnreview.vn/image/10/57/105745.jpg',
        description: 'Sản phẩm của Samsung',
        price: 600,
        inventory: 20,
        rating: 5
    },
    {
        id: 3,
        name: 'Sony XPeria',
        image: 'https://www.sony.com.vn/image/93375262915162c04b81617da973a2c4?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF',
        description: 'Sản phẩm của Sony',
        price: 700,
        inventory: 30,
        rating: 4
    }
];

const products = (state = initialState, action) => {
    switch (action.type){
        default: return [...state];
    }
}

export default products;