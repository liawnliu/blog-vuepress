// https://github.com/vuejs/vuepress/issues/2377
const { escapeHtml } = require('markdown-it/lib/common/utils');

function renderInlineCode(tokens, idx, options, env, renderer) {
  var token = tokens[idx];

  return  '<code v-pre' + renderer.renderAttrs(token) + '>' +
    escapeHtml(tokens[idx].content) +
    '</code>';
}

module.exports = function(md, config) {
  md.renderer.rules.code_inline = renderInlineCode;
};