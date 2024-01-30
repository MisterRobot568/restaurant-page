// create the menu page for the site

const createMenuPage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div')

    // create the text content for the contact page
    const paragraph = document.createElement('p');
    paragraph.textContent = 'This is the Menu page. Does it work?'

    // add paragraph to pageContent
    pageContent.appendChild(paragraph);

    // add the div to the content section of the page
    content.appendChild(pageContent)
}

export default createMenuPage