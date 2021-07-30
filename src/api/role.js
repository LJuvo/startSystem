const roleCategory = [
    { label: "普通用户", key: "", parentKey: "ROLE", parentId: "" },
    { label: "高级用户", key: "", parentKey: "ROLE", parentId: "" },
    { label: "管理用户", key: "", parentKey: "ROLE", parentId: "" },
]

var SingleRole = function( name ){
    this.name = name;
    this.roleList = roleCategory;
};
SingleRole.prototype.getRoleList = function(){
    return this.roleList;
};
SingleRole.getInstance = (function(){
    var instance = null;
    return function( name ){
        if ( !instance ){
            instance = new SingleRole( name );
        }
        return instance;
    }
})();