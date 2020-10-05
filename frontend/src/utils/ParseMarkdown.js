import mhljs from 'markdown-it-highlightjs';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt({
  html: true,
  linkify: true,
  langPrefix: 'language-',
  typographer: true,
}).use(mhljs);

const ParseMarkdown = markdown => {
  const parsedHTML = md.render(markdown);
  return parsedHTML;
};

export default ParseMarkdown;
