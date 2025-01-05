import r from "raylib";

const screenHeight = 720;
const screenWidth = 1280;

function main() {
  let running = true;
  r.InitWindow(screenWidth, screenHeight, "title");
  r.SetTargetFPS(60);

  while (running) {
    r.BeginDrawing();
    r.ClearBackground(r.BLUE);
    r.DrawRectangle(screenWidth / 2, screenHeight / 2, 50, 50, r.BLACK);
    r.EndDrawing();
  }
}

main();
