import React from "react";
import { LeetCode, Credential } from "leetcode-query";
import dotenv from "dotenv";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

dotenv.config({ path: ".../.env" });

const SolvedQ = async () => {
  const leetcodeCookie = process.env.LEETCODE_COOKIE;

  const credential = new Credential();
  await credential.init(leetcodeCookie);

  const leetcode = new LeetCode(credential);

  const submissions = await leetcode.submissions({ limit: 100, offset: 0 }); // Fetch up to 100 submissions (adjust as needed)

  // Filter submissions to include only those with a slug property
  const submissionsWithSlug = submissions.filter(
    (submission) => submission.titleSlug
  );

  // Randomly select one of the submissions with a slug property
  const randomIndex = Math.floor(Math.random() * submissionsWithSlug.length);
  const randomSubmission = submissionsWithSlug[randomIndex];

  // Get the details of the solved problem using the submission information
  const problemDetail = await leetcode.problem(randomSubmission.titleSlug);

  if (!problemDetail) {
    return <div>Loading...</div>;
  }

  const { title, difficulty, content } = problemDetail;

  return (
    <Card variant="outlined" sx={{ borderRadius: 8, bgcolor: "#CCFFDA" }}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Solved Problem
        </Typography>
        <Typography variant="h6">{title}</Typography>
        <Typography>Difficulty: {difficulty}</Typography>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </CardContent>
    </Card>
  );
};

export default SolvedQ;
