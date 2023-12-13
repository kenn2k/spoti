import React, { useState } from "react";
import { FormControl, FormLabel, RadioGroup, Radio } from "@mui/material";
import { FormControlLabel } from "@mui/material";

const GenderField = React.memo(({ onGenderChange }) => {
  const [gender, setGender] = useState(""); // Используем useState для хранения выбранного гендера

  const handleGenderChange = (event) => {
    const selectedGender = event.target.value;
    setGender(selectedGender); // Обновляем состояние при изменении гендера
    onGenderChange(selectedGender); // Вызываем функцию обратного вызова с выбранным гендером
  };

  return (
    <FormControl>
      <FormLabel
        id="demo-row-radio-buttons-group-label"
        style={{ color: "white" }}
      >
        Gender
      </FormLabel>
      <RadioGroup
        style={{ color: "white" }}
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={gender} // Устанавливаем значение гендера из состояния
        onChange={handleGenderChange} // Обрабатываем изменение гендера
      >
        <FormControlLabel
          value="female"
          control={<Radio color="success" />}
          label="Female"
        />
        <FormControlLabel
          value="male"
          control={<Radio color="success" />}
          label="Male"
        />
        <FormControlLabel
          value="Non-binary"
          control={<Radio color="success" />}
          label="Non-binary"
        />
      </RadioGroup>
    </FormControl>
  );
});
GenderField.displayName = "GenderField";
export default GenderField;
