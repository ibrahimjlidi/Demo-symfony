(self.webpackChunk=self.webpackChunk||[]).push([[143],{1488:t=>{function n(t){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}n.keys=()=>[],n.resolve=n,n.id=1488,t.exports=n},8205:(t,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>s});const s={}},3212:(t,n,e)=>{"use strict";e(2731),e(90),e(666),e(2077),e(2238),e(9755);var s=e(7802),o=e.n(s),r=e(3306),a=e.n(r),c=e(5488),i=e.n(c);o().registerLanguage("php",a()),o().registerLanguage("twig",i()),o().initHighlightingOnLoad();e(2682),(0,e(2192).x)(e(1488))},2682:(t,n,e)=>{"use strict";var s=e(9755);e(9826),e(4916),e(5306),e(4723),s((function(){var t=s("#sourceCodeModal"),n=t.find("code.php"),e=t.find("code.twig");function o(t,n){return'<a class="doclink" target="_blank" href="'+t+'">'+n+"</a>"}t.find(".hljs-comment").each((function(){s(this).html(s(this).html().replace(/https:\/\/symfony.com\/doc\/[\w/.#-]+/g,(function(t){return o(t,t)})))}));var r={"@Cache":"https://symfony.com/doc/current/bundles/SensioFrameworkExtraBundle/annotations/cache.html","@IsGranted":"https://symfony.com/doc/current/bundles/SensioFrameworkExtraBundle/annotations/security.html#isgranted","@ParamConverter":"https://symfony.com/doc/current/bundles/SensioFrameworkExtraBundle/annotations/converters.html","@Route":"https://symfony.com/doc/current/routing.html#creating-routes-as-annotations","@Security":"https://symfony.com/doc/current/bundles/SensioFrameworkExtraBundle/annotations/security.html#security"};n.find(".hljs-doctag").each((function(){var t=s(this).text();r[t]&&s(this).html(o(r[t],t))})),e.find(".hljs-template-tag > .hljs-name").each((function(){var t=s(this).text();if("else"!==t&&!t.match(/^end/)){var n="https://twig.symfony.com/doc/3.x/tags/"+t+".html#"+t;s(this).html(o(n,t))}})),e.find(".hljs-template-variable > .hljs-name").each((function(){var t=s(this).text(),n="https://twig.symfony.com/doc/3.x/functions/"+t+".html#"+t;s(this).html(o(n,t))}))}))}},t=>{"use strict";t.O(0,[755,498,169],(()=>{return n=3212,t(t.s=n);var n}));t.O()}]);