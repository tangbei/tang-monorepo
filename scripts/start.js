const { prompt } = require('enquirer');
const { validateAppType, getAppName } = require('./config');
const { execSync } = require('child_process');

const projectList = [
  { message: '个人博客', name: 'blog' },
  { message: '服务端渲染应用', name: 'next' },
  { message: '其他', name: 'other' },
];

async function start() {
  const env = process.argv[2];
  let appType = process.argv[3];
  if (!appType || !validateAppType(appType)) {
    const select = await prompt({
      type: 'select',
      message: '请选择应用类型:',
      name: 'type',
      required: true,
      choices: projectList,
    });
    appType = select.type;
  }
  console.log('appType', appType);
  const appName = getAppName(appType);
  try {
    // 执行启动命令
    execSync(`pnpm --filter ${appName} run ${env}`, {
      stdio: 'inherit',
      cwd: process.cwd(),
    });
  } catch (error) {
    console.error('启动失败:', error.message);
    process.exit(1);
  }
}
start();
