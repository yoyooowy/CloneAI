<template>
  <div class="digiMan">
    <div class="tabBox">
      <div class="tab">
        <el-button
          class="tabItem"
          v-for="(item, index) in tabList"
          :key="item.id"
          @mouseenter="handleMouseEnter(item)"
          @mouseleave="handleMouseLeave(item)"
          @click="selectTab(item)"
          :class="{'activeTab':activeTab == item.id}"
          >{{ item.name }}</el-button
        >
      </div>
    </div>

    <div class="content">
      <div class="tab1" v-show="activeTab == 0">
        <p>
          小冰数字人脱胎于<span class="blue">微软公司</span>，其核心技术和团队源于<span class="blue">微软亚洲互联网工程院</span>。为加快小冰产品线的本土创新步伐，2020 年 7 月 13 日小冰从微软分拆为独立公司运营。独立后，由微软前全球执行副总裁沈向洋博士为小冰公司董事长，新公司使用及继续研发完整的小冰技术。
          <br>
          2021 年小冰完成 A 轮融资，成长为 AI 行业最快的独角兽企业，并于 2022 年 11 月 7 日完成新一轮 10 亿元战略融资。在 AI 领域，小冰拥有计算机视觉、语音、NLP.人工智能创作等全栈核心 Al 能力，是业内布局数字员工最早的企业之一，目前 <span class="blue">已落地、可体验、产生业务价值</span> 的案例数也稳居第一。
        </p>
      </div>
      <div class="tab2" v-show="activeTab == 1">
        <p>
          数字互动名片由小冰团队倾力打造，不仅是一项独立研发的技术突破，更是实时智能交流的先锋。这一产品背后的强大支撑，是小冰自主研发大模型，它使得数字分身不仅有形，更有声，能够与用户进行实时、自然的互动交流。通过小冰的小样本数字人技术，用户可以轻松创建出栩栩如生的数字分身。这些数字分身不仅在外观上高度还原真人，其表情、动作和声音的细节处理也达到了令人惊叹的真实程度。更重要的是，这些数字分身能够进行低延迟的实时智能对话，无论是商务还是日常沟通，都能提供流畅和自然的交互体验。我们的数字互动名片通过微信小程序轻松分发，让用户的数字分身随时随地参与交流，突破了时间和空间的限制。同时，数字分身还能够不断学习和进化，通过上传的知识库文档，不断提升对话的准确性和专业度。小冰数字互动名片，不仅代表了一种全新的交流方式，更是引领了智能互动的未来趋势。
        </p>
      </div>
      <div class="tab2" v-show="activeTab == 2">
        <p>
          数字人直播平台是一款集成了顶尖直播运营实践的全能工具。该平台配备了一系列基于数字化角色的高效生产力工具，涵盖了直播间视觉效果设计、内容创建、互动问答配置以及打造直播氛围的多项功能。它能够灵活对接主流电商直播平台，适用于多样化的直播类型和带货场景。此外，平台支持多平台(youtube,tiktok,阿里国际站,京东,淘宝,快手,拼多多,美团)直播的实时互动，包括弹幕互动、粉丝互动等形式。作为一款SaaS服务平台，它提供简洁直观的用户界面，使直播内容的创作和配置变得快速而便捷。
        </p>
      </div>
      <div class="tab2" v-show="activeTab == 3">
        <p>
          小冰数字人引领行业，推出高端语音克隆技术，打破了真实与虚拟之间的界限。我们的技术能够精确捕捉并再现语调、节奏及声音的每一个细微差异，提供与原声几乎无异的克隆效果。无论是视频制作、有声读物、播客还是视频游戏，小冰数字人的语音克隆都能为您的项目带来前所未有的真实感。我们的技术支持多种语言，包括普通话、粤语、英语和泰语等，确保无论在哪个语言环境下，您都能享受到清晰、流畅的沟通体验。同时，隐私和安全，采取严格的安全措施，确保用户只能克隆自己的声音，除非主动分享，否则声音数据严格保密，仅供个人使用。选择小冰数字人，体验超现实的语音克隆技术，让您的声音在虚拟世界中自由飞翔。
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const activeTab = ref(0);
const tabList = ref([
  {
    id:0,
    name: "小冰数字人",
  },
  {
    id:1,
    name: "互动数字人",
  },
  {
    id:2,
    name: "直播数字人",
  },
  {
    id:3,
    name: "声音定制",
  },
]);

const selectTab = (item)=> {
  activeTab.value = item.id
  
}

const handleMouseEnter = (item) => {
  if(item.id == activeTab.value) {
    event.target.classList.add("active");
  }else {
    event.target.classList.add("active");
    event.target.classList.add("activeColor");
  }
  
};

const handleMouseLeave = (item) => {
  if(item.id == activeTab.value) {
    event.target.classList.remove("active");
  }else {
    event.target.classList.remove("active");
    event.target.classList.remove("activeColor");
  }
};
</script>

<style lang="scss" scoped>
.digiMan {
  height: calc(100vh - 48px);
  width: 100vw;
  background-color: #000;
}
.tabBox {
  width: 70vw;
  margin: 0 auto;
  padding-top: 7vh;
  margin-bottom: 1.5vh;
  .tab {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0;
    .tabItem {
      flex: 1;
      background-color: #2a2e3b;
      color: #fff;
      border: none;
      border-radius: 0px;
      height: 36px;
      transition: transform 0.2s; /* 添加过渡效果 */
      /* 鼠标移入时向下移动效果 */
      &.active {
        transform: translateY(2px);
        
      }
      &.activeColor {
        color: #0695CD;
      }
    }
    .activeTab {
      background-color: #0695CD;
    }
    .el-button {
      margin-left: 0;
    }
  }
}
.content{
  width: 80vw;
  height: calc(100vh - 7vh - 1.5vh - 48px - 36px );
  margin: 0 auto;
  padding: 3vh 2vw;
  box-sizing: border-box;
  background-color: #1f2535;
  color: #fff;
  // font-size: 12px;
  line-height: 4vh;
}

.blue {
  color: #0695cd;
}
</style>