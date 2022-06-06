// @ts-strict-ignore
import React from 'react';
import { render } from '@testing-library/react';

import Index from '../pages/index';

describe('Index', () => {
  it('should render successfully', () => {
    /** @ts-expect-error */
    const { baseElement } = render(<Index />);
    expect(baseElement).toBeTruthy();
  });
});
