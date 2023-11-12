
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

function App() {
    return (
        <>
        <Header/> 
        <main title="Hello">Hello React</main>
        <UserInfo/>
        <Footer/>
        <NewsInfo/>
        </>
    );
}


//class = className = "class1 class2 class3"
function Header(){
    return (
    <header className="header">
        <h1>Page title</h1>
    </header>
    );
}

function UserInfo(){
    const user = {
        name: 'Ivo', 
        age:20, 
        imgSrc: 'https://www.electricallicenserenewal.com/app-assets/images/user/12.jpg'
    };
//Style - це об'єкт
    const userNameStyle = {
        color: user.age>=18 ? 'blue' : 'green', 
        backgroundColor: 'yellow',
    };

    return (
        <article className="userCard">
        <h2 style={userNameStyle}>{user.name}</h2>
        <img src={user.imgSrc} alt={user.name} />
        </article>
    );
}

function Footer(){
    return (
        <footer>
            <p>F&Q</p>
            <p>About us</p>
            <p>Home</p>
        </footer>
    );
}

function NewsInfo() {
    const news = {
        title: 'Some news', 
        body: 'Something hapanned', 
        isGood: true, 
    };
    
    const newsBodyStyle = {
        backgroundColor: news.isGood ? "green" : "red",
    };
    
    return (
        <article>
            <h2 style={newsBodyStyle}>{news.body}</h2>
        </article>
    );
}



