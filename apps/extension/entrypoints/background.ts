export default defineBackground(() => {
 browser.commands.onCommand.addListener((command) => {
  console.log(`Command : ${command}`)
 })
});
