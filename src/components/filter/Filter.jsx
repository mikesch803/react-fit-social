import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export function Filter({ filter, filterHandler }) {
  return (
    <FormControl sx={{ m: 1, minWidth: 120, margin: "1rem 0" }} size="small">
      <InputLabel id="demo-select-small">filter</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={filter}
        label="filter"
        onChange={filterHandler}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"Trending"}>Trending</MenuItem>
        <MenuItem value={"Latest"}>Latest</MenuItem>
      </Select>
    </FormControl>
  );
}
