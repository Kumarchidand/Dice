function rollDice() {
  const text = document.getElementById("text").value;
  const diceResult = document.getElementById("diceResult");
  const diceImages = document.getElementById("diceImages");
  const values = [];
  const images = [];
  for (let i = 0; i < text; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(`<img src="roll_imG/${value}.png" alt="Dice ${value}">
    `);
  }
  diceResult.innerHTML=`dice:${values.join(',')}`;
  diceImages.innerHTML=`${images.join("")};`
}
