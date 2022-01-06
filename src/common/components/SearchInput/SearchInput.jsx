import { useEffect, useMemo, useState } from 'react';
import { noop, throttle } from 'lodash';

import { Autocomplete, TextField } from '@mui/material';

export function SearchInput({
  id = 'search-input',
  label,
  searchFn = noop,
  options = [],
  renderInput,
  renderOption,
  isLoading,
  onChange,
  ...rest
}) {
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const fetch = useMemo(
    () =>
      throttle((_request, _callback) => {
        searchFn({
          variables: { search: inputValue },
        });
      }, 400),
    [searchFn, inputValue],
  );

  useEffect(() => {
    fetch();
  }, [value, inputValue, fetch]);

  return (
    <Autocomplete
      id={id}
      filterOptions={(x) => x}
      options={options}
      autoComplete
      includeInputInList
      filterSelectedOptions
      value={value}
      loading={isLoading}
      isOptionEqualToValue={(option, val) => (option.username === val)}
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
          <TextField
            {...params}
            label={label ?? 'Search'}
            fullWidth
          />
        ))
      }
      renderOption={
        renderOption
        ?? ((props, option) => <li {...props}>{option?.label}</li>)
      }
      {...rest}
    />
  );
}
