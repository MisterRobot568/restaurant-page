// restaurant.js

const createRestaurantHomePage = () => {

    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content')

    //Create and append image elements
    const image = document.createElement('img');
    image.src = 'https://techcrunch.com/wp-content/uploads/2015/08/shutterstock_237882754.jpg?w=730&crop=1';
    image.height = '300';
    pageContent.appendChild(image);

    //Create and append headline element
    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to our restaurant!';
    pageContent.appendChild(headline);

    //create and append paragraph element
    const paragraph = document.createElement('p');
    paragraph.textContent = "We serve the best food in town. Come and taste it";
    pageContent.appendChild(paragraph);

    content.appendChild(pageContent)
}
export default createRestaurantHomePage;