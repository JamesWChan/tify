Feature('Fullscreen');

Scenario('Control fullscreen via click', (I) => {
	I.amOnPage('http://localhost:8080/?manifest=http://localhost:8081/manifest/gdz-HANS_DE_7_w042081.json');
	I.waitForElement('.tify-app_main');

	I.see(' Fullscreen', '.fullscreen');
	I.click('Fullscreen');
	I.see('Exit fullscreen', '.exit_fullscreen');
	I.click('Exit fullscreen');
	I.see(' Fullscreen', '.fullscreen');
});
