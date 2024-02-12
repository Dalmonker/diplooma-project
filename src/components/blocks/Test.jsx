import { Block } from "../UI";
import {
  Typography,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Button,
} from "@mui/material";

const Test = ({ title, description, variants, Answer }) => {
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
            />
          ))}
        </RadioGroup>
        <Button sx={{ mt: 2 }} variant="contained">
          Ответить
        </Button>
      </FormControl>
    </Block>
  );
};

export default Test;
