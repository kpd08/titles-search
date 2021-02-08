import React, { useState, useCallback, useMemo } from 'react';
import { fetchProductions as apiFetchProductions } from './api';
import { Layout } from './components/layout';
import { LoaderOverlay } from './components/loader';
import { ProductionEntry } from './components/production-entry';
import { SearchBox } from './components/search-box';
import debounce from 'lodash/debounce';
import { ErrorBox } from './components/error-box';
import { FALLBACK_ERROR_MSG } from './constants';

export default function App() {
  const [productions, setProductions] = useState<Array<Production>>([]);
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const fetchProductions = async (searchValue: string) => {
    try {
      setErrorMsg(null);
      if (searchValue.length < 3) {
        setProductions([]);
        return;
      }
      setIsLoading(true);
      const { productions } = await apiFetchProductions(searchValue);
      setProductions(productions);
    } catch (error) {
      const errorMessage = error?.message || FALLBACK_ERROR_MSG;
      setErrorMsg(errorMessage);
      setProductions([]);
    } finally {
      setIsLoading(false);
    }
  };

  const debouncedFetchProductions = useCallback(
    debounce(fetchProductions, 500),
    []
  );

  const handleSearchBoxChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    setSearchValue(value);
    debouncedFetchProductions(value);
  };

  const hasResults = useMemo(() => !!(productions && productions.length), [
    productions,
  ]);

  return (
    <Layout>
      <div className="flex flex-col">
        <SearchBox
          placeholder="Search titles"
          value={searchValue}
          onChange={handleSearchBoxChange}
        />
        {isLoading && <LoaderOverlay />}
        {errorMsg && <ErrorBox>{errorMsg}</ErrorBox>}
        {!hasResults && !isLoading && !errorMsg && <h1>No titles</h1>}
        {hasResults &&
          !isLoading &&
          productions.map((production) => (
            <ProductionEntry production={production} key={production.imdbID} />
          ))}
      </div>
    </Layout>
  );
}
