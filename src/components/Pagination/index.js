import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

/**
 * 
  Src Material UI
  https://mui.com/material-ui/react-pagination/
 */
export default function PaginationRounded({ count, page, handleChange }) {
  return (
    <Stack spacing={2}>
      <Pagination count={count} page={page} variant="outlined" shape="rounded" onChange={handleChange} />
    </Stack>
  );
}