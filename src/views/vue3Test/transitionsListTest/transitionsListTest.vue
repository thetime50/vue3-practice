<template>
    <div class="component-transitions-list-test">
        <h4>列表进入离开过渡</h4>
        <p class="inout">
            <button @click="add">Add</button>
            <button @click="remove">Remove</button>
            <transition-group name="inout" tag="p">
                <span v-for="item in items" :key="item" class="list-item">
                    {{ item }}
                </span>
            </transition-group>
        </p>
        <h4>列表排序过渡</h4>
        <p class="sort">
            添加、删除的元素没有动画 但是移动的元素有动画<br>
            <button @click="shuffle">Shuffle</button>
            <transition-group name="sort" tag="ul">
                <li v-for="item in items" :key="item" class="list-item">
                    {{ item }}
                </li>
            </transition-group>
        </p>
        <h4>flipjs test</h4>
        <div class="flip">
           <a href="https://github.com/googlearchive/flipjs">flipjs github</a> <br>
            <a href="https://github.com/thetime50/flipjs">thetime50/flipjs github</a> <br>
          <button @click="squareShuffle">square shuffle</button>
          <!-- 换到不同行中会新建dom -->
          <template v-if="false">
            <div class="square">
              <div class="row" v-for="(sitem,sindex) in srow" :key="sindex">
                <!-- eslint-disable-next-line -->
                <template  v-for="(citem,cindex) in scol" :key="square[sindex*scol+cindex]">
                  <span class="cell" :ref="el => squareRef(el,square[sindex*scol+cindex])"> <!-- 需要在回调中设置data变量 -->
                    {{square[sindex*scol+cindex]}}
                  </span>
                </template>
              </div>
            </div>
          </template>
          <template v-else>
            <div class="square-flex flex-layout">
              <template v-for="(sitem) in square" :key="sitem">
                <span class="cell" :ref="el => squareRef(el,sitem)"> <!-- v-for 和 ref 需要在回调中设置data变量 -->
                  {{sitem}}
                </span>
              </template>
            </div>
          </template>
        </div>
    </div>
</template>

<script>
/* message */
import { shuffle } from 'lodash';
import FLIP from 'flip-thetime50';

export default {
  name: 'transitions-list-test',
  data() {
    const srow = 4;
    const scol = 5;
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10,
      // eslint-disable-next-line
      // square: Array.from({ length: 7 }, (v, i) => {
      //   return Array.from({ length: 8 }, (v1, i1) => i * 8 + i1);
      // }),
      srow,
      scol,
      square: Array.from({ length: srow * scol }, (v, i) => i),
      squareEl: [],
    };
  },
  methods: {
    randomIndex() {
      return Math.floor(Math.random() * this.items.length);
    },
    add() {
      this.items.splice(this.randomIndex(), 0, this.nextNum += 1);
    },
    remove() {
      this.items.splice(this.randomIndex(), 1);
    },
    shuffle() {
      this.items = shuffle(this.items);
    },
    squareRef(el, index) {
      if (el) {
        this.squareEl[index] = el;
      }
    },
    squareShuffle() {
      // console.log('square', this.squareEl);
      const flipList = [];
      this.squareEl.forEach((v) => {
        const flip = new FLIP({
          element: v,
          duration: 2000,
        });
        flip.first();
        flipList.push(flip);
      });
      this.square = shuffle(this.square);
      this.$nextTick(() => {
        flipList.forEach((fv) => {
          // Apply the 'end' class and snapshot the last position & opacity.
          fv.last('end');
          // Move and fade the element back to the original position.
          fv.invert();
          // Play it forwards.
          fv.play();
        });
      });
    },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .component-transitions-list-test{

  }
  .inout{
    .inout-item {
      display: inline-block;
      margin-right: 10px;
    }
    .inout-enter-active,
    .inout-leave-active {
      transition: all 1s ease;
    }
    .inout-enter-from,
    .inout-leave-to {
      opacity: 0;
      transform: translateY(30px);
    }
  }
  .sort{
      .sort-move {
          transition: transform 1.8s ease;
      }
  }
  .flip{
    .square{
      margin-top: 10px;
    }
    .row{
      //
    }
    .cell{
      box-sizing: border-box;
      margin:1px;
      display: inline-block;
      line-height: 40px - 6px;
      width: 40px;
      text-align: center;
      vertical-align: middle;
      background-color: #faa;
      border: solid 3px #fdd;
      border-radius: 3px;
    }
    .square-flex{
      height: 42px*4;
      width: 42px*5;
      margin: auto;
      margin-top: 10px;
    }
  }
</style>
