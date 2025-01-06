import r from "raylib";

class Grid {
  constructor() {
    this.blockSize = 30;
    this.rows = 20;
    this.columns = 10;
    this.grid = this.create();
    this.colors = this.cellColors();
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
      console.log(row.join(" "));
    });
  };

  cellColors = () => {
    return [
      r.DARKGRAY,
      r.GREEN,
      r.RED,
      r.ORANGE,
      r.YELLOW,
      r.PURPLE,
      r.BLUE,
      r.DARKBLUE,
    ];
  };

  draw = () => {
    for (let i = 0; i < this.rows; i++) {
      for (let k = 0; k < this.columns; k++) {
        let cellValue = this.grid[i][k];
        r.DrawRectangle(
          this.columns * this.blockSize + 1,
          this.rows * this.blockSize + 1,
          this.blockSize - 1,
          this.blockSize - 1,
          this.colors[cellValue],
        );
      }
    }
  };
}

main();

function main() {
  let grid = new Grid();
  let screenWidth = 1280;
  let screenHeight = 720;

  grid.display();

  r.InitWindow(screenWidth, screenHeight, "Tetris");
  r.SetTargetFPS(60);

  while (!r.WindowShouldClose()) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    grid.draw();
    r.EndDrawing();
  }
  r.CloseWindow();
}
