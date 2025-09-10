const App=()=>{
return React.createElement(
    "div",
    {class:"test"},
    React.createElement(
        "h1",
        {},
        "chai chill aur react-version 18"
    )
)
}



const container=document.getElementById("root")

const root=ReactDOM.createRoot(container)
root.render(React.createElement(App))