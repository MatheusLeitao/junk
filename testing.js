const datas = {
    page: 1,
    per_page: 10,
    total: 57,
    total_pages: 6,
    data: {
        id: 1,
        first_name: 'John',
        last_name: 'Doe',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg',
        data: [
            {
                subscription: { items: { mecs: 'haha' } }
            }
        ]
    }
}


// Object Destructuring
const { data: { data: [{subscription: {items}}] } } = datas;

// console.log(first_name); // John
console.log(items)