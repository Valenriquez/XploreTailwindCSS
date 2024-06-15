import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header2 from './index';

// Mock useUser hookq

describe('Header2 Component', () => {
  test('maintains styling and responsiveness', () => {
    render(<Header2 />);
    const headerElement = screen.getAllByTestId('header');
    expect(headerElement).toHaveClass('sticky');
    expect(headerElement).toHaveClass('bg-[#0C1B2A]');
    expect(headerElement).toHaveClass('md:px-6');
  });
});
