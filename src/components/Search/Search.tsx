import { TextField } from "@mui/material";
import { useState } from "react";

export function Search() {
  const [value, setValue] = useState("");

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <div style={{ width: "100%", textAlign: "center", padding: "20px 0" }}>
      <TextField
        sx={{
          width: "50%",
        }}
        label="Name"
        variant="outlined"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
