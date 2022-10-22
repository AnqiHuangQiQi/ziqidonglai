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
    background-image: url('${BGImage}');
    width: 100%;
    height: 700px;
    background-size:cover;
    background-repeat: no-repeat;
`;

class TheBookOfAnswers extends Component {
    // constructor (props) {
    //     super(props);
    // }
    render() {
        return (
            <div>
                <Title>The Book of Answers</Title>
                <Wrapper></Wrapper>
                <BottomBar />
            </div>
        );
    }
}

export default TheBookOfAnswers;