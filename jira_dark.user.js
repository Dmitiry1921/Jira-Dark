// ==UserScript==
// @name         Jira Dark
// @namespace    https://github.com/
// @version      0.0.2
// @description  Изменяет внешний вид Jira yа тёмный
// @author       Dmitriy1921
// @downloadURL  https://github.com/Dmitiry1921/Jira-Dark/raw/master/jira_dark.user.js
// @updateURL    https://github.com/Dmitiry1921/Jira-Dark/raw/master/jira_dark.meta.js
// @supportURL   https://vk.com/dmitriy1921
// @homepage     https://github.com/Dmitiry1921/Jira-Dark/blob/master/README.md
// @include      https://*.atlassian.net/jira*
// @icon         https://github.com/Dmitiry1921/Jira-Dark/raw/master/src/icon.svg
// @icon64       https://github.com/Dmitiry1921/Jira-Dark/raw/master/src/icon.svg
// @grant        GM_addStyle
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_openInTab
// @run-at       document-start
// @license MIT
// ==/UserScript==
'use struct';

GM_setStyle(`#jira-frontend {
  background: #1a1a1a !important;
}
`);

GM_registerMenuCommand('Github.com', () => {
    GM_openInTab('https://github.com/Dmitiry1921/Jira-Dark/blob/master/README.md', {active: true, insert: true});
});
GM_registerMenuCommand('Check Update', () => {
    GM_openInTab('https://github.com/Dmitiry1921/Jira-Dark/raw/master', {active: true, insert: true});
});
GM_registerMenuCommand('Сообщить об ошибке', () => {
    GM_openInTab('https://vk.com/dmitriy1921', {active: true, insert: true});
});

console.info('Jira Dark version: ', '0.0.2');
