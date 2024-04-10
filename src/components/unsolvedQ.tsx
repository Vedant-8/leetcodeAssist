import React from "react";
import { LeetCode, Credential } from "leetcode-query";
import dotenv from "dotenv";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

dotenv.config({ path: ".../.env" });

const UnsolvedQ = async () => {
  const leetcodeCookie = process.env.LEETCODE_COOKIE;

  const credential = new Credential();
  await credential.init(leetcodeCookie);

  const leetcode = new LeetCode(credential);

  // Fetch all submissions
  const submissions = await leetcode.submissions({ limit: 1000, offset: 0 }); // Adjust the limit as needed

  // Filter out the titles of solved problems
  const solvedProblemIds = submissions
    .filter((submission) => submission.statusDisplay === "Accepted")
    .map((submission) => submission.title);

  // Fetch all problems
  const allProblems = await leetcode.problems({});

  // Filter out unsolved problems
  const unsolvedProblems = allProblems.questions.filter(
    (problem) => !solvedProblemIds.includes(problem.titleSlug)
  );

  // Randomly select one unsolved problem
  const randomIndex = Math.floor(Math.random() * unsolvedProblems.length);
  const randomUnsolvedProblem = unsolvedProblems[randomIndex];

  // Get the details of the unsolved problem using the titleSlug
  const problemDetail = await leetcode.problem(randomUnsolvedProblem.titleSlug);
  const { title, difficulty, content } = problemDetail;

  return (
    <Card variant="outlined" sx={{ borderRadius: 8, bgcolor: "#CCFFFB" }}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Unsolved Problem
        </Typography>
        <Typography variant="h6">{title}</Typography>
        <Typography>Difficulty: {difficulty}</Typography>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </CardContent>
    </Card>
  );
};

export default UnsolvedQ;
