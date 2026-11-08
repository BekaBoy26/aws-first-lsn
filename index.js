import http from "http";

const students = [
  { name: "Myrza", email: "myrza@gmail.com" },
  { name: "Asan", email: "asan@gmail.com" },
  { name: "Bael", email: "bael@gmail.com" },
  { name: "Saida", email: "saida@gmail.com" },
  { name: "Gulaiym", email: "gulaiym@gmail.com" },
];

const managers = [
  { name: "Nuraiym", email: "nuraiym@gmail.com" },
  { name: "Tinay", email: "tinay@gmail.com" },
];

const courses = [
  { name: "WebOps", duration: "14m" },
  { name: "FullStack", duration: "13m" },
  { name: "CyberSecurity", duration: "10m" },
  { name: "AI/ML", duration: "14m" },
  { name: "Robot", duration: "7m" },
];

const auditories = [
  { number: 0, floor: 0 },
  { number: 1, floor: 1 },
  { number: 2, floor: 1 },
  { number: 3, floor: 2 },
  { number: 4, floor: 2 },
  { number: 5, floor: 2 },
  { number: 6, floor: 3 },
  { number: 7, floor: 3 },
];

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    return res.end("Hello world, server from Bael");
  } else if (req.url === "/students" && req.method === "GET") {
    return res.end(JSON.stringify(students));
  } else if (req.url === "/managers" && req.method === "GET") {
    return res.end(JSON.stringify(managers));
  } else if (req.url === "/auditories" && req.method === "GET") {
    return res.end(JSON.stringify(auditories));
  } else if (req.url === "/courses" && req.method === "GET") {
    return res.end(JSON.stringify(courses));
  }
});

const port = 5000;

server.listen(port, () => {
  console.log(`Server is on port ${port}`);
});
