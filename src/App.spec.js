// App.spec.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
    it('renders the app header', () => {
        render(<App />);
        expect(screen.getByText('Table of Financial Instrument')).toBeInTheDocument();
    });

    it('renders the Table component', () => {
        render(<App />);
        expect(screen.getByTestId('table-component')).toBeInTheDocument();
    });
});
