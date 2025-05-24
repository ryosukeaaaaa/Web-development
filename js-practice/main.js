function changeBackgroundColor() {
  // ランダムなRGBカラーを作成
  const r = Math.floor(Math.random() * 256); // 0-255
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  const color = `rgb(${r}, ${g}, ${b})`;

  // 背景色を変更
  document.body.style.backgroundColor = color;
}
