<template>
  <section class="industry-list">
    <amy-btn v-for="(item, key) in industryArr" :key="key" class="industry-btn">
      <span
        ><svg
          aria-hidden="true"
          class="cg-svg-icon"
          style="width:28px;height:28px;"
        >
          <use xlink:href="#icon-img-skill">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 56 56"
              id="icon-img-skill"
            >
              <desc>技能 关键词</desc>
              <image
                width="56"
                height="56"
                x="0"
                y="0"
                href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAByUExURUxpcdvr+tnp+tzq+ub//9vq+tzr+////9vq+tvq+tzr+9/v/93q/Nvq+tvr+9zr+tvq+t3r+t3s+tXn+tvq+gCC/zOb/Vqt/Uil/QaF/s/l+qfS+77c+hOM/oPB/I7G+3O5/LLX+8ji+iKT/pjL+2Kx/KVP+PMAAAAUdFJOUwB1/LAK4kwD7NSFIGPwwpusNTb031yVSQAAAiZJREFUSMetV8mWozAMBBK27oQszwJs9iX//4tj7AyYpiAMPTpwoKjYKpdkxbJA+A/7FrmB4wRudLMfvrUrfO9+ZbO43r3P3LMdMBCBfd5e7eKylXAvG6t6IduI0FvjfbEP8YWzO7GPcQKZfodsR4TfC17AdkXwg3kO2c4I57uF+eU5zPOTnlVBVFTb2noALklFCaDxPH2QoOBUlGVBXIA0/3roAn41I+oZ64kyAF7eiiJ/SkrDWKPoS99qZW2oKFHctjERVNZWGeKjT7U4KbaBvyKpDEcxUwejg7D3NY/URPUadpc7va6BJT5F3U1868mOENkDazrkWHMiXq/kKHW9YaDvtKpdj/GbFaHXTawkVcLGDfoispBtMv4mqB/gyHWuhY7/NRXUUFwvZAELZZ8Y3pZuT5B2x4nBMWIAxdlBdOFx7CBGcwOIqq4Ey2PDbNJ4cf4GZgYwLZdJ7alIuDp9VcG58gBPFJDNLPcwqp6TEfwlxGv+JjdNbpRVQrxyKvlF0pZqCfUoW5kyVaIyk5VlZRRyrBpFTPGQrV5MLju+StVzLGSjdWi8e+NDejpRCXQjPLWOqVnJXpH06dQwmnwC0j4xOolqVpOuQtdgt2jeC8D+0ZCH3fG0XR53m/Jx31NDNq+AthG44kXTLq4AeOls3q3+1jW3Ed4/DCqrQ8tpP+/0f4aHw+PK8QHp+Eh2fAj8xdh5fNA9Plr/YpjX3Kf59+EJWX8AfXjEqZ2ENZEAAAAASUVORK5CYII="
              ></image>
            </svg>
          </use></svg
      ></span>
      {{ item.title }}</amy-btn
    >
  </section>
</template>
<script>
export default {
  data() {
    return {
      industryArr: [
        { title: "医疗领域" },
        { title: "通信领域" },
        { title: "交通领域" },
        { title: "航空领域" },
        { title: "金融领域" },
        { title: "市政领域" },
        { title: "警务领域" },
        { title: "查看更多" },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.industry-list {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.industry-btn {
  color: #000;
  background: #ffffff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 6%);
  border: 0;
  border-radius: 5px;
  width: 140px;
  height: 64px;
  font-size: 18px;
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(255, 151, 0, 6%);
  }
}
.cg-svg-icon {
  overflow: hidden;
  fill: #0082ff;
  stroke: #0082ff;
  vertical-align: middle;
  color: inherit;
  flex-shrink: 0;
}
</style>
