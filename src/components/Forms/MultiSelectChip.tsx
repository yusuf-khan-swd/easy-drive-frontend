import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Theme, useTheme } from "@mui/material/styles";
import { Dispatch, SetStateAction } from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(option: string, options: readonly string[], theme: Theme) {
  return {
    fontWeight:
      options.indexOf(option) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

interface ISelectProps {
  selectOptions: string[];
  state: string[];
  setState: Dispatch<SetStateAction<string[]>>;
}

const MultiSelectChip = ({ selectOptions, state, setState }: ISelectProps) => {
  const theme = useTheme();

  const handleChange = (event: SelectChangeEvent<typeof state>) => {
    const {
      target: { value },
    } = event;

    setState(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <FormControl sx={{ marginBottom: 1, width: "100%" }}>
      <InputLabel id="demo-multiple-chip-label">Features</InputLabel>
      <Select
        labelId="demo-multiple-chip-label"
        id="demo-multiple-chip"
        multiple
        value={state}
        onChange={handleChange}
        input={<OutlinedInput id="select-multiple-chip" label="Features" />}
        renderValue={(selected) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {selected.map((value) => (
              <Chip key={value} label={value} />
            ))}
          </Box>
        )}
        MenuProps={MenuProps}
      >
        {selectOptions.map((option) => (
          <MenuItem
            key={option}
            value={option}
            style={getStyles(option, state, theme)}
          >
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MultiSelectChip;
