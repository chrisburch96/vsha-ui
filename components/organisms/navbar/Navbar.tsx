import { FC, useEffect, useState } from "react";

import {
  SwitchTransition,
  Transition,
  TransitionStatus,
} from "react-transition-group";
import styled from "styled-components";

import { CompactHeader, WelcomeHeader } from "components/organisms";

const transitionOffset = 50;

interface IHeaderContainerProps {
  compact: boolean;
  state: TransitionStatus;
}

const HeaderContainer = styled.div<IHeaderContainerProps>`
  display: ${({ state }) => (state === "exited" ? "none" : "block")};
  opacity: ${({ state }) => (state === "entered" ? 1 : 0)};
  position: fixed;
  top: ${({ compact }) => compact && "10px"};
  transition: 0.5s;
  width: calc(100% - 20px);
`;

export const Navbar: FC = () => {
  const [compact, setCompact] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => setCompact(window.scrollY > transitionOffset);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <SwitchTransition>
      <Transition
        key={compact ? "compact" : "welcome"}
        timeout={250}
        unmountOnExit
        mountOnEnter
      >
        {(state) => (
          <HeaderContainer compact={compact} state={state}>
            {compact ? <CompactHeader /> : <WelcomeHeader />}
          </HeaderContainer>
        )}
      </Transition>
    </SwitchTransition>
  );
};
