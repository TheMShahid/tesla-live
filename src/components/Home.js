import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        discription="Order Online for Touchless Delivery"
        backgroundImag="model-s.jpg"
        leftButtonText="Custom Order"
        rightButtonText="Existing Inventory"
      />
      <Section
        title="Model Y"
        discription="Order Online for Touchless Delivery"
        backgroundImag="model-y.jpg"
        leftButtonText="Custom Order"
        rightButtonText="Existing Inventory"
      />
      <Section
        title="Model 3"
        discription="Order Online for Touchless Delivery"
        backgroundImag="model-3.jpg"
        leftButtonText="Custom Order"
        rightButtonText="Existing Inventory"
      />
      <Section
        title="Model X"
        discription="Order Online for Touchless Delivery"
        backgroundImag="model-x.jpg"
        leftButtonText="Custom Order"
        rightButtonText="Existing Inventory"
      />
      <Section
        title="Lowest Cost Solar Panels in America"
        discription="Money-back gurantee"
        backgroundImag="solar-panel.jpg"
        leftButtonText="Order Now"
        rightButtonText="Learn More"
      />
      <Section
        title="Solar for New Roofs"
        discription="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        backgroundImag="solar-roof.jpg"
        leftButtonText="Order Now"
        rightButtonText="Learn More"
      />
      <Section
        title="Accessories"
        discription=""
        backgroundImag="accessories.jpg"
        leftButtonText="Shop Now"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
