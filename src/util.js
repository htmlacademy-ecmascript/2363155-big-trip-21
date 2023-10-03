/**
 * @param {TemplateStringsArray} strings
 * @param {...any} values
 * @returns {string}
 */
function html(strings, ...values) {
  return strings.map((string, index) => `${string}${values[index] || ''}`).join('');
}

export {html};

