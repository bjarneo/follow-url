#!/usr/bin/env node
'use strict';
const meow = require('meow');
const chalk = require('chalk');
const followUrl = require('.');

const cli = meow(`
    Usage
      $ follow <input>

    Examples
      $ follow https://bit.ly/2nphub2

        Following https://bit.ly/2nphub2

        # URLs
        0 https://bit.ly/2nphub2
        1 http://ow.ly/W7oOu
        2 http://bjarneo.codes/

        follow-url by https://github.com/bjarneo

`);

const log = console.log;

function print(data) {
    const len = data.length - 1;

    data.forEach((val, idx) => {
        if (idx === 0) {
            log(chalk.bold(val[0], val[1]));
        } else if (len !== idx) {
            log(chalk.yellow(val[0], val[1]));
        } else {
            log(chalk.green(val[0], val[1]));
        }
    });
}

async function main() {
    const url = cli.input[0];

    const urls = await followUrl(url);

    const data = urls.reduce((acc, val, idx) => {
        acc.push([idx, val]);

        return acc;
    }, [ ['#', 'URLs'] ]);

    log(chalk.bold('\nFollowing %s\n'), url);

    print(data);

    log(chalk.dim('\nfollow-url by https://github.com/bjarneo\n'));
}

main();
