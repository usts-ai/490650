import '@testing-library/jest-dom';

class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

global.ResizeObserver = ResizeObserverMock;

jest.mock('framer-motion', () => {
  const React = require('react');

  const MotionProxy = new Proxy(
    {},
    {
      get: (_target, prop) => {
        const Tag = typeof prop === 'string' ? prop : 'div';
        return React.forwardRef(
          (
            { children, whileHover, whileTap, animate, initial, exit, transition, variants, ...rest }: React.PropsWithChildren<Record<string, unknown>>,
            ref: React.Ref<HTMLElement>
          ) => React.createElement(Tag, { ...rest, ref }, children)
        );
      },
    }
  );

  return {
    motion: MotionProxy,
    AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
    useScroll: () => ({ scrollYProgress: { get: () => 0, on: () => () => {} } }),
    useTransform: () => ({ get: () => 0 }),
    useInView: () => true,
  };
});
