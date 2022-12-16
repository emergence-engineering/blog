import styled from "styled-components";
import React, { PropsWithChildren, useState } from "react";

import theme from "../../utils/theme";
import Modal from "../common/components/Modal";

export const HamburgerIcon = styled.i`
  color: ${theme.color.gray1};
  font-size: 2rem;
  cursor: pointer;
  :hover {
    color: ${theme.color.tertiary};
  }
`;

const MenuItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const HamburgerMenu = ({ children }: PropsWithChildren) => {
  const [isOpened, setIsOpened] = useState(false);
  function closeMenu() {
    setIsOpened(false);
  }
  function openMenu() {
    setIsOpened(true);
  }
  return (
    <div>
      <HamburgerIcon className="fas fa-bars" onClick={openMenu} />
      {isOpened ? (
        <Modal onLoseFocus={closeMenu} title="Menu" fillScreen>
          <MenuItemsContainer onClick={closeMenu}>
            {children}
          </MenuItemsContainer>
        </Modal>
      ) : null}
    </div>
  );
};
export default HamburgerMenu;
