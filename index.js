'use strict';

// Navigation Bar & Content Section

class Navbar extends React.Component {
    render() {
        return (
            <ul>
                <li>Link 1</li>
                <li>Link 2</li>
                <li>Link 3</li>
                <li>Link 4</li>
                <li>Link 5</li>
            </ul>
        );
    }
}

class Content extends React.Component {
    render() {
        return (
            <div>
                <h1>Content</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quidem ipsam odio nam velit
                    reprehenderit vitae blanditiis, odit deleniti, voluptatem ratione, at earum. Sint assumenda at
                    minima, eaque praesentium illum? Aliquid esse animi expedita omnis ab iste saepe similique tempora
                    recusandae in eius quidem nobis, cupiditate eveniet fugiat quibusdam voluptatibus velit excepturi
                    labore hic dolorum aliquam? Obcaecati consequatur assumenda beatae.
                </p>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
    <div>
        <Navbar />
        <Content />
        <Navbar />
    </div>
);
console.log(root);
