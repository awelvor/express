const os = require('os');
const path = require('path');

// Basic system information
console.log(`OS Platform: ${os.platform()}`);
console.log(`OS Type: ${os.type()}`);
console.log(`OS Release: ${os.release()}`);
console.log(`CPU Architecture: ${os.arch()}`);
console.log(`Hostname: ${os.hostname()}`);

// Memory information
const totalMemGB = (os.totalmem() / (1024 * 1024 * 1024)).toFixed(2);
const freeMemGB = (os.freemem() / (1024 * 1024 * 1024)).toFixed(2);
console.log(`Memory: ${freeMemGB}GB free of ${totalMemGB}GB`);

// User information
const userInfo = os.userInfo();
console.log(`Current User: ${userInfo.username}`);
console.log(`Home Directory: ${os.homedir()}`);

console.log(`CPU Architecture: ${os.arch()}`);
const platform = os.platform();
console.log(`Platform: ${platform}`);

// Get OS type
console.log(`OS Type: ${os.type()}`);
// Get OS release information
console.log(`OS Release: ${os.release()}`);
// Get kernel version
console.log(`Kernel Version: ${os.version()}`);

// Get current user information
const user = os.userInfo();
console.log('User Information:');
console.log(`- Username: ${user.username}`);
console.log(`- User ID: ${user.uid}`);
console.log(`- Group ID: ${user.gid}`);
console.log(`- Home Directory: ${user.homedir}`);

// Get the home directory
const homeDir = os.homedir();
console.log(`Home Directory: ${homeDir}`);

// Example: Create a path to a config file in the user's home directory
const configPath = path.join(homeDir, '.myapp', 'config.json');
console.log(`Config file will be saved to: ${configPath}`);
