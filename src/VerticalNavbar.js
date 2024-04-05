import React from 'react';
import styled from 'styled-components';

const VerticalNavbarContainer = styled.nav`
  /* Styles for the overall navbar container */
  display: flex;
  flex-direction: column; /* Stack items vertically */
  width: 250px; /* Adjust width as desired */
  height: 100vh; /* Set full viewport height */
  background-color: #f0f0f0; /* Adjust background color */
  /* Add padding and border as needed */
`;

const NavItem = styled.a`
  /* Styles for individual navigation items */
  /* Consider using a button element with hover effects for interactivity */
  padding: 15px;
  text-decoration: none;
  color: #333; /* Adjust text color */
  font-weight: bold; /* Adjust font weight */
  border-bottom: 1px solid #ddd; /* Add border between items */
  cursor: pointer; /* Indicate clickable behavior */
  transition: background-color 0.2s ease; /* Add hover effect (optional) */

  &:hover {
    background-color: #eee; /* Optional hover background color */
  }
`;

const VerticalNavbar = () => {
    return (
        <VerticalNavbarContainer>
            <NavItem href="#">Home</NavItem>
            <NavItem href="#">About</NavItem>

            {/* Add more navigation items as needed */}
        </VerticalNavbarContainer>
    );
};

export default VerticalNavbar;
