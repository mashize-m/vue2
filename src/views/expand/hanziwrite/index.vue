<template>
  <div>
    <p>基础使用</p>
    <div id="character-target-div"></div>
    <p>动画使用</p>
    <div id="character-target-div-an"></div>
    <button id="animate-button">Animate</button>
    <p>重复动画</p>
    <div id="character-target-div-delay"></div>
    <p>顺序动画</p>
    <div id="character-target-1"></div>
    <div id="character-target-2"></div>
    <button id="animate-button-2">Start</button>
    <p>从hanzi-writer-data获取数据进行渲染</p>
    <div id="hanzi-writer-data1"></div>
    <div id="hanzi-writer-data2"></div>
    <p>原始字符</p>
    <div id="target"></div>
    <p>笔顺</p>
    <p>
      上述示例使用原始的 javascript 浏览器 API 来渲染 SVG，但如果使用 svg.js 或 raphael.js 等帮助管理 SVG
      的库，代码会更加简单。
    </p>
    <div id="target2"></div>
  </div>
</template>

<script>
const HanziWriter = require('hanzi-writer')
const ren = require('hanzi-writer-data/人')
console.log('ren:', ren)

export default {
  name: 'hanziwrite',
  data () {
    return {
      data: {
        strokes: [
          'M 350 571 Q 380 593 449 614 Q 465 615 468 623 Q 471 633 458 643 Q 439 656 396 668 Q 381 674 370 672 Q 363 668 363 657 Q 364 621 200 527 Q 196 518 201 516 Q 213 516 290 546 Q 303 550 316 556 L 350 571 Z',
          'M 584 466 Q 666 485 734 497 Q 746 496 754 511 Q 755 524 729 533 Q 693 554 622 527 Q 598 520 575 511 L 537 499 Q 518 495 500 488 Q 442 472 386 457 L 337 446 Q 327 446 179 416 Q 148 409 173 392 Q 212 365 241 376 Q 287 389 339 404 L 387 416 Q 460 438 545 457 L 584 466 Z',
          'M 386 457 Q 387 493 398 517 Q 405 535 390 548 Q 371 564 350 571 C 323 583 303 583 316 556 Q 315 556 316 555 Q 338 519 337 478 Q 337 462 337 446 L 339 404 Q 340 343 339 289 L 338 241 Q 337 180 334 133 Q 333 115 323 109 Q 317 105 250 119 Q 238 122 239 114 Q 240 108 249 100 Q 309 42 328 6 Q 341 -10 357 3 Q 390 36 390 126 Q 387 169 387 265 L 387 306 Q 387 355 387 416 L 386 457 Z',
          'M 339 289 Q 254 261 161 229 Q 139 222 101 221 Q 86 220 85 207 Q 84 192 94 184 Q 119 166 157 147 Q 169 144 182 154 Q 239 199 338 241 L 387 265 Q 477 314 484 318 Q 499 327 498 337 Q 492 343 479 340 Q 434 324 387 306 L 339 289 Z',
          'M 635 195 Q 690 75 797 -14 Q 876 -62 898 -47 Q 920 -37 914 3 Q 905 34 899 152 Q 900 174 894 178 Q 890 179 884 160 Q 857 75 838 60 Q 823 56 785 88 Q 710 155 670 226 L 644 279 Q 599 381 584 466 L 575 511 Q 547 659 576 752 Q 586 779 543 805 Q 509 827 489 825 Q 470 824 479 795 Q 503 752 507 707 Q 517 601 537 499 L 545 457 Q 573 334 612 245 L 635 195 Z',
          'M 612 245 Q 558 197 452 138 Q 442 132 448 128 Q 455 124 468 126 Q 523 135 574 160 Q 608 175 635 195 L 670 226 Q 706 260 747 317 Q 762 336 778 354 Q 788 361 785 374 Q 781 386 753 410 Q 734 428 723 428 Q 708 427 707 411 Q 701 354 644 279 L 612 245 Z',
          'M 687 669 Q 718 648 754 623 Q 770 613 786 615 Q 798 618 801 632 Q 802 648 789 678 Q 780 697 746 708 Q 665 726 651 715 Q 647 711 651 697 Q 655 687 687 669 Z'
        ],
        medians: [
          [[458, 627], [392, 631], [336, 588], [274, 552], [258, 550], [253, 542], [220, 530], [212, 532], [203, 522]],
          [[174, 404], [215, 398], [241, 402], [672, 514], [742, 512]],
          [[323, 556], [351, 542], [365, 522], [361, 116], [340, 67], [246, 113]],
          [[100, 206], [124, 195], [163, 189], [492, 334]],
          [[492, 807], [537, 760], [538, 627], [569, 435], [612, 299], [676, 170], [717, 112], [779, 48], [817, 22], [859, 12], [880, 78], [891, 140], [886, 147], [894, 173]],
          [[723, 412], [737, 365], [664, 259], [594, 198], [489, 142], [454, 132]],
          [[657, 710], [750, 668], [781, 634]]
        ],
        radStrokes: [1, 4, 5, 6]
      }
    }
  },
  methods: {
    // 基础
    base () {
      var writer = HanziWriter.default.create('character-target-div', '我', {
        width: 100,
        height: 100,
        padding: 5
      })
    },
    // 动画
    animate () {
      var writer = HanziWriter.default.create('character-target-div-an', '国', {
        width: 100, // 包含字符的方框的大小
        height: 100, // 包含字符的方框的大小
        padding: 5, // 字符与方框边缘之间的空间
        strokeColor: '#EE00FF', // 填充色
        showOutline: true, // 是否开启动画
        strokeAnimationSpeed: 5, // 动画速度
        delayBetweenStrokes: 10, // 笔画间的延迟
        radicalColor: '#337ab7' // 偏旁的颜色
      })
      document.getElementById('animate-button').addEventListener('click', function () {
        writer.animateCharacter()
      })
    },
    // 重复动画
    delayBetweenLoops () {
      var writer = HanziWriter.default.create('character-target-div-delay', '轮', {
        width: 100,
        height: 100,
        padding: 5,
        delayBetweenLoops: 3000 // 两次操作之间的延迟
      })

      writer.loopCharacterAnimation()
    },
    // 顺序动画
    animateCharacter () {
      var char1 = HanziWriter.default.create('character-target-1', '很', {
        width: 100,
        height: 100,
        padding: 5,
        showCharacter: false
      })
      var char2 = HanziWriter.default.create('character-target-2', '爽', {
        width: 100,
        height: 100,
        padding: 5,
        showCharacter: false
      })

      function chainAnimations () {
        var delayBetweenAnimations = 1000 // milliseconds
        char1.hideCharacter()
        char2.hideCharacter()

        char1.animateCharacter({
          onComplete: function () {
            setTimeout(function () { char2.animateCharacter() }, delayBetweenAnimations)
          }
        })
      }

      document.getElementById('animate-button-2').addEventListener('click', chainAnimations)
    },
    // hanzi-writer-data获取数据进行渲染
    async charDataLoader () {
      // 走请求的时候
      // var writer = HanziWriter.create('hanzi-writer-data1', '我', {
      //   charDataLoader: function (char, onComplete) {
      //     $.getJSON('/my/server/' + char + '.json', function (charData) {
      //       onComplete(charData)
      //     })
      //   }
      // })
      // 指定具体的字是
      const charData = await HanziWriter.default.loadCharacterData('人', {
        charDataLoader: function () {
          return ren
        }
      })
      console.log('是charData:', charData)
      var target = document.getElementById('hanzi-writer-data2')
      for (var i = 0; i < charData.strokes.length; i++) {
        var strokesPortion = charData.strokes.slice(0, i + 1)
        this.renderFanningStrokes(target, strokesPortion)
      }
    },
    // 获取笔顺svg的path
    loadCharacterData () {
      HanziWriter.default.loadCharacterData('六').then(function (charData) {
        var target = document.getElementById('target')
        var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
        svg.style.width = '150px'
        svg.style.height = '150px'
        target.appendChild(svg)
        var group = document.createElementNS('http://www.w3.org/2000/svg', 'g')

        // set the transform property on the g element so the character renders at 150x150
        var transformData = HanziWriter.default.getScalingTransform(150, 150)
        group.setAttributeNS(null, 'transform', transformData.transform)
        svg.appendChild(group)

        charData.strokes.forEach(function (strokePath) {
          var path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
          path.setAttributeNS(null, 'd', strokePath)
          // style the character paths
          path.style.fill = '#555'
          group.appendChild(path)
        })
      })
    },
    renderFanningStrokes (target, strokes) {
      var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
      svg.style.width = '75px'
      svg.style.height = '75px'
      svg.style.border = '1px solid #EEE'
      svg.style.marginRight = '3px'
      target.appendChild(svg)
      var group = document.createElementNS('http://www.w3.org/2000/svg', 'g')
      // set the transform property on the g element so the character renders at 75x75
      var transformData = HanziWriter.default.getScalingTransform(75, 75)
      console.log('transformData:', transformData)
      group.setAttributeNS(null, 'transform', transformData.transform)
      svg.appendChild(group)

      strokes.forEach(function (strokePath) {
        var path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
        path.setAttributeNS(null, 'd', strokePath)
        // style the character paths
        path.style.fill = '#555'
        group.appendChild(path)
      })
    },
    // 笔顺
    async loadCharacterData2 () {
      const charData = await HanziWriter.default.loadCharacterData('是')
      console.log('是charData:', charData)
      var target = document.getElementById('target2')
      for (var i = 0; i < charData.strokes.length; i++) {
        var strokesPortion = charData.strokes.slice(0, i + 1)
        this.renderFanningStrokes(target, strokesPortion)
      }
    },
    init () {
      this.base()
      this.animate()
      this.delayBetweenLoops()
      this.animateCharacter()
      this.charDataLoader()
      this.loadCharacterData()
      this.loadCharacterData2()
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style lang="less" scoped>
</style>
