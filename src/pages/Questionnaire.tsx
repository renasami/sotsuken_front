import { Button, Input, Slider, TextField, Typography } from "@mui/material";
import { useState } from "react";

const QuestionnairePage = () => {
  const employee = [0];
  const [state, setState] = useState<number | number[]>([]);
  const sendValues = () => {
    fetchJSON(state, {});
  };
  return (
    <>
      <Typography color="text.primary" variant="h2">
        質問ページ
      </Typography>
      <TextField id="nickname" label="ニックネーム" /> <br />
      <Input />
      <br />
      <Slider
        style={{ width: "30%" }}
        defaultValue={employee}
        onChange={(e, v) => {
          setState(v);
        }}
      />
      <br />
      <Input />
      <br />
      <Input />
      <br />
      <Input />
      <br />
      <Button variant="contained" color="primary" component="span">
        そうしん
      </Button>
    </>
  );
};

export default QuestionnairePage;
