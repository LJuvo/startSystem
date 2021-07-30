const baseCategory = [
    { label: "广告", key: "ADVER", parentKey: "", parentId: "" },
    { label: "作品", key: "WORKS", parentKey: "", parentId: "" },
    { label: "资源", key: "RESOURCE", parentKey: "", parentId: "" },
    { label: "经验", key: "EXPRIENCE", parentKey: "", parentId: "" },
    { label: "文章", key: "DOCUMENT", parentKey: "", parentId: "" },
    { label: "资源池", key: "ASSET", parentKey: "", parentId: "" },
    { label: "权限", key: "ROLE", parentKey: "", parentId: "" },
];

const adverCategory = [
    { label: "主页banner", key: "BANNER", parentKey: "ADVER", parentId: "" },
];

const worksCategory = [
    { label: "交通领域", key: "", parentKey: "WORKS", parentId: "" },
    { label: "航天领域", key: "", parentKey: "WORKS", parentId: "" },
    { label: "金融领域", key: "", parentKey: "WORKS", parentId: "" },
    { label: "金融领域", key: "", parentKey: "WORKS", parentId: "" },
];

const resCategory = [
    { label: "模型", key: "", parentKey: "RESOURCE", parentId: "" },
    { label: "素材", key: "", parentKey: "RESOURCE", parentId: "" },
];

const expCategory = [
    { label: "组件化", key: "", parentKey: "EXPRIENCE", parentId: "" },
];

const docCategory = [
    { label: "可视化入门系列", key: "", parentKey: "DOCUMENT", parentId: "" },
];

const assetsCategory = [
    { label: "图片", key: "", parentKey: "ASSET", parentId: "" },
    { label: "视频", key: "", parentKey: "ASSET", parentId: "" },
];

export const APICategory = [
    ...baseCategory,
    ...adverCategory,
    ...worksCategory,
    ...resCategory,
    ...expCategory,
    ...docCategory,
    ...assetsCategory
]

class Category {
    constructor() {
        this.initCategory();
    }

    initCategory(){
        this.categoryArr = [
            ...baseCategory,
            ...adverCategory,
            ...worksCategory,
            ...resCategory,
            ...expCategory,
            ...docCategory,
            ...assetsCategory
        ];
    }

    findByKey(key){
        let obj = this.categoryArr.find(o=>o.key === key);
        let childArr = this.categoryArr.filter(o=> o.parentKey === key);

        return {
            parent: obj,
            children : childArr
        }
    }



}