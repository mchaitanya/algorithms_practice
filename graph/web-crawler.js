// https://leetcode.com/problems/web-crawler/
// tags - graph
/**
 * // This is the HtmlParser's API interface.
 * // You should not implement it, or speculate about its implementation
 * function HtmlParser() {
 *
 *		@param {string} url
 *     	@return {string[]}
 *     	this.getUrls = function(url) {
 *      	...
 *     	};
 * };
 */

/**
 * @param {string} startUrl
 * @param {HtmlParser} htmlParser
 * @return {string[]}
 */
var crawl = function (startUrl, htmlParser) {
  // Assume all URLs use the HTTP protocols without any port.
  // The prefix 'http://' contains 7 chars.
  function extractHost(url) {
    const slashIndex = url.indexOf("/", 7);
    return slashIndex > 0 ? url.slice(7, slashIndex) : url.slice(7);
  }

  const urls = new Set();
  const host = extractHost(startUrl);
  (function dfs(url) {
    urls.add(url);
    for (const nextUrl of htmlParser.getUrls(url)) {
      if (!urls.has(nextUrl) && extractHost(nextUrl) === host) {
        dfs(nextUrl);
      }
    }
  })(startUrl);
  return Array.from(urls);
};
