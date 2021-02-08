import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as api from '../api';
import App from '../App';

jest.mock('../api');

const mockedFetchProductions = api.fetchProductions as jest.Mock;

const mockedProduction: Production = {
  Poster: 'some.poster.url',
  Title: 'Some title',
  Type: 'movie',
  Year: '2018',
  imdbID: '111',
};

describe('App', () => {
  beforeEach(() => {
    mockedFetchProductions.mockClear().mockResolvedValue({
      productions: [mockedProduction],
      totalResults: 0,
    });
  });

  test('it renders as expected', () => {
    render(<App />);
  });

  test('it shows `no titles` if there are no entries', () => {
    const { queryByText } = render(<App />);
    expect(queryByText(/no titles/i)).toBeInTheDocument();
  });

  test('show/hide loader overlay when fetching data', async () => {
    const { getByTestId } = render(<App />);
    userEvent.type(getByTestId('search-box'), 'test');
    await waitFor(() => {
      expect(getByTestId('loader-overlay')).toBeInTheDocument();
    });
  });

  test('shows error if something went wrong', async () => {
    mockedFetchProductions.mockRejectedValue(new Error('some error'));
    const { getByTestId } = render(<App />);
    userEvent.type(getByTestId('search-box'), 'test');
    await waitFor(() => {
      expect(mockedFetchProductions).toHaveBeenCalledWith('test');
      expect(mockedFetchProductions).toHaveBeenCalledTimes(1);
      expect(getByTestId('error-box')).toHaveTextContent('some error');
    });
  });

  test('shows list of results', async () => {
    const { getByTestId, getAllByTestId } = render(<App />);
    userEvent.type(getByTestId('search-box'), 'test');
    await waitFor(() => {
      expect(getAllByTestId('production-details')).toMatchSnapshot();
      expect(mockedFetchProductions).toHaveBeenCalledWith('test');
      expect(mockedFetchProductions).toHaveBeenCalledTimes(1);
    });
  });
});
