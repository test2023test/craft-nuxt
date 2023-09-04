import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrRenderComponent, ssrRenderStyle } from 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/vue/server-renderer/index.mjs';
import { useSSRContext, mergeProps } from 'file:///Users/ruslanbaroev/Projects/craft-nuxt/node_modules/vue/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';

const staticData = [
  {
    srcset: "/images/instant-card-img2@1x.webp, /images/instant-card-img2@2x.webp 2x",
    imgSrcset: "/images/instant-card-img2@2x.png 2x"
  },
  {
    srcset: "/images/instant-card-img1@1x.webp, /images/instant-card-img1@2x.webp 2x",
    imgSrcset: "/images/instant-card-img1@2x.png 2x"
  },
  {
    srcset: "/images/instant-card-img5@1x.webp, /images/instant-card-img5@2x.webp 2x",
    imgSrcset: "/images/instant-card-img5@2x.png 2x"
  },
  {
    srcset: "/images/instant-card-img3@1x.webp, /images/instant-card-img3@2x.webp 2x",
    imgSrcset: "/images/instant-card-img3@2x.png 2x"
  },
  {
    srcset: "/images/instant-card-img4@1x.webp, /images/instant-card-img4@2x.webp 2x",
    imgSrcset: "/images/instant-card-img4@2x.png 2x"
  },
  {
    srcset: "/images/instant-card-img7@1x.webp, /images/instant-card-img7@2x.webp 2x",
    imgSrcset: "/images/instant-card-img7@2x.png 2x"
  },
  {
    srcset: "/images/instant-card-img6@1x.webp, /images/instant-card-img6@2x.webp 2x",
    imgSrcset: "/images/instant-card-img6@2x.png 2x"
  }
];
const _sfc_main$1 = {
  props: {
    minPoints: Number
  },
  computed: {
    proccess() {
      return Math.ceil(this.minPoints / +this.$store.state.user.data.loyalty_points * 10);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="prize__progress"><div class="prize__progress-value prize__progress-value--yellow" style="${ssrRenderStyle(`width:${$options.proccess}%`)}"></div></div><p class="prize__progress-text">\u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0435\u0449\u0451 100 \u0431\u0430\u043B\u043B\u043E\u0432 \u0434\u043B\u044F \u0443\u0447\u0430\u0441\u0442\u0438\u044F</p></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Progressbar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "BasicLotterySection",
  __ssrInlineRender: true,
  props: {
    isLk: Boolean
  },
  setup(__props) {
    const props = __props;
    const staticData2 = [
      {
        srcset: "/images/prize-img1@1x.webp, /images/prize-img1@2x.webp 2x",
        srcimg: "/images/prize-img1@2x.webp 2x"
      },
      {
        srcset: "/images/prize-img2@1x.webp, /images/prize-img2@2x.webp 2x",
        srcimg: "/images/prize-img2@2x.webp 2x"
      },
      {
        srcset: "/images/prize-img3@1x.webp, /images/prize-img3@2x.webp 2x",
        srcimg: "/images/prize-img3@2x.webp 2x"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Progressbar = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: ["section-prizes container", { "section-prizes--lk": props.isLk, "section-prizes--score": !props.isLk }]
      }, _attrs))}>`);
      if (props.isLk) {
        _push(`<h2 class="section-prizes__title"> \u0412\u044B \u043D\u0430\u043A\u043E\u043F\u0438\u043B\u0438 <span class="text-orange section-prizes__title-number">${ssrInterpolate(_ctx.$store.state.user.data.loyalty_points)}</span><span class="text-orange">\u0431\u0430\u043B\u043B\u043E\u0432!</span></h2>`);
      } else {
        _push(`<h2 class="section-prizes__title"><svg class="section-prizes__title-icon"><use xlink:href="#clock"></use></svg>\u041F\u0440\u0438\u0437\u044B \u0437\u0430 \u0431\u0430\u043B\u043B\u044B </h2>`);
      }
      _push(`<div class="section-prizes__grid"><!--[-->`);
      ssrRenderList(_ctx.$store.state.lottery.basic, (lottery, index) => {
        _push(`<article class="prize">`);
        if (lottery.periodicity) {
          _push(`<p class="${ssrRenderClass([{ "prize__label--light": index === 0 || index === 2 }, "prize__label"])}">`);
          if (index === 2) {
            _push(`<svg class="prize__label-icon"><use xlink:href="#star"></use></svg>`);
          } else {
            _push(`<!---->`);
          }
          _push(` ${ssrInterpolate(lottery.periodicity)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<p class="prize__condition">${ssrInterpolate(lottery.description)}</p><picture><source${ssrRenderAttr("srcset", staticData2[index].srcset)} type="image/webp"><img class="prize__img"${ssrRenderAttr("src", staticData2[index].srcimg)} alt=""></picture><h3 class="prize__title">${ssrInterpolate(lottery.name)}</h3><p class="prize__players">\u0421\u0435\u0439\u0447\u0430\u0441 \u0443\u0447\u0430\u0441\u0442\u0432\u0443\u0435\u0442: ${ssrInterpolate(lottery.participantCount)} `);
        if (lottery.participantCount > 1 && lottery.participantCount < 5) {
          _push(`<!--[--> \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430 <!--]-->`);
        } else {
          _push(`<!--[--> \u0447\u0435\u043B\u043E\u0432\u0435\u043A <!--]-->`);
        }
        _push(`</p>`);
        if (props.isLk) {
          _push(`<!--[-->`);
          if (lottery.isParticipant) {
            _push(`<div class="prize__status"><svg class="prize__status-icon"><use xlink:href="#thumbs-up"></use></svg>\u0412\u044B \u0443\u0447\u0430\u0441\u0442\u0432\u0443\u0435\u0442\u0435! </div>`);
          } else {
            _push(ssrRenderComponent(_component_Progressbar, {
              minPoints: lottery.minLoyaltyPoints
            }, null, _parent));
          }
          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`</article>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BasicLotterySection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_5 = _sfc_main;

export { __nuxt_component_5 as _, staticData as s };
//# sourceMappingURL=BasicLotterySection-aab6a212.mjs.map
