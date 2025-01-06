import r from "raylib";

class GameGrid {
  constructor() {
    this.blockSize = 30;
    this.color = r.WHITE;
    this.rows = 20;
    this.columns = 10;
    this.grid = this.create();
  }

  create = () => {
    let gridColumns = Array(this.columns).fill(0);
    let grid = Array(this.rows)
      .fill()
      .map((_) => {
        return gridColumns;
      });
    return grid;
  };

  display = () => {
    this.grid.forEach((row) => {
      console.log(row.join(""));
    });
  };
}

main();

function main() {
  let grid = new GameGrid();
  let screenWidth = 1280;
  let screenHeight = 720;

  grid.display();

  r.InitWindow(screenWidth, screenHeight, "Tetris");
  r.SetTargetFPS(60);

  while (!r.WindowShouldClose()) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    r.EndDrawing();
  }
  r.CloseWindow();
}
