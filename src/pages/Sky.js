import React, {Component} from "react";
import styled from "styled-components";

const PageWrapper = styled.div`
  position:fixed;
  padding:0;
  margin:0;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(-220deg, #5AB9EA, #5680E9 65%, #5AB9EA 15%);
`;

class Sky extends Component {
    // constructor (props) {
    //     super(props);
    // }
    render() {
        return (
            <PageWrapper>Sky Page</PageWrapper>
        );
    }
}

export default Sky;