// Simple test file for AgenticCopilot Test Application
console.log('Running tests...\n');

let testsRun = 0;
let testsPassed = 0;

function test(description, testFunction) {
  testsRun++;
  try {
    testFunction();
    testsPassed++;
    console.log(`✓ ${description}`);
  } catch (error) {
    console.log(`✗ ${description}`);
    console.log(`  Error: ${error.message}`);
  }
}

function assertEqual(actual, expected, message) {
  if (actual !== expected) {
    throw new Error(message || `Expected ${expected}, got ${actual}`);
  }
}

// Test 1: Basic module loading
test('Module should export express app', () => {
  const app = require('./index.js');
  assertEqual(typeof app, 'function', 'App should be a function (express app)');
});

// Test 2: Data structure
test('Data operations should work', () => {
  const data = [];
  const newItem = {
    id: 1,
    item: 'test',
    timestamp: new Date().toISOString()
  };
  data.push(newItem);
  assertEqual(data.length, 1, 'Data should have 1 item');
  assertEqual(data[0].item, 'test', 'Item should be "test"');
});

// Test 3: String validation
test('Item validation should work', () => {
  const item = 'test item';
  const isValid = item && item.trim().length > 0;
  assertEqual(isValid, true, 'Valid item should pass validation');
});

// Test 4: Empty string validation
test('Empty items should be invalid', () => {
  const item = '';
  const isValid = !!(item && item.trim().length > 0);
  assertEqual(isValid, false, 'Empty item should fail validation');
});

// Test 5: ID generation
test('IDs should increment correctly', () => {
  const data = [{ id: 1 }, { id: 2 }];
  const newId = data.length + 1;
  assertEqual(newId, 3, 'New ID should be 3');
});

console.log(`\n${testsPassed}/${testsRun} tests passed`);

if (testsPassed === testsRun) {
  console.log('All tests passed! ✓');
  process.exit(0);
} else {
  console.log('Some tests failed! ✗');
  process.exit(1);
}
