import { useEffect, useMemo, useState } from 'react';
import { debounce, noop } from 'lodash';

import { Autocomplete, TextField } from '@mui/material';

export function SearchInput({
  autoComplete,
  id = 'search-input',
  label,
  searchFn = noop,
  options = [],
  renderInput,
  renderOption,
  isAutocomplete = true,
  isLoading,
  onChange,
  ...rest
}) {
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const fetch = useMemo(
    () => (
      debounce((_request, _callback) => {
        searchFn({
          variables: { search: inputValue },
        });
      }, 400)
    ),
    [searchFn, inputValue]
  );

  useEffect(() => {
    inputValue ? fetch() : searchFn({
      variables: { search: '' },
    });

    return () => fetch.cancel();
  }, [inputValue, fetch]);

  return isAutocomplete ? (
    <Autocomplete
      id={id}
      filterOptions={(x) => x}
      options={options}
      autoComplete={autoComplete}
      includeInputInList
      filterSelectedOptions
      value={value}
      isOptionEqualToValue={(option, val) => option.username === val}
      onChange={(_event, newValue) => {
        setValue(newValue);
        onChange && onChange(newValue);
      }}
      onInputChange={(_event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      renderInput={
        renderInput
        ?? ((params) => (
          <TextField {...params} label={label ?? 'Search'} fullWidth />
        ))
      }
      renderOption={
        renderOption ?? ((props, option) => <li {...props}>{option?.label}</li>)
      }
      {...rest}
    />
  ) : (
    <TextField
      id={id}
      label={label}
      value={inputValue}
      autoComplete={!autoComplete && 'off'}
      onChange={({ target }) => {
        setInputValue(target.value);
        onChange && onChange(target.value);
      }}
      {...rest}
    />
  );
}
