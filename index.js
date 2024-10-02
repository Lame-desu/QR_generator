/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import fs from "fs";
import { input } from "@inquirer/prompts";
import qr from "qr-image";

const answer = await input({ message: "Enter the URL: " });

fs.writeFile("URL1.txt", answer, (error) => {
  if (error) {
    throw error;
  }
  console.log("url writed sucessfully");
});

var qrImage = qr.image(answer, { type: "png" });
qrImage.pipe(fs.createWriteStream("qrImage.png"));
