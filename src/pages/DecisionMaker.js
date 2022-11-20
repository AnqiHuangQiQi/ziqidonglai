import React, {Component} from "react";
import styled from "styled-components";
import BottomBar from "../components/BottomBar"
import BGImage from "../images/purplesky.jpeg";

const Title = styled.header`
    position:fixed;
    padding:0;
    text-align: center;
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height: 10%;
    font-size: 35px;
    font-weight: 600;
    background-image: linear-gradient(to left, #553c9a, #b393d3);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    text-shadow: 2px 2px #FFFFFF;
`;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: skyblue;
    background-size:cover;
`;

const initialList = [];

const DecisionMaker = () => {
    const [list, setList] = React.useState(initialList);
    const [name, setName] = React.useState('');
    const [result, setResult] = React.useState("");

    function handleAdd() {
        const newList = list.concat({ name });

        setList(newList);
        setName("");
    }

    function handleChange(event) {
        setName(event.target.value);
    }

    function handleDecision() {
        var size = list.length;
        var index = Math.floor(Math.random() * size);

        var res = list.at(index);
        console.log(res);

        setResult({ res });

        console.log(result);
    }

    function handleStart() {
        setList([]);
        setName("");
    }

        return (
            <div>
                <Title>Decision Maker</Title>
                <Wrapper>
                <div class = "Add-Option">
                    <input type="text" value={name} onChange={handleChange} />
                    <button class = "Add-option-button" type="button" onClick={() => handleAdd()}>
                    Add Option
                    </button>
                </div>
                <ul>
                    {list.map((item) => (
                    <li key={item.id}>{item.name}</li>
                    ))}
                </ul>

                <button onClick={handleDecision}>
                    Make Decision
                </button>
                <button onClick={handleStart}>
                    Start a New Decision
                </button>
                <p>{ result }</p>
                <div>
                    How to use:
                    1 Type in your options and click the "Add Option" button<hr />
                    2 Click on "Make Decision"<hr />
                    3 Click on "Start a New Decision" to clear current options<hr />
                </div>
                </Wrapper>
                <BottomBar />
            </div>
        );
}

export default DecisionMaker;