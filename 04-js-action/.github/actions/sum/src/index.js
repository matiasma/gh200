const core = require('@actions/core');

try {
  const a = Number(core.getInput('a', { required: true }));
  const b = Number(core.getInput('b', { required: true }));

  if (Number.isNaN(a) || Number.isNaN(b)) {
    core.setFailed('Inputs a e b devem ser numéricos');
    return;
  }

  const result = a + b;
  core.info(`Sum: ${a} + ${b} = ${result}`);
  core.setOutput('result', result);

  // Mascara um exemplo
  core.setSecret('super-secret-value');
} catch (err) {
  core.setFailed(err.message);
}
