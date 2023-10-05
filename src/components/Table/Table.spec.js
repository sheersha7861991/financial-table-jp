import React from 'react';
import { render, waitFor, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Table from './Table';
import fetchMock from 'jest-fetch-mock';

describe('Table Component', () => {
    beforeAll(() => {
        fetchMock.enableMocks();
    });

    beforeEach(() => {
        fetchMock.resetMocks();
    });

    it('renders table rows with data', async () => {
        fetchMock.mockResponseOnce(JSON.stringify([
            {
                ticker: 'AAPL',
                price: 150,
                assetClass: 'Equities',
            },
            {
                ticker: 'MSFT',
                price: 300,
                assetClass: 'Equities',
            },
            {
                ticker: 'GOOGL',
                price: 2500,
                assetClass: 'Equities',
            },
        ]));

        render(<Table />);

        await waitFor(() => {
            expect(screen.getByText('AAPL')).toBeInTheDocument();
            expect(screen.getByText('150')).toBeInTheDocument();
            expect(screen.getByText('MSFT')).toBeInTheDocument();
            expect(screen.getByText('300')).toBeInTheDocument();
            expect(screen.getByText('GOOGL')).toBeInTheDocument();
            expect(screen.getByText('2500')).toBeInTheDocument();
            const equitiesElements = screen.getAllByText('Equities');
            expect(equitiesElements).toHaveLength(3);
        });
    });

    it('sorts data when header is clicked', async () => {
        fetchMock.mockResponseOnce(JSON.stringify([
            {
                ticker: 'AAPL',
                price: 150,
                assetClass: 'Equities',
            },
            {
                ticker: 'MSFT',
                price: 300,
                assetClass: 'Equities',
            },
            {
                ticker: 'GOOGL',
                price: 2500,
                assetClass: 'Equities',
            },
        ]));

        render(<Table />);

        await waitFor(() => {
            const tickerHeader = screen.getByRole('columnheader', {
                name: 'Ticker ↓',
            });
            fireEvent.click(tickerHeader);

            expect(screen.getByText('AAPL')).toBeInTheDocument();
            expect(screen.getByText('MSFT')).toBeInTheDocument();
            expect(screen.getByText('Ticker ↓')).toBeInTheDocument(); // Descending order
        });
    });

});
