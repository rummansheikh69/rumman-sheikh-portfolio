import { FaArrowUp } from "react-icons/fa";

import { useWindowScroll } from '@mantine/hooks';
import { Affix, Button,  Transition, rem } from '@mantine/core';
import React from 'react';

function ScrollTop() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <> 
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              leftSection={<FaArrowUp style={{ width: rem(16), height: rem(16), color: ("black") }} />}
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
              className=" bg-blue-300 text-black"
            >
              Scroll to top
            </Button>
          )}
        </Transition>
      </Affix>
    </>
  );
}

export default ScrollTop