'use struct';

GM_addStyle(`{{jira_dark-main}}`);

GM_registerMenuCommand('Github.com', () => {
    GM_openInTab('{{package.homepage}}', {active: true, insert: true});
});
GM_registerMenuCommand('Check Update', () => {
    GM_openInTab('{{package.downloadURL}}', {active: true, insert: true});
});
GM_registerMenuCommand('Сообщить об ошибке', () => {
    GM_openInTab('{{package.bugsLink}}', {active: true, insert: true});
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

console.info('Jira Dark version: ', '{{package.version}}');
