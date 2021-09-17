// eslint-disable
import _throttle from 'vue-echarts-v3/node_modules/lodash.throttle';
import Resize from 'vue-echarts-v3/node_modules/element-resize-detector';

const ECHARTS_EVENTS = [
  'click',
  'dblclick',
  'mouseover',
  'mouseout',
  'mousedown',
  'mouseup',
  'globalout',
  'legendselectchanged',
  'legendselected',
  'legendunselected',
  'datazoom',
  'datarangeselected',
  'timelinechanged',
  'timelineplaychanged',
  'restore',
  'dataviewchanged',
  'magictypechanged',
  'geoselectchanged',
  'geoselected',
  'geounselected',
  'pieselectchanged',
  'pieselected',
  'pieunselected',
  'mapselectchanged',
  'mapselected',
  'mapunselected',
  'axisareaselected',
  'brush',
  'brushselected',
];

function wrapECharts(ECharts) {
  return {
    name: 'IEcharts',
    props: {
      styles: {
        type: Object,
        required: false,
        default: () => ({
          width: '100%',
          height: '100%',
        }),
      },
      theme: {
        type: [String, Object],
        required: false,
      },
      group: {
        type: String,
        required: false,
      },
      option: {
        type: Object,
        required: true,
      },
      initOpts: {
        type: Object,
        required: false,
      },
      notMerge: {
        type: Boolean,
        required: false,
        default: false,
      },
      lazyUpdate: {
        type: Boolean,
        required: false,
        default: false,
      },
      loading: {
        type: Boolean,
        required: false,
        default: false,
      },
      loadingOpts: {
        type: Object,
        required: false,
      },
      resizable: {
        type: Boolean,
        required: false,
        default: false,
      },
    },
    data() {
      return {
        fnResize: null,
        insResize: null,
        instance: null,
        watches: {
          loading: null,
          option: null,
          group: null,
        },
      };
    },
    computed: {
      width: {
        cache: false,
        get() {
          return this.instance.getWidth();
        },
      },
      height: {
        cache: false,
        get() {
          return this.instance.getHeight();
        },
      },
      isDisposed: {
        cache: false,
        get() {
          return this.instance.isDisposed();
        },
      },
    },
    watch: {
      loading: {
        handler(loading) {
          const that = this;
          that.ifLoading(loading);
        },
        deep: false,
      },
      option: {
        handler(option) {
          const that = this;
          that.instance.setOption(option, that.notMerge, that.lazyUpdate);
        },
        deep: true,
      },
      group: {
        handler(group) {
          const that = this;
          that.instance.group = group;
        },
        deep: false,
      },
    },
    methods: {
      initResize(dom) {
        const that = this;
        if (that.resizable) {
          that.insResize = that.insResize || Resize({
            strategy: 'scroll', // <- For ultra performance.
          });
          that.fnResize = that.fnResize || _throttle(that.resize, 250, {
            leading: true,
            trailing: true,
          });
          that.insResize.listenTo(dom, (element) => {
            const width = element.offsetWidth;
            const height = element.offsetHeight;
            that.fnResize({
              width,
              height,
              silent: false,
            });
          });
        }
      },
      init() {
        const that = this;
        if (!that.instance) {
          const dom = that.$el;
          let instance = ECharts.getInstanceByDom(dom);
          if (!instance) {
            instance = ECharts.init(dom, that.theme, that.initOpts);
          }
          instance.group = that.group;
          that.instance = instance;
          that.$emit('ready', instance, ECharts);
          that.$nextTick(() => {
            that.ifLoading(that.loading);
            that.update();
            // that.watch();
            that.bind();
            that.initResize(dom);
          });
        }
      },
      bind() {
        const that = this;
        const _on = function _on(name) { // eslint-disable-line
          that.instance.on(name, (event) => {
            that.$emit(name, event, that.instance, ECharts);
          });
        };

        if (that._events) { // eslint-disable-line
          for (const e in that._events) { // eslint-disable-line
            if (Object.prototype.hasOwnProperty.call(that._events, e)) { // eslint-disable-line
              const name = e.toLowerCase();
              if (ECHARTS_EVENTS.indexOf(name) > -1) {
                _on(name);
              }
            }
          }
        } else {
          for (let i = 0, len = ECHARTS_EVENTS.length; i < len; i++) { // eslint-disable-line
            _on(ECHARTS_EVENTS[i]);
          }
        }
      },
      unbind() {
        const that = this;
        if (that._events) { // eslint-disable-line
          for (const e in that._events) { // eslint-disable-line
            if (Object.prototype.hasOwnProperty.call(that._events, e)) { // eslint-disable-line
              const name = e.toLowerCase();
              if (ECHARTS_EVENTS.indexOf(name) > -1) {
                that.instance.off(name);
              }
            }
          }
        } else {
          for (let i = 0, len = ECHARTS_EVENTS.length; i < len; i++) { // eslint-disable-line
            that.instance.off(ECHARTS_EVENTS[i]);
          }
        }
      },
      ifLoading(loading) {
        const that = this;
        if (loading) {
          that.showLoading();
        } else {
          that.hideLoading();
        }
      },
      watch() {
        const that = this;
        that.watches.loading = that.$watch('loading', (loading) => {
          that.ifLoading(loading);
        });
        that.watches.option = that.$watch('option', (option) => {
          that.instance.setOption(option, that.notMerge, that.lazyUpdate);
        }, {
          deep: true,
        });
        that.watches.group = that.$watch('group', (group) => {
          that.instance.group = group;
        });
      },
      unwatch() {
        const that = this;
        if (that.watches.loading) {
          that.watches.loading();
          that.watches.loading = null;
        }
        if (that.watches.option) {
          that.watches.option();
          that.watches.option = null;
        }
        if (that.watches.group) {
          that.watches.group();
          that.watches.group = null;
        }
      },
      resize(opts) {
        const that = this;
        if (that.instance) {
          const width = opts && opts.width;
          const height = opts && opts.height;
          that.$emit('resize', width, height);
          that.instance.resize(opts);
        }
      },
      update() {
        const that = this;
        if (that.instance) {
          that.instance.setOption(that.option, that.notMerge, that.lazyUpdate);
          that.resize();
        }
      },
      mergeOption(opts) {
        const that = this;
        if (that.instance) {
          that.instance.setOption(opts, false, that.lazyUpdate);
          that.resize();
        }
      },
      dispatchAction(payload) {
        const that = this;
        if (that.instance) {
          that.instance.dispatchAction(payload);
        }
      },
      convertToPixel(finder, value) {
        const that = this;
        return that.instance.convertToPixel(finder, value);
      },
      convertFromPixel(finder, value) {
        const that = this;
        return that.instance.convertFromPixel(finder, value);
      },
      containPixel(finder, value) {
        const that = this;
        return that.instance.containPixel(finder, value);
      },
      showLoading() {
        const that = this;
        if (that.instance) {
          that.instance.showLoading('default', that.loadingOpts);
        }
      },
      hideLoading() {
        const that = this;
        if (that.instance) {
          that.instance.hideLoading();
        }
      },
      getDataURL(opts) {
        const that = this;
        return that.instance.getDataURL(opts);
      },
      getConnectedDataURL(opts) {
        const that = this;
        return that.instance.getConnectedDataURL(opts);
      },
      clear() {
        const that = this;
        if (that.instance) {
          that.instance.clear();
        }
      },
      uninitResize() {
        const that = this;
        if (that.insResize && that.insResize.uninstall) {
          that.insResize.uninstall(that.$el);
          that.insResize = null;
        }
        if (that.fnResize && that.fnResize.cancel) {
          that.fnResize.cancel();
          that.fnResize = null;
        }
      },
      uninit() {
        const that = this;
        if (that.instance) {
          that.unbind();
          // that.unwatch();
          that.uninitResize();
          that.instance.dispose();
          that.instance = null;
        }
      },
    },
    // beforeCreate() {
    // const that = this;
    // console.log('beforeCreate');
    // },
    // created() {
    // const that = this;
    // console.log('created');
    // },
    // beforeMount() {
    // const that = this;
    // console.log('beforeMount');
    // },
    mounted() {
      const that = this;
      // console.log('mounted');
      that.init();
    },
    // beforeUpdate() {
    // const that = this;
    // console.log('beforeUpdate');
    // },
    // updated() {
    // const that = this;
    // console.log('updated');
    // },
    // activated() {
    // const that = this;
    // console.log('activated');
    // },
    // deactivated() {
    // const that = this;
    // console.log('deactivated');
    // },
    beforeDestroy() {
      const that = this;
      // console.log('beforeDestroy');
      that.uninit();
    },
    // destroyed() {
    // const that = this;
    // console.log('destroyed');
    // },
    connect(group) {
      return ECharts.connect(group);
    },
    disConnect(group) {
      return ECharts.disConnect(group);
    },
    dispose(target) {
      return ECharts.dispose(target);
    },
    getInstanceByDom(target) {
      return ECharts.getInstanceByDom(target);
    },
    registerMap(mapName, geoJson, specialAreas) {
      return ECharts.registerMap(mapName, geoJson, specialAreas);
    },
    getMap(mapName) {
      return ECharts.getMap(mapName);
    },
    registerTheme(themeName, theme) {
      return ECharts.registerTheme(themeName, theme);
    },
    render(h) {
      const that = this;
      return h('div', {
        style: that.styles,
      });
    },
  };
}

export default wrapECharts;
