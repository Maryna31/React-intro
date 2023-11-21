
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
        gender: 'female',
        photo: 'https://c4.wallpaperflare.com/wallpaper/656/195/812/emma-watson-dress-wallpaper-preview.jpg',
    } ;

    const userGender = {
        color: user.gender ? 'green' : 'blue',
    };

    return (
        <article className="userCard">
            <img src={user.photo} alt="user.name" />
            <p>{user.nick}</p>
            <h1 style={userGender}>{user.name}</h1>
        </article>
    );
}

function UserStatistics() {
    const statistics = {
        tweets: '1337',
        followers: '561',
        following: '718',
    };

    const statisticsStyle={display: 'flex',};
    

    return (
        <div className="userCard statistics">
            <div className="container1">
                <div>
                    <span style={statisticsStyle}>Tweets</span>
                    <span>{statistics.tweets}</span>
                </div> 
            </div>
            <div className="container2">
                <div>
                    <span style={statisticsStyle}>Followers</span>
                    <span>{statistics.followers}</span>
                </div>
            </div>
            <div className="container3">
                <div>
                <span style={statisticsStyle}>Following</span>
                <span>{statistics.following}</span>
                </div>
            </div>
        </div>
    );
}


   


//class = className = "class1 class2 class3"




