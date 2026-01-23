const https = require('https');
const fs = require('fs');
const path = require('path');

// Logo URLs from testdev.tools
const logos = [
  { url: 'https://testdev.tools/images/tools/playwright.svg', file: 'playwright.svg' },
  { url: 'https://testdev.tools/images/tools/selenium.ico', file: 'selenium.ico' },
  { url: 'https://testdev.tools/images/tools/cypress.png', file: 'cypress.png' },
  { url: 'https://testdev.tools/images/tools/appium.png', file: 'appium.png' },
  { url: 'https://testdev.tools/images/tools/maestro.png', file: 'maestro.png' },
  { url: 'https://testdev.tools/images/tools/Detox.ico', file: 'Detox.ico' },
  { url: 'https://testdev.tools/images/tools/postman.png', file: 'postman.png' },
  { url: 'https://testdev.tools/images/tools/usebruno.png', file: 'usebruno.png' },
  { url: 'https://testdev.tools/images/tools/jmeter.png', file: 'jmeter.png' },
  { url: 'https://testdev.tools/images/tools/k6.png', file: 'k6.png' },
  { url: 'https://testdev.tools/images/tools/charlesproxy.png', file: 'charlesproxy.png' },
  { url: 'https://testdev.tools/images/tools/fiddler.png', file: 'fiddler.png' },
  { url: 'https://testdev.tools/images/tools/burp-suite-logger.png', file: 'burp-suite-logger.png' },
  { url: 'https://testdev.tools/images/tools/testcontainers.svg', file: 'testcontainers.svg' },
  { url: 'https://testdev.tools/images/tools/mockaroo.png', file: 'mockaroo.png' },
  { url: 'https://testdev.tools/images/tools/axe-core.jpg', file: 'axe-core.jpg' },
  { url: 'https://testdev.tools/images/tools/gitlab.png', file: 'gitlab.png' },
  { url: 'https://testdev.tools/images/tools/sonarqube.png', file: 'sonarqube.png' },
  { url: 'https://testdev.tools/images/tools/wireshark.png', file: 'wireshark.png' },
  { url: 'https://testdev.tools/images/tools/zap.png', file: 'zap.png' },
  { url: 'https://testdev.tools/images/tools/sqlmap.ico', file: 'sqlmap.ico' },
  { url: 'https://testdev.tools/images/tools/metasploit.ico', file: 'metasploit.ico' },
  { url: 'https://testdev.tools/images/tools/junit5.png', file: 'junit5.png' },
  { url: 'https://testdev.tools/images/tools/pytest.svg', file: 'pytest.svg' },
  { url: 'https://testdev.tools/images/tools/test-ng.png', file: 'test-ng.png' },
  { url: 'https://testdev.tools/images/tools/mochawesome.png', file: 'mochawesome.png' },
  { url: 'https://testdev.tools/images/tools/regex101.png', file: 'regex101.png' },
  { url: 'https://testdev.tools/images/tools/jsonpath.png', file: 'jsonpath.png' },
  { url: 'https://testdev.tools/images/tools/lighthouse.svg', file: 'lighthouse.svg' },
  { url: 'https://testdev.tools/images/tools/browserstack.png', file: 'browserstack.png' },
  { url: 'https://testdev.tools/images/tools/saucelabs.png', file: 'saucelabs.png' },
  { url: 'https://testdev.tools/images/tools/vs-code.png', file: 'vs-code.png' },
  { url: 'https://testdev.tools/images/tools/intellijidea.png', file: 'intellijidea.png' },
  { url: 'https://testdev.tools/images/tools/docker.png', file: 'docker.png' },
];

const outputDir = path.join(__dirname, '..', 'public', 'images', 'tools');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function downloadFile(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);

    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);

        file.on('finish', () => {
          file.close();
          resolve();
        });
      } else {
        file.close();
        fs.unlink(filepath, () => {});
        reject(new Error(`Failed to download: ${url} (Status: ${response.statusCode})`));
      }
    }).on('error', (err) => {
      file.close();
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

async function downloadAll() {
  console.log(`开始下载 ${logos.length} 个 logo 图片...\n`);

  let success = 0;
  let failed = 0;

  for (const logo of logos) {
    const filepath = path.join(outputDir, logo.file);
    process.stdout.write(`下载 ${logo.file}... `);

    try {
      await downloadFile(logo.url, filepath);
      console.log('✓');
      success++;
    } catch (error) {
      console.log(`✗ (${error.message})`);
      failed++;
    }
  }

  console.log(`\n完成! 成功: ${success}, 失败: ${failed}`);
}

downloadAll().catch(console.error);
