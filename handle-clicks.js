const icon_human = document.querySelector(".fa-people-group");
const icon_computer = document.querySelector(".fa-laptop-code");

const btn_play = document.querySelector(".play");
const btn_pause = document.querySelector(".pause");
const btn_restart = document.querySelector(".restart");

const html_draw = `<span class="match-drawn">Match Drawn</span>`;
const html_xwin = `<span class="x-win"><i class="fa-solid fa-x"></i>&nbsp;Won </span>`;
const html_owin = `<span class="o-win"><i class="fa-solid fa-o"></i>&nbsp;Won</span>`;

btn_play.addEventListener("click", (e) => {
  e.preventDefault();
  btn_play.setAttribute("id", "hidden");
  btn_pause.removeAttribute("id");
});
btn_pause.addEventListener("click", (e) => {
  btn_pause.setAttribute("id", "hidden");
  btn_play.removeAttribute("id");
});

btn_restart.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Restart");
});

/*
1. Play & Pause
3. Same status message box: Playing | Paused | X Wins | O Wins
4. Lit up icon Human or Computer depending on who wins
5. Check for Draw match
6. Check for Winner
7. Restart game
8. Timer
9. X-O Selection Box
	 If the user selects he/her icons before the start of after the start of the 
	 game then it will have the same effect as restarting the game button has,
	 but this time the user will have the icon which he selects.
*/
