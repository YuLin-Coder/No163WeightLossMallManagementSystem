System.register(["./index-legacy.ee3fd5f4.js"],(function(a){"use strict";var e;return{setters:[function(a){e=a.s}],execute:function(){a("a",(async a=>(await e.get("/backend/core/org",{params:a})).data)),a("v",(async a=>(await e.get(`/backend/core/org/${a}`)).data)),a("w",(async a=>(await e.post("/backend/core/org",a)).data)),a("x",(async a=>(await e.post("/backend/core/org?_method=put",a)).data)),a("z",(async a=>(await e.post("/backend/core/org/order?_method=put",a)).data)),a("y",(async a=>(await e.post("/backend/core/org?_method=delete",a)).data)),a("b",(async a=>(await e.get("/backend/core/role",{params:a})).data)),a("i",(async a=>(await e.get(`/backend/core/role/${a}`)).data)),a("j",(async a=>(await e.post("/backend/core/role",a)).data)),a("k",(async a=>(await e.post("/backend/core/role?_method=put",a)).data)),a("n",(async a=>(await e.post("/backend/core/role/order?_method=put",a)).data)),a("l",(async a=>(await e.post("/backend/core/role?_method=delete",a)).data)),a("q",(async a=>(await e.get("/backend/core/group",{params:a})).data)),a("o",(async a=>(await e.get(`/backend/core/group/${a}`)).data)),a("p",(async a=>(await e.post("/backend/core/group",a)).data)),a("r",(async a=>(await e.post("/backend/core/group?_method=put",a)).data)),a("t",(async a=>(await e.post("/backend/core/group/order?_method=put",a)).data)),a("s",(async a=>(await e.post("/backend/core/group?_method=delete",a)).data)),a("h",(async a=>(await e.get("/backend/core/user",{params:a})).data)),a("c",(async a=>(await e.get(`/backend/core/user/${a}`)).data)),a("d",(async a=>(await e.post("/backend/core/user",a)).data)),a("f",(async a=>(await e.post("/backend/core/user?_method=put",a)).data)),a("g",(async a=>(await e.post("/backend/core/user?_method=delete",a)).data)),a("u",(async a=>(await e.get("/backend/core/user/username-validation",{params:{username:a}})).data)),a("e",(async a=>(await e.get("/backend/core/user/email-validation",{params:{email:a}})).data)),a("m",(async a=>(await e.get("/backend/core/user/mobile-validation",{params:{mobile:a}})).data))}}}));
