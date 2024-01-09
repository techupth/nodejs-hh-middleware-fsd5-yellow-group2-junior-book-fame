import fs from "fs/promises";

const logging = async (req, res, next) => {
  const text = `\nIP: ${req.ip}, Method: ${req.method}, Endpoint: ${req.originalUrl}`;
  try {
    await fs.appendFile("logs.txt", text);
  } catch {
    fs.appendFile(
      "logs.txt",
      `\nLogging Error on IP: ${req.ip}, Method: ${req.method}, Endpoint: ${originalUrl}`
    );
  }
  next();
};

export default logging;
