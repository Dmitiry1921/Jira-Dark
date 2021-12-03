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
// @include      https://*.atlassian.net/*
// @include      https://timereports.primetimesheet.net/*
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

GM_addStyle(`*::-webkit-scrollbar-track-piece {
  background: none !important;
}
*::-webkit-scrollbar-thumb:hover {
  background-color: #e7e8ec !important;
}
*::-webkit-scrollbar-thumb {
  background-color: #A9B7C5 !important;
}
*::-webkit-scrollbar-thumb {
  border-radius: 50px;
}
*::-webkit-scrollbar {
  width: 5px;
  max-height: 5px;
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

let i = 0;
function waitLoadTimeSheet() {
    if(i > 20) {
        return;
    }
    const main = document.querySelector('[data-test-id="spa-apps-dashboard-dashboard.ui.dashboard-content.layout.container-wrapper"]')
    const timeSheet = document.getElementById('26929');
    if(!timeSheet) {
        setTimeout(() => {
            i++;
            waitLoadTimeSheet();
        },1000);
    } else {
        timeSheet.parentElement.style.paddingLeft = '15px';
        timeSheet.parentElement.style.paddingRight = '15px';
        main.prepend(timeSheet.parentElement);
    }
}
waitLoadTimeSheet();

console.info('Jira Dark version: ', '0.0.2');
