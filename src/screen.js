import r from "raylib";

class Screen {
  constructor() {
    this.width = 1280;
    this.height = 720;
    r.InitWindow(this.width, this.height, "Tetris");
    r.SetTargetFPS(60);
  }

  update = () => {
    while (!r.WindowShouldClose()) {
      r.BeginDrawing();
      r.ClearBackground(r.BLACK);
      r.EndDrawing();
    }
  };
}

module.exports.Screen = Screen;
