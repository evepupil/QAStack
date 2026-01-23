const fs = require('fs');
const path = require('path');

// Successfully downloaded logos
const downloadedLogos = [
  'playwright.svg',
  'selenium.ico',
  'cypress.png',
  'appium.png',
  'maestro.png',
  'Detox.ico',
  'postman.png',
  'usebruno.png',
  'jmeter.png',
  'k6.png',
  'charlesproxy.png',
  'fiddler.png',
  'testcontainers.svg',
  'mockaroo.png',
  'zap.png',
  'sqlmap.ico',
  'metasploit.ico',
  'junit5.png',
  'pytest.svg',
  'regex101.png',
  'lighthouse.svg',
  'vs-code.png',
  'intellijidea.png',
  'docker.png',
];

const dataDir = path.join(__dirname, '..', 'data', 'tools');

function updateJsonFile(filepath) {
  console.log(`处理文件: ${filepath}`);

  const content = fs.readFileSync(filepath, 'utf8');
  const data = JSON.parse(content);

  let updateCount = 0;

  data.forEach((tool) => {
    if (tool.logo && typeof tool.logo === 'string') {
      // Check if this logo was successfully downloaded
      for (const logoFile of downloadedLogos) {
        const oldUrl = `https://testdev.tools/images/tools/${logoFile}`;
        if (tool.logo === oldUrl) {
          const newUrl = `/images/tools/${logoFile}`;
          tool.logo = newUrl;
          updateCount++;
          console.log(`  更新: ${tool.slug} -> ${newUrl}`);
          break;
        }
      }
    }
  });

  // Write back to file with proper formatting
  fs.writeFileSync(filepath, JSON.stringify(data, null, 2) + '\n', 'utf8');

  console.log(`  完成! 更新了 ${updateCount} 个工具的 logo 路径\n`);
}

// Update both en.json and zh.json
updateJsonFile(path.join(dataDir, 'en.json'));
updateJsonFile(path.join(dataDir, 'zh.json'));

console.log('✓ 所有文件更新完成!');
