class LightningCounter extends React.Component {
    state = {
        strikes: 0,
        msg: "번개 횟수",
    };

    timerTick = () => {
        this.setState({
            strikes: this.state.strikes + 100
        });
    }

    componentDidMount() {
        setInterval(this.timerTick, 1000);
    }

    render() {
        // let strikes = 0;    // 네이티브 JS와 다르게 render()의 멤버변수가 아님

        return (
            <h1>{this.state.msg} : {this.state.strikes}</h1>
        );
    }
}

class LightningCounterDisplay extends React.Component {
    render() {
        const divStyle = {
            width: 250,
            textAlign: "center",
            backgroundColor: "black",
            padding: 40,
            fontFamily: "sans-serif",
            color: "#999",
            borderRadius: 10
        };

        return (
            <div style={divStyle}>
                <LightningCounter/>
            </div>
        )
    }
}

ReactDOM.render(
    <LightningCounterDisplay/>,
    document.querySelector("#container")
);