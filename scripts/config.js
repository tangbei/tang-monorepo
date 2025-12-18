// 共享配置文件 - 包含应用映射和通用函数

// 应用映射 - 支持缩写和完整名称
const APPS = {
  /** 个人博客 */
  'blog': 'tang-blog',
  /** 服务端渲染应用 */
  'next': 'tang-next',
};

// 环境类型
const ENVIRONMENTS = {
  'dev': '开发环境',
  'sit': 'SIT环境',
  'pre': '预发环境',
  'prod': '生产环境',
  'mock': 'Mock环境',
};

// 获取应用名称
function getAppName(appType) {
  return APPS[appType];
}

// 验证应用类型
function validateAppType(appType) {
  return Object.prototype.hasOwnProperty.call(APPS, appType);
}

// 显示帮助信息
function showHelp(envType) {
  const envName = ENVIRONMENTS[envType] || envType;
  console.info(`使用方法: pnpm ${envType} [应用名称]`);
  console.info('');
  console.info('支持的应用名称:');
  console.info('  个人博客: blog');
  console.info('  服务端渲染应用: next');
  console.info('');
  console.info('示例:');
  console.info(`  pnpm ${envType} blog   # 启动个人博客${envName}`);
  console.info(`  pnpm ${envType} next   # 启动服务端渲染应用${envName}`);
}

// 获取应用显示名称
function getAppDisplayName(appType) {
  const displayNames = {
    'blog': '个人博客',
    'next': '服务端渲染应用',
  };
  return displayNames[appType] || appType;
}

// 获取应用目录名
function getAppDir(appType) {
  const appDirs = {
    'blog': 'blog',
    'next': 'next',
  };
  return appDirs[appType] || appType;
}

// 显示构建帮助信息
function showBuildHelp() {
  console.info('使用方法:');
  console.info('');
  console.info('方式1: 命令行参数（推荐）');
  console.info('  pnpm build blog        # 构建个人博客');
  console.info('  pnpm build next        # 构建服务端渲染应用');
  console.info('');
  console.info('方式2: 环境变量（适用于 DevOps）');
  console.info('  export APP_NAME=stu');
  console.info('  pnpm build');
  console.info('');
  console.info('支持的应用名称:');
  console.info('  个人博客: blog');
  console.info('  服务端渲染应用: next');
}

// 导出配置和函数
module.exports = {
  APPS,
  ENVIRONMENTS,
  getAppName,
  validateAppType,
  showHelp,
  getAppDisplayName,
  getAppDir,
  showBuildHelp,
};
