function calculate_pi(n) {
  let pointsInCircle = 0;
  let pointsTotal = 0;
  for (let i = 0; i <n; i++) {
    let x = Math.random();
    let y = Math.random();
    if(Math.sqrt(x**2 + y**2)<1) pointsInCircle++;
    pointsTotal++;
  }
  return 4*pointsInCircle/pointsTotal;
}