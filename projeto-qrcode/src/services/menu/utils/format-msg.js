import chalk from "chalk";

async function formatMsg(msg, formatOptions) {
    return formatOptions(msg);
};

export default formatMsg;