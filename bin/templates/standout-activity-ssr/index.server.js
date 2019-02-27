// 服务器端入口文件

import { createRenderer } from 'vue-server-renderer'
import createApp from './index.js' // eslint-disable-line

const root = createApp()
const renderer = createRenderer()

async function GET(ctx) {
  const title = '智联招聘'
  const html = `<!DOCTYPE html>
<html>
<head>
<title>${title}</title>
<link rel="shortcut icon" href="//common-bucket.zhaopin.cn/img/favicon/favicon-2011.ico" />
${ctx.template.placeholders.head.style}
${ctx.template.placeholders.head.link}
<script>
window.onerror=((r,o,e,n,s)=>{if(r.toLowerCase().indexOf("script error")>-1)console.log("Script Error: See Browser Console for Detail");else{const i=["Message: "+r,"URL: "+o,"Line: "+e,"Column: "+n,"Error object: "+JSON.stringify(s)];console.error(i.join(" - "))}return!1});
;(function () {
    var src = '//cdn.bootcss.com/eruda/1.4.4/eruda.min.js';
    if (!/eruda=true/.test(window.location) && localStorage.getItem('active-eruda') != 'true') return;
    document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
    document.write('<scr' + 'ipt>eruda.init();</scr' + 'ipt>');
})();
</script>
${ctx.template.placeholders.head.script}
</head>
<body>
${ctx.template.placeholders.body.root}
${ctx.template.placeholders.body.script}
</body>
</html>
`
  const options = {
    html,
    root,
    renderer,
    options: {
      prepare: {
        logger: ctx.log,
      },
    },
  }

  const htmlDocument = await ctx.render(options)

  ctx.response.set(htmlDocument, 200)
}

export default {
  GET,
}
