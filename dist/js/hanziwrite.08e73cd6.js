(window.webpackJsonp=window.webpackJsonp||[]).push([["hanziwrite"],{"1f70":function(t){t.exports=JSON.parse('{"strokes":["M 475 485 Q 547 653 563 683 Q 573 695 565 708 Q 558 721 519 742 Q 491 757 480 754 Q 462 750 465 730 Q 484 537 292 308 Q 280 296 269 284 Q 212 217 68 102 Q 58 92 66 89 Q 76 86 90 92 Q 190 138 274 210 Q 380 294 462 456 L 475 485 Z","M 462 456 Q 480 423 575 292 Q 666 171 733 101 Q 764 67 793 69 Q 881 75 958 79 Q 991 80 992 89 Q 993 98 956 112 Q 772 178 740 205 Q 617 304 490 466 Q 481 476 475 485 C 457 509 447 482 462 456 Z"],"medians":[[[483,736],[508,702],[511,678],[473,552],[408,416],[328,303],[271,244],[144,139],[72,95]],[[474,477],[477,459],[490,439],[571,333],[691,200],[753,145],[798,119],[986,90]]]}')},c31f:function(t,a,e){e.r(a);let r=e("a1f5"),n=e("1f70"),i={name:"hanziwrite",data:()=>({data:{strokes:["M 350 571 Q 380 593 449 614 Q 465 615 468 623 Q 471 633 458 643 Q 439 656 396 668 Q 381 674 370 672 Q 363 668 363 657 Q 364 621 200 527 Q 196 518 201 516 Q 213 516 290 546 Q 303 550 316 556 L 350 571 Z","M 584 466 Q 666 485 734 497 Q 746 496 754 511 Q 755 524 729 533 Q 693 554 622 527 Q 598 520 575 511 L 537 499 Q 518 495 500 488 Q 442 472 386 457 L 337 446 Q 327 446 179 416 Q 148 409 173 392 Q 212 365 241 376 Q 287 389 339 404 L 387 416 Q 460 438 545 457 L 584 466 Z","M 386 457 Q 387 493 398 517 Q 405 535 390 548 Q 371 564 350 571 C 323 583 303 583 316 556 Q 315 556 316 555 Q 338 519 337 478 Q 337 462 337 446 L 339 404 Q 340 343 339 289 L 338 241 Q 337 180 334 133 Q 333 115 323 109 Q 317 105 250 119 Q 238 122 239 114 Q 240 108 249 100 Q 309 42 328 6 Q 341 -10 357 3 Q 390 36 390 126 Q 387 169 387 265 L 387 306 Q 387 355 387 416 L 386 457 Z","M 339 289 Q 254 261 161 229 Q 139 222 101 221 Q 86 220 85 207 Q 84 192 94 184 Q 119 166 157 147 Q 169 144 182 154 Q 239 199 338 241 L 387 265 Q 477 314 484 318 Q 499 327 498 337 Q 492 343 479 340 Q 434 324 387 306 L 339 289 Z","M 635 195 Q 690 75 797 -14 Q 876 -62 898 -47 Q 920 -37 914 3 Q 905 34 899 152 Q 900 174 894 178 Q 890 179 884 160 Q 857 75 838 60 Q 823 56 785 88 Q 710 155 670 226 L 644 279 Q 599 381 584 466 L 575 511 Q 547 659 576 752 Q 586 779 543 805 Q 509 827 489 825 Q 470 824 479 795 Q 503 752 507 707 Q 517 601 537 499 L 545 457 Q 573 334 612 245 L 635 195 Z","M 612 245 Q 558 197 452 138 Q 442 132 448 128 Q 455 124 468 126 Q 523 135 574 160 Q 608 175 635 195 L 670 226 Q 706 260 747 317 Q 762 336 778 354 Q 788 361 785 374 Q 781 386 753 410 Q 734 428 723 428 Q 708 427 707 411 Q 701 354 644 279 L 612 245 Z","M 687 669 Q 718 648 754 623 Q 770 613 786 615 Q 798 618 801 632 Q 802 648 789 678 Q 780 697 746 708 Q 665 726 651 715 Q 647 711 651 697 Q 655 687 687 669 Z"],medians:[[[458,627],[392,631],[336,588],[274,552],[258,550],[253,542],[220,530],[212,532],[203,522]],[[174,404],[215,398],[241,402],[672,514],[742,512]],[[323,556],[351,542],[365,522],[361,116],[340,67],[246,113]],[[100,206],[124,195],[163,189],[492,334]],[[492,807],[537,760],[538,627],[569,435],[612,299],[676,170],[717,112],[779,48],[817,22],[859,12],[880,78],[891,140],[886,147],[894,173]],[[723,412],[737,365],[664,259],[594,198],[489,142],[454,132]],[[657,710],[750,668],[781,634]]],radStrokes:[1,4,5,6]}}),methods:{base(){r.default.create("character-target-div","我",{width:100,height:100,padding:5})},animate(){var t=r.default.create("character-target-div-an","国",{width:100,height:100,padding:5,strokeColor:"#EE00FF",showOutline:!0,strokeAnimationSpeed:5,delayBetweenStrokes:10,radicalColor:"#337ab7"});document.getElementById("animate-button").addEventListener("click",(function(){t.animateCharacter()}))},delayBetweenLoops(){r.default.create("character-target-div-delay","轮",{width:100,height:100,padding:5,delayBetweenLoops:3e3}).loopCharacterAnimation()},animateCharacter(){var t=r.default.create("character-target-1","很",{width:100,height:100,padding:5,showCharacter:!1}),a=r.default.create("character-target-2","爽",{width:100,height:100,padding:5,showCharacter:!1});document.getElementById("animate-button-2").addEventListener("click",(function(){t.hideCharacter(),a.hideCharacter(),t.animateCharacter({onComplete:function(){setTimeout((function(){a.animateCharacter()}),1e3)}})}))},async charDataLoader(){for(var t=await r.default.loadCharacterData("人",{charDataLoader:function(){return n}}),a=document.getElementById("hanzi-writer-data2"),e=0;e<t.strokes.length;e++){var i=t.strokes.slice(0,e+1);this.renderFanningStrokes(a,i)}},loadCharacterData(){r.default.loadCharacterData("六").then((function(t){var a=document.getElementById("target"),e=document.createElementNS("http://www.w3.org/2000/svg","svg"),n=(e.style.width="150px",e.style.height="150px",a.appendChild(e),document.createElementNS("http://www.w3.org/2000/svg","g"));a=r.default.getScalingTransform(150,150);n.setAttributeNS(null,"transform",a.transform),e.appendChild(n),t.strokes.forEach((function(t){var a=document.createElementNS("http://www.w3.org/2000/svg","path");a.setAttributeNS(null,"d",t),a.style.fill="#555",n.appendChild(a)}))}))},renderFanningStrokes(t,a){var e=document.createElementNS("http://www.w3.org/2000/svg","svg"),n=(e.style.width="75px",e.style.height="75px",e.style.border="1px solid #EEE",e.style.marginRight="3px",t.appendChild(e),document.createElementNS("http://www.w3.org/2000/svg","g"));t=r.default.getScalingTransform(75,75);n.setAttributeNS(null,"transform",t.transform),e.appendChild(n),a.forEach((function(t){var a=document.createElementNS("http://www.w3.org/2000/svg","path");a.setAttributeNS(null,"d",t),a.style.fill="#555",n.appendChild(a)}))},async loadCharacterData2(){for(var t=await r.default.loadCharacterData("是"),a=document.getElementById("target2"),e=0;e<t.strokes.length;e++){var n=t.strokes.slice(0,e+1);this.renderFanningStrokes(a,n)}},init(){this.base(),this.animate(),this.delayBetweenLoops(),this.animateCharacter(),this.charDataLoader(),this.loadCharacterData(),this.loadCharacterData2()}},mounted(){this.init()}},d=e("2877"),Q=Object(d.a)(i,(function(){return this._self._c,this._m(0)}),[function(){var t=this,a=t._self._c;return a("div",[a("p",[t._v("基础使用")]),a("div",{attrs:{id:"character-target-div"}}),a("p",[t._v("动画使用")]),a("div",{attrs:{id:"character-target-div-an"}}),a("button",{attrs:{id:"animate-button"}},[t._v("Animate")]),a("p",[t._v("重复动画")]),a("div",{attrs:{id:"character-target-div-delay"}}),a("p",[t._v("顺序动画")]),a("div",{attrs:{id:"character-target-1"}}),a("div",{attrs:{id:"character-target-2"}}),a("button",{attrs:{id:"animate-button-2"}},[t._v("Start")]),a("p",[t._v("从hanzi-writer-data获取数据进行渲染")]),a("div",{attrs:{id:"hanzi-writer-data1"}}),a("div",{attrs:{id:"hanzi-writer-data2"}}),a("p",[t._v("原始字符")]),a("div",{attrs:{id:"target"}}),a("p",[t._v("笔顺")]),a("p",[t._v(" 上述示例使用原始的 javascript 浏览器 API 来渲染 SVG，但如果使用 svg.js 或 raphael.js 等帮助管理 SVG 的库，代码会更加简单。 ")]),a("div",{attrs:{id:"target2"}})])}],!1,null,"488365de",null);a.default=Q.exports}}]);