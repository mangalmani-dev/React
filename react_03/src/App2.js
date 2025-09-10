import React from "https://esm.sh/react@19.1.0"
import ReactDOM from "https://esm.sh/react-dom@19.1.0/client"
const Chai = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {},props.name),
    React.createElement("p", {}, props.cost),
  ]);
};

const student=(props)=>{
    return React.createElement("div",{},
        [
            React.createElement("h1",{},props.name),
            React.createElement("h1",{},props.surname),
            React.createElement("h1",{},props.age),
            React.createElement("h1",{},props.height)

        ]
    )
}

const App=()=>{
return React.createElement(
    "div",
    {class:"test"},
    React.createElement(
        "h1",
        {},
        React.createElement("h1",{}, "chai varitions by chai code"),
        React.createElement(Chai, {
            name:"masala chai",
            cost:1000
        }),
        React.createElement(Chai,{
            name:"ice chai",
            cost:1000
        }),
        React.createElement(Chai,{
            name:"cold tea",
            cost:1000
        }),
        React.createElement(Chai,{
            name:"Black Tea",
            cosnt:1000
        })
    )
)
}

const App1=()=>{
return React.createElement(
    "div",
    {class:"test"},
    React.createElement(
        "h1",
        {},
        React.createElement("h1",{}, "Student Details"),
        React.createElement(student, {
           name:"mangalmai",
           surname:"Tiwari",
           age:20,
           height:5
        }),
        React.createElement(student,{
          name:"devesh",
           surname:"Tiwari",
           age:20,
           height:5
        }),
        React.createElement(student,{
             name:"vishal",
           surname:"Tiwari",
           age:20,
           height:5
        }),
        React.createElement(student,{
            name:"chandan",
           surname:"Tiwari",
           age:20,
           height:5
        })
    )
)
}



const container=document.getElementById("root")

const root=ReactDOM.createRoot(container)
root.render(React.createElement(App))