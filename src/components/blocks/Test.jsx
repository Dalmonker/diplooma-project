import { Block } from "../UI";
import { useState } from "react";
import {
  Typography,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Button,
} from "@mui/material";
import { red, green } from "@mui/material/colors";

const Statuses = {
  IDLE: "IDLE",
  Completed: "Completed",
  Error: "Error",
};

const Test = ({ title, description, variants, answer }) => {
  const [status, setStatus] = useState(Statuses.IDLE);
  const [selectedVariant, setSelectedVariant] = useState(null);

  const checkResult = () => {
    answer.id === selectedVariant.id
      ? setStatus(Statuses.Completed)
      : setStatus(Statuses.Error);
  };

  return (
    <Block>
      <Typography variant="h5" component="h2">
        {title}
      </Typography>
      <Typography>{description}</Typography>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          {variants.map((variant) => (
            <FormControlLabel
              key={variant.id}
              value={variant.title}
              control={<Radio />}
              label={variant.title}
              checked={selectedVariant?.id === variant.id}
              onChange={() => setSelectedVariant(variant)}
              disabled={status !== Statuses.IDLE}
            />
          ))}
        </RadioGroup>
        <Button
          sx={{ mt: 2, mb: 2 }}
          variant="contained"
          onClick={checkResult}
          disabled={!selectedVariant || status !== Statuses.IDLE}
        >
          Ответить
        </Button>
        {status === Statuses.Completed && (
          <div
            style={{ background: green[500], padding: "10px", color: "white" }}
          >
            Правильный ответ: {answer.title}
          </div>
        )}
        {status === Statuses.Error && (
          <div
            style={{ background: red[500], padding: "10px", color: "white" }}
          >
            Правильный ответ: {answer.title}
          </div>
        )}
      </FormControl>
    </Block>
  );
};

export default Test;
