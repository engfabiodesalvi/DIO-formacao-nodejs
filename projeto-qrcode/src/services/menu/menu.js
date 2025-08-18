import { handle as itensMenu } from "./handle.js";

// assynchronous prompt
async function selectMenu(select) {
    await itensMenu(select);
};

// synchronous prompt
async function promptSelectMenu(error, choose) {
    await itensMenu(choose.select);
};

export default selectMenu;
export {
    selectMenu,
    promptSelectMenu
}