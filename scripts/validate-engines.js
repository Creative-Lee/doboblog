#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const semver = require('semver');

function parseEngineRange(range) {
  // ">=22" 형태 파싱
  const match = range.match(/>=(\d+)(?:\.\d+)?(?:\.\d+)?/);
  if (!match) throw new Error(`Invalid range: ${range}`);
  return {
    min: `${match[1]}.0.0`,
  };
}

function validateEngines() {
  console.log('🔍 Validating engine requirements across workspace...\n');

  // 루트 package.json 읽기
  const rootPkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  const rootEngines = rootPkg.engines || {};

  if (!rootEngines.node) {
    console.error('❌ Root package.json must specify node engine requirements');
    process.exit(1);
  }

  const rootNodeRange = parseEngineRange(rootEngines.node);
  console.log(`📋 Root allows Node: ${rootEngines.node}`);

  // 모든 워크스페이스 앱 검사
  const appsDir = path.join(process.cwd(), 'apps');
  if (!fs.existsSync(appsDir)) return;

  const apps = fs.readdirSync(appsDir).filter(dir => {
    const pkgPath = path.join(appsDir, dir, 'package.json');
    return fs.existsSync(pkgPath);
  });

  let hasErrors = false;

  for (const app of apps) {
    const pkgPath = path.join(appsDir, app, 'package.json');
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));

    console.log(`\n🔍 Checking ${app}...`);

    if (!pkg.engines?.node) {
      console.log(`  ✅ No engines specified (inherits root: ${rootEngines.node})`);
      continue;
    }

    try {
      const appNodeRange = parseEngineRange(pkg.engines.node);

      // 앱의 최소 요구사항이 루트보다 낮으면 에러
      if (semver.lt(appNodeRange.min, rootNodeRange.min)) {
        console.error(`  ❌ App minimum Node requirement too low: ${pkg.engines.node}`);
        console.error(`     Must be >= ${rootNodeRange.min} (root constraint)`);
        hasErrors = true;
      } else {
        console.log(`  ✅ Valid range: ${pkg.engines.node} (meets root requirement)`);
      }
    } catch (error) {
      console.error(`  ❌ Invalid engine format: ${pkg.engines.node}`);
      hasErrors = true;
    }
  }

  if (hasErrors) {
    console.error('\n💥 Engine validation failed!');
    process.exit(1);
  }

  console.log('\n✅ All engine requirements are valid!');
}

if (require.main === module) {
  validateEngines();
}

module.exports = { validateEngines };
