import { FC, useEffect, useState } from "react";

import {
  SwitchTransition,
  Transition,
  TransitionStatus,
} from "react-transition-group";
import styled from "styled-components";

import { CompactHeader, WelcomeHeader } from "components/organisms";

const transitionOffset = 50;

interface IFadeProps {
  compact: boolean;
  state: TransitionStatus;
}

const Fade = styled.div<IFadeProps>`
  display: ${({ state }) => (state === "exited" ? "none" : "block")};
  opacity: ${({ state }) => (state === "entered" ? 1 : 0)};
  position: ${({ compact }) => compact && "sticky"};
  top: ${({ compact }) => compact && "10px"};
  transition: 0.5s;
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
          <Fade compact={compact} state={state}>
            {compact ? <CompactHeader /> : <WelcomeHeader />}
          </Fade>
        )}
      </Transition>
    </SwitchTransition>
  );
};
