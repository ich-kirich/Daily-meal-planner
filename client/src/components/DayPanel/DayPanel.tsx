import { Select, MenuItem, SelectChangeEvent } from "@mui/material";
import shortid from "shortid";
import { IDayPanelProps } from "../../types/types";

function DayPanel(props: IDayPanelProps) {
  const { category, setCategory } = props;
  const time = ["Завтрак", "Обед", "Ужин"];
  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };
  return (
    <Select value={category} onChange={handleChange}>
      {time.map((item) => (
        <MenuItem key={shortid.generate()} value={item}>
          {item}
        </MenuItem>
      ))}
    </Select>
  );
}

export default DayPanel;
