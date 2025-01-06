import r from "raylib";
import colors from "./colors";

export class Grid {
  constructor() {
    this.blockSize = 30;
    this.rows = 20;
    this.columns = 10;
    this.grid = this.create();
    this.colors = colors.cellColors();
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

  draw = (screenWidth, screenHeight) => {
    for (let i = 0; i < this.rows; i++) {
      for (let k = 0; k < this.columns; k++) {
        let cellValue = this.grid[i][k];
        let columnSize = k * this.blockSize;
        let rowSize = i * this.blockSize;
        r.DrawRectangle(
          screenWidth / 2 - columnSize + this.blockSize * 4,
          screenHeight / 14 + rowSize,
          this.blockSize - 1,
          this.blockSize - 1,
          this.colors[cellValue],
        );
      }
    }
  };
}
