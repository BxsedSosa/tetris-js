import r from "raylib";
import grid from "./grid";

main();

function main() {
  let screenWidth = 1280;
  let screenHeight = 720;

  grid.display();

  r.InitWindow(screenWidth, screenHeight, "Tetris");
  r.SetTargetFPS(60);

  while (!r.WindowShouldClose()) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    grid.draw(screenWidth, screenHeight);
    r.EndDrawing();
  }
  r.CloseWindow();
}
