(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,function(t,a,e){t.exports={"profile-primery-color":"#778899",profile:"Profile_profile__2koTM",avatar:"Profile_avatar__1wuu5",description:"Profile_description__22lv_",stats:"Profile_stats__hqmOO",stats_item:"Profile_stats_item__222hc",stats_item_label:"Profile_stats_item_label__5H0cp",stats_item_data:"Profile_stats_item_data__25jtd",name:"Profile_name__TQRid",tag:"Profile_tag__1eA2p",location:"Profile_location__3ELYp"}},,function(t,a,e){t.exports={friend_list:"FriendList_friend_list__2WxW5",item:"FriendList_item__1bYv5",is_online:"FriendList_is_online__2T-mP",avatar:"FriendList_avatar__iMS8b",name:"FriendList_name__2D9qr"}},function(t,a,e){t.exports={statistics:"Statistics_statistics__2ML0x",label:"Statistics_label__3Vqef",percentage:"Statistics_percentage__3pT2q",stat_list:"Statistics_stat_list__eCv7v",stat_list_item:"Statistics_stat_list_item__fsgRB"}},function(t){t.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg","stats":{"followers":5603,"views":4827,"likes":1308}}')},function(t,a,e){t.exports={"transaction-border-color":"#d3d3d3",transaction_history:"TransactionHistory_transaction_history__y5FwQ",transaction_history_body:"TransactionHistory_transaction_history_body__483vP"}},,,function(t){t.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(t){t.exports=JSON.parse('[{"avatar":"https://www.flaticon.com/svg/static/icons/svg/763/763704.svg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998671.svg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1623/1623681.svg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/2977/2977285.svg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998749.svg","name":"Poly","isOnline":false,"id":1284}]')},function(t){t.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},,,,,function(t,a,e){},,,function(t,a,e){"use strict";e.r(a);e(2);var s=e(8),c=e.n(s),i=(e(16),e(3)),n=e.n(i),r=e(0),o=function(t){var a=t.friends;return Object(r.jsx)("ul",{className:n.a.friend_list,children:a.map((function(t){var a=t.id,e=t.avatar,s=t.name,c=t.isOnline;return Object(r.jsxs)("li",{className:n.a.item,children:[Object(r.jsx)("span",{className:n.a.is_online,style:{backgroundColor:c?"#008000":"red"}}),Object(r.jsx)("img",{className:n.a.avatar,src:e,alt:"",width:"48"}),Object(r.jsx)("p",{className:n.a.name,children:s})]},a)}))})},l=e(1),d=e.n(l);console.log(d.a);var b=function(t){var a=t.name,e=t.tag,s=t.location,c=t.avatar,i=t.stats;return Object(r.jsx)("div",{className:d.a.profile,children:Object(r.jsxs)("div",{className:d.a.description,children:[Object(r.jsx)("img",{src:c,alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",className:d.a.avatar}),Object(r.jsx)("p",{className:d.a.name,children:a}),Object(r.jsxs)("p",{className:d.a.tag,children:["@",e]}),Object(r.jsx)("p",{className:d.a.location,children:s}),Object(r.jsx)("ul",{className:d.a.stats,children:Object.keys(i).map((function(t){return Object(r.jsxs)("li",{className:d.a.stats_item,children:[Object(r.jsx)("span",{className:d.a.stats_item_label,children:t}),Object(r.jsx)("span",{className:d.a.stats_item_data,children:"followers"===t&&0===i[t]?"No followers":i[t]})]},t)}))})]})})},_=e(4),m=e.n(_),p=function(t){var a=t.title,e=t.stats;return Object(r.jsxs)("section",{className:"statistics",children:[Object(r.jsx)("h2",{className:m.a.title,children:a}),Object(r.jsx)("ul",{className:m.a.stat_list,children:e.map((function(t){var a=t.id,e=t.label,s=t.percentage;return Object(r.jsxs)("li",{className:m.a.stat_list_item,style:{backgroundColor:"rgb(".concat(255*Math.random(),", ").concat(255*Math.random(),", ").concat(255*Math.random(),")")},children:[Object(r.jsx)("span",{className:m.a.label,children:e}),Object(r.jsxs)("span",{className:m.a.percentage,children:[s,"%"]})]},a)}))})]})};p.defaultProps={title:null};var u=p,f=e(6),j=e.n(f),y=function(t){var a=t.transactions;return Object(r.jsxs)("table",{className:j.a.transaction_history,children:[Object(r.jsx)("thead",{className:j.a.transaction_history_thead,children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Type"}),Object(r.jsx)("th",{children:"Amount"}),Object(r.jsx)("th",{children:"Currency"})]})}),Object(r.jsx)("tbody",{className:j.a.transaction_history_body,children:a.map((function(t){var a=t.id,e=t.type,s=t.amount,c=t.currency;return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:e}),Object(r.jsx)("td",{children:s}),Object(r.jsx)("td",{children:c})]},a)}))})]})},h=e(9),v=e(5),O=e(10),x=e(11);var g=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(b,{name:v.name,tag:v.tag,location:v.location,avatar:v.avatar,stats:v.stats}),Object(r.jsx)(u,{title:"Upload stats",stats:h}),Object(r.jsx)(o,{friends:O}),Object(r.jsx)(y,{transactions:x})]})};e(18);c.a.render(Object(r.jsx)(g,{}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.4d1265fb.chunk.js.map