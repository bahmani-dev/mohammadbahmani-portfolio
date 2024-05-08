import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const filePath = path.resolve("@/public/bahmani-cv.pdf");

  // Check if the file exists
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: "File not found" });
  }

  // Stream the file to the client
  const fileStream = fs.createReadStream(filePath);
  res.setHeader("Content-Disposition", "attachment; filename=bahmani-cv.pdf");
  res.setHeader("Content-Type", "application/pdf");
  fileStream.pipe(res);
}
