import {
  Box,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from "@mui/material";
import { useState } from "react";

const options = ["Mike", "Kre", "Bre", "Tate", "taylor"];

const PlaygroundPage = () => {
  const [values, setValues] = useState<string[]>([]);

  return (
    <Box sx={{ ml: "4rem", mt: "4rem" }}>
      <Typography variant="h3">Playground</Typography>

      <Box mt={"1rem"}>
        <FormControl sx={{ width: "30rem" }}>
          <InputLabel id={"test"}>Multi</InputLabel>
          <Select
            labelId="Test"
            id="test-id"
            multiple
            value={values}
            input={<OutlinedInput id="select-multiple-chip" label="Bankoo" />}
            renderValue={(selected) => (
              <Box display={"flex"} gap={"5px"}>
                {selected.map((s, i) => (
                  // <Typography key={i}>{s}</Typography>
                  <Chip key={i} label={s} />
                ))}
              </Box>
            )}
            onChange={(e) => {
              console.log(e.target.value);
              setValues(e.target.value as []);
            }}
          >
            {options.map((v, i) => (
              <MenuItem key={i} value={v}>
                {v}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default PlaygroundPage;
