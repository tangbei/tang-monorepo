#!/usr/bin/env node

// 构建脚本 - 根据环境变量或命令行参数自动构建对应的子应用
// 使用方法: pnpm build [stu|tea|sta] 或 export APP_NAME=stu && pnpm build

const { execSync } = require('child_process');
const { getAppName, validateAppType, getAppDisplayName, getAppDir, showBuildHelp } = require('./config');

// 优先获取命令行参数，如果没有则获取环境变量
const appName = process.argv[2] || process.env.APP_NAME;

// 检查应用名称
if (!appName) {
  console.error('❌ 错误: 请指定应用名称');
  console.info('');
  showBuildHelp();
  process.exit(1);
}

// 验证应用类型
if (!validateAppType(appName)) {
  console.error(`❌ 错误: 不支持的应用名称 '${appName}'`);
  console.info('');
  showBuildHelp();
  process.exit(1);
}

const appPackageName = getAppName(appName);
const appDisplayName = getAppDisplayName(appName);

console.info(`🔨 正在构建应用: ${appDisplayName} (${appPackageName})`);

try {
  // 执行构建命令
  execSync(`pnpm --filter ${appPackageName} run build`, {
    stdio: 'inherit',
    cwd: process.cwd(),
  });

  // 拷贝构建产物到根目录
  console.info('📁 正在拷贝构建产物到根目录...');
  const fs = require('fs');
  const path = require('path');

  // 获取应用目录名
  const appDir = getAppDir(appName);
  const sourceDist = path.join('apps', appDir, 'dist');
  const targetDist = 'dist';

  // 检查源目录是否存在
  if (!fs.existsSync(sourceDist)) {
    console.error(`❌ 错误: 构建产物目录不存在: ${sourceDist}`);
    process.exit(1);
  }

  // 清理目标目录
  if (fs.existsSync(targetDist)) {
    fs.rmSync(targetDist, { recursive: true, force: true });
  }

  // 拷贝构建产物
  fs.cpSync(sourceDist, targetDist, { recursive: true });

  console.info(`✅ ${appDisplayName} 构建完成！构建产物位于: ./dist`);

} catch (error) {
  console.error('❌ 构建失败:', error.message);
  process.exit(1);
}


