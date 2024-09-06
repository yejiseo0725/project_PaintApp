const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 600;
ctx.lineWidth = 2;

const colors = [
  "#d63031",
  "#e17055",
  "#fdcb6e",
  "#00b894",
  "#00cec9",
  "#0984e3",
  "#6c5ce7",
  "#fd79a8",
];

function onClick(event) {
  ctx.beginPath();
  ctx.moveTo(0, 0);
  const color = colors[Math.floor(Math.random() * colors.length)];
  ctx.strokeStyle = color;
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
}

canvas.addEventListener("mousemove", onClick);
