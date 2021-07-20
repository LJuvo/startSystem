<template>
  <!-- <base-layout activeIndex="1">
    <div class="amy-base m-bg-white">
      <div class="amy-base-wrapper a-space-32-top a-space-32-bottom">
        <home-adver></home-adver>
      </div>
    </div> -->
  <div class="amy-base m-bg-white">
    <div class="amy-base-wrapper a-space-32-bottom markdown-body">
      <a-typography-title :level="2">h2. Ant Design Vue</a-typography-title>
      <a-typography-title :level="5">h5. Ant Design Vue</a-typography-title>
      <hr />
      <markdown-preview :initialValue="previewContent"></markdown-preview>
    </div>
  </div>
  <!-- </base-layout> -->
</template>

<script>
import BaseLayout from "@/components/layout/baseLayout.vue";
import HomeAdver from "@/views/home/adver.vue";
import { MarkdownPreview } from "vue-meditor";
export default {
  components: {
    "base-layout": BaseLayout,
    "home-adver": HomeAdver,
    "markdown-preview": MarkdownPreview,
  },
  data() {
    return {
      previewContent: "",
      worksId: "",
    };
  },
  mounted() {
    this.worksId = _.get(this.$route.params, "worksId", "");
    // console.log("getRouterParam params=>", this.$route.params);
    if (this.worksId) {
      this.fetchArticle(this.worksId);
    }
  },
  methods: {
    fetchArticle(articleId) {
      const query = Bmob.Query("works");
      query.include("own", "infoId");
      query
        .get(articleId)
        .then((res) => {
          const worksInfo = _.get(res, "infoId", "");
          if (worksInfo) {
            this.previewContent = JSON.parse(_.get(worksInfo, "content", ""));
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style lang="less" scoped>
.markdown-body hr {
  position: relative;
  width: 98%;
  height: 1px;
  margin-top: 32px;
  margin-bottom: 32px;
  background-image: linear-gradient(
    90deg,
    #007fff,
    rgba(255, 0, 0, 0.3),
    hsla(0, 0%, 100%, 0.1),
    rgba(255, 0, 0, 0.3),
    #007fff
  );
  border-width: 0;
  overflow: visible;
}
hr {
  box-sizing: content-box;
}

.markdown-body hr:after {
  content: "";
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  display: inline-block;
  width: 60px;
  height: 20px;
  background: #fff;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAgCAYAAABgrToAAAADoklEQVRYR82XTYgcRRTHf2933Q1RjAa9eFO8JHoJ8RQVBQ2iBwXBET0YEUTXNVmNQtTpmeqaWV0XNRq/o4KoECSCEPSg4CF+BYUkIIiCoCJCPIhC/Ihh2Z0nVV27VnZnenumW9i6ddV7//frV69fVQurfMgq56NawFTPAU6QyomqXrw6wIZeyhCPebA5buNR+akKyGoAjd6BshthnYdSjqNcRVuOlIUsD2j0SuA94IwuMHdh5ZUykOUBXfSGbmKI54EtAeYIHSZoy5dl4JxvNYBOKdW1KE8BQ8AkVk6WhasWsAiN0TX9gveXQaPP+Aytpc4u+bMI06JNohsYYYYOR2lJWtS3OKDRfcAtQfgDoI6Vo4UCGb0OmAEuDvZvYmVbEd/igC3dzDz7gQu8sPA9kJDK27mBmjqBeLjTg90PDFOjWawFFQd06kZHEfaj3LAIpTRpSXsZ5E06zEYP9sDimnAApYaV2SLZG/wjMeqAkijwW4xQJ5Gf/ZzRC8OW3hiBTGGlURRswW55Bh/Ssxljrwew8l1PQaM14GngvGDzBUKdDsMeTtgU5o8B92PFlUf3YXUrHa7Fys6lBqcCGnX15YQ2A18FyPd7Crd1A3M8C1wdbH4DD3hWeP6IEXbQkG97ajR1HPFnuPP5jFFq1OWX7hl8WM9l1AO648uNfwLk7tytMeogty+xeQ4rO3r6bdcx1nuwOGsHmaXGtPzae4uzGnLH1kQkvpdZGrHjssBZJrL+pqS05KWc8tgITAPXRzYvYOXe/C2OV43eDcRBDtIhoS2f9wzc0Cv8Wls+zoFzUC5zF0U241h5uZtPfptp6OUM8wbK+cH5GEpCS17P3fJei0Z3+npTxryJ8CPzbKMtn/ZyWbkPGl0PuFPkmkjkcb4h4R2ZLwRq1H0ALmvjkf2HwK1Y+T1PY2XABe/sHJ6MxN5lnoSpnC/UGbsTaI5phK2R7x6s3Ffk5YoDOrWm3onwJHBmEP86bPmBrsGaenNoIdnxCH+gPEhLXi0Cl1VBvyPVLSh7gEuC62yAfOIUqabWEaaiucMIk6RyqJ+Q/QM69V26jjW86Gvov/EaoyT8zRCn+Xq7PVrbx0nuYUaO9wM3WAbjCE1NEUw09Um4UV+2OKfYfu5/S19gsAzGKqm6LE5FrShbdS0ku465DjDwKA/oQht19ejqbaEVuRbiLhuHByYLjtUAZpDutzP7cYdHsPJXWbjyNVgFwQoa1WXwf4Jd9YD/Ap80+yE7+u9aAAAAAElFTkSuQmCC);
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position-x: center;
}
</style>
