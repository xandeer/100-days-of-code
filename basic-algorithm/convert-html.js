function convertHTML(str) {
  return str.replace(/[<>'"&]/g, function(match) {
    switch (match) {
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case "'":
        return '&apos;';
      case '"':
        return '&quot;';
      case '&':
        return '&amp;';
    }
  });
}

module.exports = convertHTML;
