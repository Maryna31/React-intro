
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

function App() {
    const isLight = true;
    return (
        <>
        <ThemeButton isLightTheme={isLight}/>
        </>
    );
}

function ThemeButton(props){
    const {isLightTheme} = props;

    const buttonStyle ={
        color: isLightTheme ?'black':'white' ,
        backgroundColor: isLightTheme ? 'white' : 'black' ,
    }
    return (
    <button style={buttonStyle}>
        Switch to {isLightTheme ? 'dark' : 'light'}
        </button>
    );
}

//class = className = "class1 class2 class3"




