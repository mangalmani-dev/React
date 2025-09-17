import { Component } from "react";

export class ErrorBoundry extends Component {
    constructor(props){
        super(props);
        this.state={hasError :false, message :""}
    }

    static getDerivedStateFromError(error){
   // update state so that next render show fallback UI
        return {hasError :true ,error :error.message}

    }

    componentDidCatch(error, info){
        console.error("caught errorBoundry", error ,info)
    }

    render(){
        if(this.state.hasError){
            <div>
              <h2> some thing went wrong here</h2>
              {this.state.message}
            </div>
        }
        return this.props.children
    }
}