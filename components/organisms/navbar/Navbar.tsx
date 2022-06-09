import { FC, useMemo } from "react";

import {
  SwitchTransition,
  Transition,
  TransitionStatus,
} from "react-transition-group";
import styled from "styled-components";

import { CompactHeader, WelcomeHeader } from "components/organisms";
import { useScrollPosition } from "hooks/useScrollPosition";

const transitionOffset = 50;

interface IHeaderContainerProps {
  shrink: boolean;
  state: TransitionStatus;
}

const HeaderContainer = styled.div<IHeaderContainerProps>`
  display: ${({ state }) => (state === "exited" ? "none" : "block")};
  opacity: ${({ state }) => (state === "entered" ? 1 : 0)};
  position: fixed;
  top: ${({ shrink }) => shrink && "10px"};
  transition: 0.5s;
  width: calc(100% - 16px);
`;

export const Navbar: FC = () => {
  const { y } = useScrollPosition();
  const shrink: boolean = useMemo(
    () => (y && y > transitionOffset ? true : false),
    [y]
  );
  return (
    <SwitchTransition>
      <Transition
        key={shrink ? "compact" : "welcome"}
        mountOnEnter
        timeout={250}
        unmountOnExit
      >
        {(state) => (
          <HeaderContainer shrink={shrink} state={state}>
            {shrink ? <CompactHeader /> : <WelcomeHeader inverted />}
          </HeaderContainer>
        )}
      </Transition>
    </SwitchTransition>
  );
};
