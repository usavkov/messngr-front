import { SearchInput } from '../../common/components';

export function DialogsFilter({
  isLoading = false,
  label,
  onChange,
  searchFn,
}) {
  return (
    <SearchInput
      id="search-dialog"
      isAutocomplete={false}
      isLoading={isLoading}
      label={label ?? 'Find dialog'}
      searchFn={searchFn}
      size="small"
      onChange={onChange}
      sx={{
        m: 1,
      }}
    />
  );
}
