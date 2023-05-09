import { drawMapOutline } from "./drawMapOutline.js";
import { getGlobal} from "./globals";

export function minimap(minimapCtx) {
  const scaleFactor = 0.1;

  minimapCtx.beginPath();
  minimapCtx.rect(0, 0, minimapCanvas.width, minimapCanvas.height);
  minimapCtx.stroke();

  const mapWidth = 6000;
  const mapHeight = 6000;

  minimapCtx.beginPath();
  minimapCtx.rect(0, 0, mapWidth * scaleFactor, mapHeight * scaleFactor);
  minimapCtx.stroke();

  const playerX = playerposition.x * scaleFactor;
  const playerY = playerposition.y * scaleFactor;

  minimapCtx.beginPath();
  minimapCtx.arc(playerX, playerY, 3, 0, 2 * Math.PI);
  minimapCtx.fillStyle = "red";
  minimapCtx.fill();

  contentDiv.appendChild(minimapCanvas);
}