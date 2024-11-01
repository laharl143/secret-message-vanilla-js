/** references/notes
 * asciitable.com
 * base64 index table
 * Location: Domain --> Path --> Query String --> Hash/Fragment
 *
 * print 'window.location' function in browser to find location
 */

/**
 * Learned the command "npx now" to easily deploy
 * domina: https://secret-message-vanilla-js.vercel.app
 */

const { hash } = window.location;
message = atob(hash.replace("#", ""));

if (message) {
  document.querySelector("#message-form").classList.add("hide");
  document.querySelector("#message-show").classList.remove("hide");
  document.querySelector("h1").innerHTML = message;
}
document.querySelector("form").addEventListener("submit", (event) => {
  //stop the default browser behaviour upon submission
  //default behaviour upon submission: send the value to back-end server
  event.preventDefault();

  document.querySelector("#message-form").classList.add("hide");
  document.querySelector("#link-form").classList.remove("hide");

  const input = document.querySelector("#message-input");
  //btoa = binary to ascii
  const encrypted = btoa(input.value);

  const linkInput = document.querySelector("#link-input");

  linkInput.value = `${window.location}#${encrypted}`;
  linkInput.select();
});
