#!/usr/bin/env node

/**
 * FlowLabKit UI Package Statistics Checker
 * Run with: node scripts/check-stats.js
 */

import https from 'https';

const packageName = '@flowlabkit/ui';

// Function to make API requests
function fetchJSON(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (error) {
          reject(error);
        }
      });
    }).on('error', reject);
  });
}

async function checkPackageStats() {
  console.log('🔍 Checking FlowLabKit UI Package Statistics...\n');
  
  try {
    // 1. Get package info from npm registry
    console.log('📦 Package Information:');
    const packageInfo = await fetchJSON(`https://registry.npmjs.org/${packageName}`);
    const latestVersion = packageInfo['dist-tags'].latest;
    const publishDate = new Date(packageInfo.time[latestVersion]).toLocaleDateString();
    
    console.log(`   Name: ${packageName}`);
    console.log(`   Latest Version: ${latestVersion}`);
    console.log(`   Published: ${publishDate}`);
    console.log(`   Total Versions: ${Object.keys(packageInfo.versions).length}`);
    console.log(`   License: ${packageInfo.license}`);
    console.log(`   Description: ${packageInfo.description}\n`);

    // 2. Get download statistics
    console.log('📊 Download Statistics:');
    
    // Last day
    const lastDay = await fetchJSON(`https://api.npmjs.org/downloads/point/last-day/${packageName}`);
    console.log(`   Last Day: ${lastDay.downloads || 0} downloads`);
    
    // Last week
    const lastWeek = await fetchJSON(`https://api.npmjs.org/downloads/point/last-week/${packageName}`);
    console.log(`   Last Week: ${lastWeek.downloads || 0} downloads`);
    
    // Last month
    const lastMonth = await fetchJSON(`https://api.npmjs.org/downloads/point/last-month/${packageName}`);
    console.log(`   Last Month: ${lastMonth.downloads || 0} downloads`);
    
    // Last year
    const lastYear = await fetchJSON(`https://api.npmjs.org/downloads/point/last-year/${packageName}`);
    console.log(`   Last Year: ${lastYear.downloads || 0} downloads\n`);

    // 3. Get detailed range data for last 30 days
    console.log('📈 Last 30 Days Breakdown:');
    const endDate = new Date().toISOString().split('T')[0];
    const startDate = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
    
    const rangeData = await fetchJSON(`https://api.npmjs.org/downloads/range/${startDate}:${endDate}/${packageName}`);
    
    if (rangeData.downloads && rangeData.downloads.length > 0) {
      const totalDownloads = rangeData.downloads.reduce((sum, day) => sum + day.downloads, 0);
      const avgDaily = Math.round(totalDownloads / rangeData.downloads.length);
      
      console.log(`   Total Downloads (30 days): ${totalDownloads}`);
      console.log(`   Average Daily Downloads: ${avgDaily}`);
      
      // Show last 7 days
      console.log('\n   📅 Last 7 Days:');
      rangeData.downloads.slice(-7).forEach(day => {
        console.log(`      ${day.day}: ${day.downloads} downloads`);
      });
    }

    console.log('\n🔗 Useful Links:');
    console.log(`   npm Page: https://www.npmjs.com/package/${packageName}`);
    console.log(`   npm Charts: https://npmcharts.com/compare/${packageName}`);
    console.log(`   Bundle Size: https://bundlephobia.com/package/${packageName}`);
    console.log(`   GitHub: ${packageInfo.repository?.url || 'Not specified'}`);
    
  } catch (error) {
    console.error('❌ Error fetching statistics:', error.message);
    
    if (error.message.includes('404')) {
      console.log('\n💡 This might be because:');
      console.log('   - The package was just published (stats take time to appear)');
      console.log('   - No downloads have occurred yet');
      console.log('   - API is temporarily unavailable');
    }
  }
}

// Run the stats checker
checkPackageStats();