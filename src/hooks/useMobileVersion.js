import { useEffect, useState } from 'react';
import { breakpointLg, breakpointMd, breakpointSm, breakpointXL, breakpointXS } from '../helpers';

export const useMobileVersion = () => {
  const [isBreakpointSm, setIsBreakpointSm] = useState(window.innerWidth < breakpointSm);
  const [isBreakpointXs, setIsBreakpointXs] = useState(window.innerWidth < breakpointXS);
  const [isBreakpointMd, setIsBreakpointMd] = useState(window.innerWidth < breakpointMd);
  const [isBreakpointLg, setIsBreakpointLg] = useState(window.innerWidth < breakpointLg);
  const [isBreakpointXL, setIsBreakpointXL] = useState(window.innerWidth < breakpointXL);

  const resizeHandler = () => {
    setIsBreakpointSm(window.innerWidth < breakpointSm);
    setIsBreakpointXs(window.innerWidth < breakpointXS);
    setIsBreakpointMd(window.innerWidth < breakpointMd);
    setIsBreakpointLg(window.innerWidth < breakpointLg);
    setIsBreakpointXL(window.innerWidth < breakpointXL);
  };

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return { isBreakpointSm, isBreakpointXs, isBreakpointMd, isBreakpointLg, isBreakpointXL };
};
