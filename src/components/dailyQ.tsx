import React from "react";
import { LeetCode } from "leetcode-query";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";

const DailyQ = async () => {
  const leetcode = new LeetCode();
  const dailyQuestion = await leetcode.daily();

  const { date, link, question } = dailyQuestion;
  const URL = `https://leetcode.com${link}`;

  const { title, likes, dislikes, difficulty, hints, content } = question;

  return (
    <Card variant="outlined" sx={{ borderRadius: 4, bgcolor: "#FFFDCC" }}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Daily Question!
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8}>
            <Typography variant="h6">{title}</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography>Date: {date}</Typography>
          </Grid>
        </Grid>
        <Typography>Difficulty: {difficulty}</Typography>
        <Typography>
          <Link href={URL}>Link to question</Link>
        </Typography>
        <br />
        <div dangerouslySetInnerHTML={{ __html: content }} />
        <Typography>
          Likes: {likes} Dislikes: {dislikes}
        </Typography>
        <Typography>{hints}</Typography>
      </CardContent>
    </Card>
  );
};

export default DailyQ;
