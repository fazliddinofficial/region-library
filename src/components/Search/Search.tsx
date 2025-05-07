import { TextField } from "@mui/material";
import { useState } from "react";
import { notifyError } from "../../helper/toast";
import axiosInstance from "../../services/axios";

export function Search() {
  const [value, setValue] = useState("");

  const handleChange = (e: any) => {
    setValue(e.target.value);
    handleSearch();
  };

  const handleSearch = async () => {
    try {
      const res = await axiosInstance.get("/book/search", {
        params: { q: value },
      });
      console.log(res.data);
    } catch (error: any) {
      notifyError(error.message);
    }
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
