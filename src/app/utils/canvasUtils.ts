/**
 * Generates random stars on the canvas.
 * @param ctx - The 2D rendering context of the canvas.
 * @param [limit=100] - The number of stars to generate (default is 100).
 */
export function generateRandomStars(ctx: CanvasRenderingContext2D, limit: number = 100) {
  for (let i = 0; i < limit; i++) {
    if (!ctx) return;

    const x = Math.random() * ctx.canvas.width;
    const y = Math.random() * ctx.canvas.height;
    const radius = Math.random() * 2;

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fillStyle = 'white';
    ctx.fill();
  }
}

/**
 * Reveals the visible tiles on the canvas based on the provided matrix.
 * @param ctx - The 2D rendering context of the canvas.
 * @param matrix - The matrix representing the state of revealed tiles.
 * @param tileSize - The size of each tile in pixels.
 */
export function revealVisibleTiles(
  ctx: CanvasRenderingContext2D | null,
  matrix: number[][],
  tileSize: number,
) {
  if (!ctx || matrix.length === 0) return;

  matrix.forEach((row, rowIndex) => {
    row.forEach((revealed, colIndex) => {
      if (revealed) {
        const dx = rowIndex * tileSize;
        const dy = colIndex * tileSize;
        ctx.clearRect(dx, dy, tileSize, tileSize);
      }
    });
  });
}
