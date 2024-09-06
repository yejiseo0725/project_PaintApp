const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 600;

ctx.fillRect(210, 200, 15, 100);
ctx.fillRect(350, 200, 15, 100);
ctx.fillRect(260, 200, 60, 200);

ctx.arc(290, 130, 50, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "turquoise";
ctx.arc(260 + 10, 120, 8, Math.PI, 2 * Math.PI);
ctx.arc(300 + 10, 120, 8, Math.PI, 2 * Math.PI);
ctx.fill();
