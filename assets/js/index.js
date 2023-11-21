
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

function App() {
    return (
        <>
            <UserCardInfo/>
            <UserStatistics/>
        </>
    );
}

function UserCardInfo() {
    const user = {
        name: 'Emma Watson',
        nick: '@EmWatson',
        gender: 'male',
        imgSrc: 'https://c4.wallpaperflare.com/wallpaper/656/195/812/emma-watson-dress-wallpaper-preview.jpg',
    } ;

    const isGender = {
        color: user.gender === 'male' ? 'red' : 'green',
        backroundColor: 'yellow',
    };

    return (
        <article className="userCard">
            <img src="{user.imgSrc}" alt="user.name" />
            <p>{user.gender}</p>
            <p>{user.nick}</p>
            <h1 style={isGender}>{user.name}</h1>
        </article>
    );
}

function UserStatistics() {
    const statistics = {
        tweets: '1337',
        followers: '561',
        following: '718',
    };

   
    return (
        <div className="statistics">
            <div className="container1">
                <div className="col1">
                    <span>Tweets</span>
                    <span>{statistics.tweets}</span>
                </div>   
            </div>
            <div className="container2">
                <div className="col1">
                    <span>Followers</span>
                    <span>{statistics.followers}</span>
                </div>
            </div>
            <div className="container3">
                <div className="col1">
                <span>Following</span>
                <span>{statistics.following}</span>
                </div>
            </div>
        </div>
    );
}


   


//class = className = "class1 class2 class3"




