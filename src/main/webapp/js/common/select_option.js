var SelectOption = function() {

};

/**
 * 复议诉讼状态
 * @return
 */
SelectOption.getLawSuitStatusData = function getLawSuitStatusData() {
	var data=new Array();
	data.push({code:0,name:'受理'});
	data.push({code:1,name:'审核'});
	data.push({code:2,name:'复审'});
	data.push({code:3,name:'审批'});
	return data;
};

SelectOption.loadLawSuitStatus = function loadLawSuitStatus(code) {
	var data=SelectOption.getLawSuitStatusData();
	SelectOption.loadBaseCode(data, code);
};

SelectOption.getLawSuitStatus=function getLawSuitStatus(code){
	return SelectOption.getCodeName(SelectOption.getLawSuitStatusData(),code);
};

/**
 * 菜单级别
 * @return
 */
SelectOption.getPrivLevelData = function getPrivLevelData() {
	var data=new Array();
	data.push({code:1,name:'一级菜单'});
	data.push({code:2,name:'二级菜单'});
	data.push({code:3,name:'三级菜单'});
	return data;
};

SelectOption.loadPrivLevel = function loadPrivLevel(code) {
	var data=SelectOption.getPrivLevelData();
	SelectOption.loadBaseCode(data, code);
};

SelectOption.getPrivLevel=function getPrivLevel(code){
	return SelectOption.getCodeName(SelectOption.getPrivLevelData(),code);
};

/**
 * 行政区域级别
 * @return
 */
SelectOption.getDistrictLevelData = function getDistrictLevelData(){
	var data=new Array();
	data.push({code:1,name:'区县'});
	data.push({code:2,name:'街道办'});
	data.push({code:3,name:'社区居委会'});
	return data;
};

SelectOption.loadDistrictLevel = function loadDistrictLevel(code){
	var data=SelectOption.getDistrictLevelData();
	SelectOption.loadBaseCode(data, code);
};

SelectOption.getDistrictLevel = function getDistrictLevel(code){
	return SelectOption.getCodeName(SelectOption.getDistrictLevelData(),code);
};


/**
 * 行政区域(市、区县、街道办、社区)
 * @return
 */
SelectOption.loadDistrict = function loadDistrict(code,jsonParam){
	SelectOption.loadBaseCodeFromDB(BASE_URL+"/system/sysdistrict/loadDistrictSelect",code,jsonParam);
};

/**
 * 系统部门树
 * @return
 */
SelectOption.loadSysDepart = function loadSysDepart(code,jsonParam){
	SelectOption.loadBaseCodeFromDB(BASE_URL+"/system/sysdepart/departtree",code,jsonParam);
};

/**
 * 行政执法部门
 * @return
 */
SelectOption.loadLawDept = function loadLawDept(code,jsonParam){
	SelectOption.loadBaseCodeFromDB(BASE_URL+"/law/lawdept/lawdeptselect",code,jsonParam);
};

/**
 * 应急专家-专家类别
 * @return
 */
SelectOption.loadExpertType = function loadExpertType(code,jsonParam){
	SelectOption.loadBaseCodeFromDB(BASE_URL+"/ems/emsresexpert/expertypeselect",code,jsonParam);
};

/**
 * 应急专家-专业领域
 * @return
 */
SelectOption.loadMajorField = function loadMajorField(code,jsonParam){
	SelectOption.loadBaseCodeFromDB(BASE_URL+"/ems/emsresexpert/majorfieldselect",code,jsonParam);
};

/**
 * 系统管理中执法人员
 * @return
 */
SelectOption.loadSysUser = function loadSysUser(code,jsonParam){
	var url = "/system/govuser/departuserselect";
	SelectOption.loadBaseCodeFromDB(BASE_URL+url,code,jsonParam);
};

/**
 * 提交审批领导
 */
SelectOption.loadLeaderUser = function loadLeaderUser(code,jsonParam){
	var url = "/system/sysuser/leaderuserselect";
	SelectOption.loadBaseCodeFromDB(BASE_URL+url,code,jsonParam);
};

/**
 * 执法人员
 * @return
 */
SelectOption.loadLawUser = function loadLawUser(code,jsonParam){
	var url = "/law/lawuser/lawuserselect";
	SelectOption.loadBaseCodeFromDB(BASE_URL+url,code,jsonParam);
};


/**
 * 隐患信息
 * @return
 */
SelectOption.LoadLawDanger = function LoadLawDanger(code,jsonParam){
	SelectOption.loadBaseCodeFromDB(BASE_URL+"/law/lawdangerinfo/lawdangerselect",code,jsonParam);
};

/**
 * 执法计划
 * @return
 */
SelectOption.loadLawPlan = function loadLawPlan(code,jsonParam){
	SelectOption.loadBaseCodeFromDB(BASE_URL+"/law/lawplan/lawplanselect",code,jsonParam);
};

/**
 * 执法依据类型
 * @return
 */
SelectOption.loadLawBasisType = function loadLawBasisType(code,jsonParam){
	SelectOption.loadBaseCodeFromDB(BASE_URL+"/law/lawbasistype/selectOption",code,jsonParam);
};
/**
 *物资设备大类 
 */
SelectOption.loadEquiptypemax = function loadEquiptypemax(code,jsonParam){
    SelectOption.loadBaseCodeFromDB(BASE_URL+"/ems/emsresmaterial/selectMaterialMax",code,jsonParam);
};
/**
 *物资设备小类 
 */
SelectOption.loadEquiptypemin = function loadEquiptypemin(code,jsonParam){
    SelectOption.loadBaseCodeFromDB(BASE_URL+"/ems/emsresmaterial/selectMaterialMin",code,jsonParam);
};


/**
 * 性别
 * @return
 */
SelectOption.getSexData = function getSexData() {
	var data=new Array();
	data.push({code:0,name:'男'});
	data.push({code:1,name:'女'});
	return data;
};
SelectOption.loadSex = function loadSex(code) {
	var data=SelectOption.getSexData();
	SelectOption.loadBaseCode(data, code);
};
SelectOption.getSex=function getSex(code){
	return SelectOption.getCodeName(SelectOption.getSexData(),code);
};

/**
 * 用户类型
 * @return
 */
SelectOption.getUserTypeData = function getUserTypeData() {
	var data=new Array();
	data.push({code:'SYS',name:'系统'});
	data.push({code:'GOV',name:'政府'});
	data.push({code:'ENT',name:'企业'});
	return data;
};
SelectOption.loadUserType = function loadUserType(code) {
	var data=SelectOption.getUserTypeData();
	SelectOption.loadBaseCode(data, code);
};
SelectOption.getUserType=function getUserType(code){
	if(code==null)
		return "";
	return SelectOption.getCodeName(SelectOption.getUserTypeData(),code);
};


/**
 * 年份
 * @return
 */
SelectOption.getNowYearData = function getNowYearData() {
	var curYear = new Date().getFullYear();
	var data=new Array();
	data.push({code:curYear-2,name:curYear-2});
	data.push({code:curYear-1,name:curYear-1});
	data.push({code:curYear,name:curYear});
	data.push({code:curYear+1,name:curYear+1});
	data.push({code:curYear+2,name:curYear+2});
	return data;
};
SelectOption.loadNowYear = function loadNowYear(code) {
	var data=SelectOption.getNowYearData();
	SelectOption.loadBaseCode(data, code);
};
SelectOption.getNowYear=function getNowYear(code){
	if(code==null)
		return "";
	return SelectOption.getCodeName(SelectOption.getNowYearData(),code);
};

/**
 * 民族
 * @return
 */
SelectOption.getNationData = function getNationData() {
	var data=new Array();
	data.push({code:'汉族',name:'汉族'});
	data.push({code:'壮族',name:'壮族'});
	data.push({code:'满族',name:'满族'});
	data.push({code:'回族',name:'回族'});
	data.push({code:'苗族',name:'苗族'});
	data.push({code:'维吾尔族',name:'维吾尔族'});
	data.push({code:'土家族',name:'土家族'});
	data.push({code:'彝族',name:'彝族'});
	data.push({code:'蒙古族',name:'蒙古族'});
	data.push({code:'藏族',name:'藏族'});
	data.push({code:'布依族',name:'布依族'});
	data.push({code:'侗族',name:'侗族'});
	data.push({code:'瑶族',name:'瑶族'});
	data.push({code:'朝鲜族',name:'朝鲜族'});
	data.push({code:'白族',name:'白族'});
	data.push({code:'哈尼族',name:'哈尼族'});
	data.push({code:'哈萨克族',name:'哈萨克族'});
	data.push({code:'黎族',name:'黎族'});
	data.push({code:'傣族',name:'傣族'});
	data.push({code:'畲族',name:'畲族'});
	data.push({code:'傈僳族',name:'傈僳族'});
	data.push({code:'仡佬族',name:'仡佬族'});
	data.push({code:'东乡族',name:'东乡族'});
	data.push({code:'高山族',name:'高山族'});
	data.push({code:'拉祜族',name:'拉祜族'});
	data.push({code:'水族',name:'水族'});
	data.push({code:'佤族',name:'佤族'});
	data.push({code:'纳西族',name:'纳西族'});
	data.push({code:'羌族',name:'羌族'});
	data.push({code:'土族',name:'土族'});
	data.push({code:'仫佬族',name:'仫佬族'});
	data.push({code:'锡伯族',name:'锡伯族'});
	data.push({code:'柯尔克孜族',name:'柯尔克孜族'});
	data.push({code:'达斡尔族',name:'达斡尔族'});
	data.push({code:'景颇族',name:'景颇族'});
	data.push({code:'毛南族',name:'毛南族'});
	data.push({code:'撒拉族',name:'撒拉族'});
	data.push({code:'布朗族',name:'布朗族'});
	data.push({code:'塔吉克族',name:'塔吉克族'});
	data.push({code:'阿昌族',name:'阿昌族'});
	data.push({code:'普米族',name:'普米族'});
	data.push({code:'鄂温克族',name:'鄂温克族'});
	data.push({code:'怒族',name:'怒族'});
	data.push({code:'京族',name:'京族'});
	data.push({code:'基诺族',name:'基诺族'});
	data.push({code:'德昂族',name:'德昂族'});
	data.push({code:'保安族',name:'保安族'});
	data.push({code:'俄罗斯族',name:'俄罗斯族'});
	data.push({code:'裕固族',name:'裕固族'});
	data.push({code:'乌孜别克族',name:'乌孜别克族'});
	data.push({code:'门巴族',name:'门巴族'});
	data.push({code:'鄂伦春族',name:'鄂伦春族'});
	data.push({code:'独龙族',name:'独龙族'});
	data.push({code:'塔塔尔族',name:'塔塔尔族'});
	data.push({code:'赫哲族',name:'赫哲族'});
	data.push({code:'珞巴族',name:'珞巴族'});
	return data;
};
SelectOption.loadNation = function loadNowYear(code) {
	var data=SelectOption.getNationData();
	SelectOption.loadBaseCode(data, code);
};
SelectOption.getNation=function getNation(code){
	if(code==null)
		return "";
	return SelectOption.getCodeName(SelectOption.getNationData(),code);
};

/**
 * 技术职称
 * @return
 */
SelectOption.getTechnicalData = function getTechnicalData() {
	var data=new Array();
	data.push({code:'01',name:'高工'});
	data.push({code:'02',name:'教授级高工'});
	data.push({code:'03',name:'教授'});
	data.push({code:'04',name:'副教授'});
	data.push({code:'05',name:'院长'});
	data.push({code:'06',name:'研究员'});
	data.push({code:'07',name:'副研究员'});
	data.push({code:'08',name:'其他'});
	return data;
};
SelectOption.loadTechnical = function loadTechnical(code) {
	var data=SelectOption.getTechnicalData();
	SelectOption.loadBaseCode(data, code);
};
SelectOption.getTechnical=function getTechnical(code){
	if(code==null)
		return "";
	return SelectOption.getCodeName(SelectOption.getTechnicalData(),code);
};

/**
 * 政治面貌
 * @return
 */
SelectOption.getPoliticsData = function getPoliticsData() {
	var data=new Array();
	data.push({code:'01',name:'中共党员'});
	data.push({code:'02',name:'中共预备党员'});
	data.push({code:'03',name:'共青团员'});
	data.push({code:'04',name:'民革党员'});
	data.push({code:'05',name:'民盟盟员'});
	data.push({code:'06',name:'民建会员'});
	data.push({code:'07',name:'民进会员'});
	data.push({code:'08',name:'农工党党员'});
	data.push({code:'09',name:'致公党党员'});
	data.push({code:'10',name:'九三学社社员'});
	data.push({code:'11',name:'台盟盟员'});
	data.push({code:'12',name:'无党派人士'});
	data.push({code:'13',name:'群众'});
	return data;
};
SelectOption.loadPolitics = function loadPolitics(code) {
	var data=SelectOption.getPoliticsData();
	SelectOption.loadBaseCode(data, code);
};
SelectOption.getPolitics=function getPolitics(code){
	if(code==null)
		return "";
	return SelectOption.getCodeName(SelectOption.getPoliticsData(),code);
};

/**
 * 健康状况
 * @return
 */
SelectOption.getHealthData = function getHealthData() {
	var data=new Array();
	data.push({code:'1',name:'健康或良好'});
	data.push({code:'2',name:'一般或较弱'});
	data.push({code:'3',name:'有慢性病'});
	data.push({code:'4',name:'有生理缺陷'});
	data.push({code:'5',name:'残废'});
	return data;
};
SelectOption.loadHealth = function loadHealth(code) {
	var data=SelectOption.getHealthData();
	SelectOption.loadBaseCode(data, code);
};
SelectOption.getHealth=function getHealth(code){
	if(code==null)
		return "";
	return SelectOption.getCodeName(SelectOption.getHealthData(),code);
};

/**
 * 专家级别
 * @return
 */
SelectOption.getExpertLevelData = function getExpertLevelData() {
	var data=new Array();
	data.push({code:'1',name:'企业级'});
	data.push({code:'2',name:'县区级'});
	data.push({code:'3',name:'地区/市级'});
	data.push({code:'4',name:'省级'});
	data.push({code:'5',name:'国家级'});
	return data;
};
SelectOption.loadExpertLevel = function loadExpertLevel(code) {
	var data=SelectOption.getExpertLevelData();
	SelectOption.loadBaseCode(data, code);
};
SelectOption.getExpertLevel=function getExpertLevel(code){
	if(code==null)
		return "";
	return SelectOption.getCodeName(SelectOption.getExpertLevelData(),code);
};

/**
 * 预案模板-模板类型
 * @return
 */
SelectOption.getTemplateTypeData = function getTemplateTypeData() {
	var data=new Array();
	data.push({code:'1',name:'总体应急预案模板'});
	data.push({code:'2',name:'专项应急预案模板'});
	data.push({code:'3',name:'部门应急预案'});
	data.push({code:'4',name:'重大活动应急预案'});
	data.push({code:'5',name:'其它省级预案'});
	return data;
};
SelectOption.loadTemplateType = function loadTemplateType(code) {
	var data=SelectOption.getTemplateTypeData();
	SelectOption.loadBaseCode(data, code);
};
SelectOption.getTemplateType=function getTemplateType(code){
	if(code==null)
		return "";
	return SelectOption.getCodeName(SelectOption.getTemplateTypeData(),code);
};


/**
 * 季度
 * @return
 */
SelectOption.getQuarterData = function getQuarterData() {
	var data=new Array();
	data.push({code:'1',name:'第一季度'});
	data.push({code:'2',name:'第二季度'});
	data.push({code:'3',name:'第三季度'});
	data.push({code:'4',name:'第四季度'});
	return data;
};
SelectOption.loadQuarter = function loadQuarter(code) {
	var data=SelectOption.getQuarterData();
	SelectOption.loadBaseCode(data, code);
};
SelectOption.getQuarter=function getQuarter(code){
	if(code==null)
		return "";
	return SelectOption.getCodeName(SelectOption.getQuarterData(),code);
};


/**
 * 月份
 * @return
 */
SelectOption.getMonthData = function getMonthData() {
	var data=new Array();
	data.push({code:'01',name:'1月份'});
	data.push({code:'02',name:'2月份'});
	data.push({code:'03',name:'3月份'});
	data.push({code:'04',name:'4月份'});
	data.push({code:'05',name:'5月份'});
	data.push({code:'06',name:'6月份'});
	data.push({code:'07',name:'7月份'});
	data.push({code:'08',name:'8月份'});
	data.push({code:'09',name:'9月份'});
	data.push({code:'10',name:'10月份'});
	data.push({code:'11',name:'11月份'});
	data.push({code:'12',name:'12月份'});
	return data;
};
SelectOption.loadMonth = function loadMonth(code) {
	var data=SelectOption.getMonthData();
	SelectOption.loadBaseCode(data, code);
};
SelectOption.getMonth=function getMonth(code){
	if(code==null)
		return "";
	return SelectOption.getCodeName(SelectOption.getMonthData(),code);
};

/**
 * 行业类型
 * 工业及危险化学品类、商贸及服务类、交通运输类、工程建设类
 * @return
 */
SelectOption.getIndustryTypeData = function getIndustryTypeData() {
	var data=new Array();
	data.push({code:1,name:'工业及危险化学品类'});
	data.push({code:2,name:'商贸及服务类'});
	data.push({code:3,name:'交通运输类'});
	data.push({code:4,name:'工程建设类'});
	return data;
};
SelectOption.loadIndustryType = function loadIndustryType(code) {
	var data=SelectOption.getIndustryTypeData();
	SelectOption.loadBaseCode(data, code);
};
SelectOption.getIndustryType=function getIndustryType(code){
	if(code==null)
		return "";
	return SelectOption.getCodeName(SelectOption.getIndustryTypeData(),code);
};

/**
 * 行业类型(排查项)
 * 工业及危险化学品类、商贸及服务类、交通运输类、工程建设类、三小场所
 * @return
 */
SelectOption.getCheckIndustryTypeData = function getCheckIndustryTypeData() {
	var data=new Array();
	data.push({code:1,name:'工业及危险化学品类'});
	data.push({code:2,name:'商贸及服务类'});
	data.push({code:3,name:'交通运输类'});
	data.push({code:4,name:'工程建设类'});
	data.push({code:5,name:'三小场所类'});
	return data;
};
SelectOption.loadCheckIndustryType = function loadCheckIndustryType(code) {
	var data=SelectOption.getCheckIndustryTypeData();
	SelectOption.loadBaseCode(data, code);
};
SelectOption.getCheckIndustryType=function getCheckIndustryType(code){
	if(code==null)
		return "";
	return SelectOption.getCodeName(SelectOption.getCheckIndustryTypeData(),code);
};

/**
 * 地址
 * @return
 */
SelectOption.getAddressTypeData = function getAddressTypeData() {
	var data=new Array();
	data.push({code:'1',name:'办公地址'});
	data.push({code:'2',name:'生产经营地址'});
	return data;
};
SelectOption.loadAddressType = function loadAddressType(code) {
	var data=SelectOption.getAddressTypeData();
	SelectOption.loadBaseCode(data, code);
};
SelectOption.getAddressType=function getAddressType(code){
	if(code==null)
		return "";
	return SelectOption.getCodeName(SelectOption.getAddressTypeData(),code);
};


/**
 * 分类分级
 * 未分级、A级、B级、C级、D级
 * @return
 */
SelectOption.getClassGradeData = function getClassGradeData() {
	var data=new Array();
	data.push({code:0,name:'未分级'});
	data.push({code:1,name:'A级'});
	data.push({code:2,name:'B级'});
	data.push({code:3,name:'C级'});
	data.push({code:4,name:'D级'});
	return data;
};
SelectOption.loadClassGradeType = function loadClassGradeType(code) {
	var data=SelectOption.getClassGradeData();
	SelectOption.loadBaseCode(data, code);
};
SelectOption.getClassGrade=function getClassGrade(code){
	if(code==null) return "";
	return SelectOption.getCodeName(SelectOption.getClassGradeData(),code);
};



/**
 * 三小类型
 * 小档口、小作坊、小娱乐场所
 * @return
 */
SelectOption.getThreeTypeData = function getThreeTypeData() {
	var data=new Array();
	data.push({code:1,name:'小档口'});
	data.push({code:2,name:'小作坊'});
	data.push({code:3,name:'小娱乐场所'});
	return data;
};
SelectOption.loadThreeType = function loadThreeType(code) {
	var data=SelectOption.getThreeTypeData();
	SelectOption.loadBaseCode(data, code);
};
SelectOption.getThreeType=function getThreeType(code){
	if(code==null)
		return "";
	return SelectOption.getCodeName(SelectOption.getThreeTypeData(),code);
};

/**
 * 单位管辖隶属关系
 * @return
 */
SelectOption.getSubjectionData = function getSubjectionData() {
	var data=new Array();
	data.push({code:1,name:'市属行业部门管理单位'});
	data.push({code:2,name:'区属行业部门管理单位'});
	data.push({code:3,name:'街镇行业部门管理单位'});
	return data;
};
SelectOption.loadSubjection = function loadSubjection(code) {
	var data=SelectOption.getSubjectionData();
	SelectOption.loadBaseCode(data, code);
};
SelectOption.getSubjection=function getSubjection(code){
	if(code==null)
		return "";
	return SelectOption.getCodeName(SelectOption.getSubjectionData,code);
};

/**
 * 企业规模
 * @return
 */
SelectOption.getEntscaleData = function getEntscaleData() {
	var data=new Array();
	data.push({code:1,name:'大型'});
	data.push({code:2,name:'中型'});
	data.push({code:3,name:'小型'});
	data.push({code:4,name:'微型'});
	return data;
};
SelectOption.loadEntscale = function loadEntscale(code) {
	var data=SelectOption.getEntscaleData();
	SelectOption.loadBaseCode(data, code);
};
SelectOption.getEntscale=function getEntscale(code){
	if(code==null)
		return "";
	return SelectOption.getCodeName(SelectOption.getEntscaleData,code);
};

/**
 * 评级
 * @return
 */
SelectOption.getRateData = function getRateData() {
	var data=new Array();
	data.push({code:1,name:'一级'});
	data.push({code:2,name:'二级'});
	data.push({code:3,name:'三级'});
	return data;
};
SelectOption.loadRate = function loadRate(code) {
	var data=SelectOption.getRateData();
	SelectOption.loadBaseCode(data, code);
};
SelectOption.getRate=function getRate(code){
	if(code==null)
		return "";
	return SelectOption.getCodeName(SelectOption.getRateData(),code);
};


/**
 * 安全生产管理资料(资料类型-大类)
 * @return
 */
SelectOption.getDataOneTypeData = function getDataOneTypeData() {
	var data=new Array();
	data.push({code:1,name:'管理文件类'});
	data.push({code:2,name:'资质证书类'});
	data.push({code:3,name:'企业图例'});
	data.push({code:4,name:'其它'});
	return data;
};
SelectOption.loadDataOneType = function loadDataOneType(code) {
	var data=SelectOption.getDataOneTypeData();
	SelectOption.loadBaseCode(data, code);
};
SelectOption.getDataOneType=function getDataOneType(code){
	if(code==null)
		return "";
	return SelectOption.getCodeName(SelectOption.getDataOneTypeData(),code);
};

/**
 * 安全生产管理资料(资料类型-小类)
 * @return
 */
SelectOption.getDataTwoTypeData = function getDataTwoTypeData(onetype) {
	var data=new Array();
	if(onetype == 1){
		data.push({code:1,name:'安全生产责任制'});
		data.push({code:2,name:'安全生产管理制度'});
		data.push({code:3,name:'安全生产操作规范'});
	}else if(onetype == 2){
		data.push({code:1,name:'许可证书类'});
		data.push({code:2,name:'资质证书类(包含个人资质)'});
	}else if(onetype == 3){
		data.push({code:1,name:'企业厂区平面图'});
		data.push({code:2,name:'周围环境图'});
		data.push({code:3,name:'安全生产组织架构图'});
	}
	return data;
};
SelectOption.loadDataTwoType = function loadDataTwoType(code,onetype) {
	var data=SelectOption.getDataTwoTypeData(onetype);
	SelectOption.loadBaseCode(data, code);
};
SelectOption.getDataTwoType=function getDataTwoType(code,onetype){
	if(code==null)
		return "";
	return SelectOption.getCodeName(SelectOption.getDataTwoTypeData(onetype),code);
};



/**
 * 安全生产责任划分
 * @return
 */
SelectOption.getSafeResponsibilityData = function getSafeResponsibilityData() {
	var data=new Array();
	data.push({code:1,name:'主要负责人（第一责任人）'});
	data.push({code:2,name:'分管负责人（直接责任人）'});
	return data;
};
SelectOption.loadSafeResponsibility = function loadSafeResponsibility(code) {
	var data=SelectOption.getSafeResponsibilityData();
	SelectOption.loadBaseCode(data, code);
};
SelectOption.getSafeResponsibility=function getSafeResponsibility(code){
	if(code==null)
		return "";
	return SelectOption.getCodeName(SelectOption.getSafeResponsibilityData(),code);
};


/**
 * 专职兼职
 * @return
 */
SelectOption.getFullTimePartTimeData = function getFullTimePartTimeData() {
	var data=new Array();
	data.push({code:1,name:'专职'});
	data.push({code:2,name:'兼职'});
	return data;
};
SelectOption.loadFullTimePartTime = function loadFullTimePartTime(code) {
	var data=SelectOption.getFullTimePartTimeData();
	SelectOption.loadBaseCode(data, code);
};
SelectOption.getFullTimePartTime=function getFullTimePartTime(code){
	if(code==null)
		return "";
	return SelectOption.getCodeName(SelectOption.getFullTimePartTimeData(),code);
};


/**
 * 安全管理人员类型
 * 初级安全主任、中级安全主任、高级安全主任、注册安全工程师、职业健康管理人员、其他
 * @return
 */
SelectOption.getSafeManagerTypeData = function getSafeManagerTypeData() {
	var data=new Array();
	data.push({code:1,name:'初级安全主任'});
	data.push({code:2,name:'中级安全主任'});
	data.push({code:3,name:'高级安全主任'});
	data.push({code:4,name:'注册安全工程师'});
	data.push({code:5,name:'职业健康管理人员'});
	data.push({code:6,name:'其他'});
	return data;
};
SelectOption.loadSafeManagerType = function loadSafeManagerType(code) {
	var data=SelectOption.getSafeManagerTypeData();
	SelectOption.loadBaseCode(data, code);
};
SelectOption.getSafeManagerType=function getSafeManagerType(code){
	if(code==null)
		return "";
	return SelectOption.getCodeName(SelectOption.getSafeManagerTypeData(),code);
};


/**
 * 是否
 * @return
 */
SelectOption.getTureFalseData = function getTureFalseData() {
	var data=new Array();
	data.push({code:0,name:'否'});
	data.push({code:1,name:'是'});
	return data;
};
SelectOption.loadTureFalse = function loadTureFalse(code) {
	var data=SelectOption.getTureFalseData();
	SelectOption.loadBaseCode(data, code);
};
SelectOption.getTureFalse=function getTureFalse(code){
	return SelectOption.getCodeName(SelectOption.getTureFalseData(),code);
};

SelectOption.loadTureFalseWithParam = function loadTureFalse(data, code) {
	SelectOption.loadBaseCode(data, code);
};

/**
 * 存储场所
 * @return
 */
SelectOption.getReserveSiteData = function getReserveSiteData() {
	var data=new Array();
	data.push({code:0,name:'无'});
	data.push({code:1,name:'储罐区储存'});
	data.push({code:2,name:'专用仓库储存'});
	data.push({code:3,name:'专用场地储存'});
	return data;
};
SelectOption.loadReserveSite = function loadReserveSite(code) {
	var data=SelectOption.getReserveSiteData();
	SelectOption.loadBaseCode(data, code);
};
SelectOption.getReserveSite=function getReserveSite(code){
	return SelectOption.getCodeName(SelectOption.getReserveSiteData(),code);
};

/**
 * 存储方式
 * @return
 */
SelectOption.getReserveWayData = function getReserveWayData() {
	var data=new Array();
	data.push({code:0,name:'无'});
	data.push({code:1,name:'储罐储存'});
	data.push({code:2,name:'分离储存'});
	data.push({code:3,name:'隔离储存'});
	data.push({code:4,name:'隔开储存'});
	return data;
};
SelectOption.loadReserveWay = function loadReserveWay(code) {
	var data=SelectOption.getReserveWayData();
	SelectOption.loadBaseCode(data, code);
};
SelectOption.getReserveWay=function getReserveWay(code){
	return SelectOption.getCodeName(SelectOption.getReserveWayData(),code);
};

/**
 * 存储方式
 * @return
 */
SelectOption.getIndustryTypesData = function getIndustryTypesData() {
	var data=new Array();
	data.push({code:0,name:'电力'});
	data.push({code:1,name:'危化品'});
	data.push({code:2,name:'工商贸'});
	data.push({code:3,name:'其他'});
	return data;
};
SelectOption.loadIndustryTypes = function loadIndustryTypes(code) {
	var data=SelectOption.getIndustryTypesData();
	SelectOption.loadBaseCode(data, code);
};
SelectOption.getIndustryTypes=function getIndustryTypes(code){
	return SelectOption.getCodeName(SelectOption.getIndustryTypesData(),code);
};


/**
 * 用人单位类型
 * @return
 */
SelectOption.getEntTypeData = function getEntTypeData() {
	var data=new Array();
	data.push({code:1,name:'个体工商户'});
	data.push({code:2,name:'产业活动单位'});
	data.push({code:3,name:'企业法人单位'});
	return data;
};
SelectOption.loadEntType = function loadEntType(code) {
	var data=SelectOption.getEntTypeData();
	SelectOption.loadBaseCode(data, code);
};
SelectOption.getEntType=function getEntType(code){
	return SelectOption.getCodeName(SelectOption.getEntTypeData(),code);
};

/**
 * 定期进行健康体检人员比例
 * @return
 */
SelectOption.getPhysicalsData = function getPhysicalsData() {
	var data=new Array();
	data.push({code:1,name:'全部'});
	data.push({code:2,name:'部分'});
	data.push({code:3,name:'无'});
	return data;
};
SelectOption.loadPhysicals = function loadPhysicals(code) {
	var data=SelectOption.getPhysicalsData();
	SelectOption.loadBaseCode(data, code);
};
SelectOption.getPhysicals=function getPhysicals(code){
	return SelectOption.getCodeName(SelectOption.getPhysicalsData(),code);
};

/**
 * 职业危害岗位
 * @return
 */
SelectOption.getProharmPostData = function getProharmPostData() {
	var data=new Array();
	data.push({code:1,name:'自动化'});
	data.push({code:2,name:'机械化'});
	data.push({code:3,name:'手工操作'});
	return data;
};
SelectOption.loadProharmPost = function loadProharmPost(code) {
	var data=SelectOption.getProharmPostData();
	SelectOption.loadBaseCode(data, code);
};
SelectOption.getProharmPost=function getProharmPost(code){
	return SelectOption.getCodeName(SelectOption.getProharmPostData(),code);
};


/**
 * 单位性质
 * @return
 */
SelectOption.getUnitEntnatData = function getUnitEntnatData() {
	var data=new Array();
	data.push({code:1,name:'央企'});
	data.push({code:2,name:'省属企业'});
	data.push({code:3,name:'其他'});
	return data;
};
SelectOption.loadUnitEntnat = function loadUnitEntnat(code) {
	var data=SelectOption.getUnitEntnatData();
	SelectOption.loadBaseCode(data, code);
};
SelectOption.getUnitEntnat=function getUnitEntnat(code){
	return SelectOption.getCodeName(SelectOption.getUnitEntnatData(),code);
};

/**
 * 单位法人性质
 * @return
 */
SelectOption.getUnitPernatData = function getUnitPernatData() {
	var data=new Array();
	data.push({code:1,name:'独立法人'});
	data.push({code:2,name:'非独立法人'});
	return data;
};
SelectOption.loadUnitPernat = function loadUnitPernat(code) {
	var data=SelectOption.getUnitPernatData();
	SelectOption.loadBaseCode(data, code);
};
SelectOption.getUnitPernat=function getUnitPernat(code){
	return SelectOption.getCodeName(SelectOption.getUnitPernatData(),code);
};

/**
 * 运行状态
 * @return
 */
SelectOption.getRunStatusData = function getRunStatusData() {
	var data=new Array();
	data.push({code:1,name:'自动化'});
	data.push({code:2,name:'机械化'});
	data.push({code:3,name:'手工操作'});
	return data;
};
SelectOption.loadRunStatus = function loadRunStatus(code) {
	var data=SelectOption.getRunStatusData();
	SelectOption.loadBaseCode(data, code);
};
SelectOption.getRunStatus=function getRunStatus(code){
	return SelectOption.getCodeName(SelectOption.getRunStatusData(),code);
};


/**
 * 存放物体形态
 * @return
 */
SelectOption.getFormStateData = function getFormStateData() {
	var data=new Array();
	data.push({code:1,name:'固体'});
	data.push({code:2,name:'液体'});
	data.push({code:3,name:'气体'});
	return data;
};
SelectOption.loadFormState = function loadFormState(code) {
	var data=SelectOption.getFormStateData();
	SelectOption.loadBaseCode(data, code);
};
SelectOption.getFormState=function getFormState(code){
	return SelectOption.getCodeName(SelectOption.getFormStateData(),code);
};

/**
 * 储罐类型
 * @return
 */
SelectOption.getStotankTypeData = function getStotankTypeData() {
	var data=new Array();
	data.push({code:1,name:'固体顶储罐'});
	data.push({code:2,name:'浮顶储罐'});
	data.push({code:3,name:'其他类型储罐'});
	return data;
};
SelectOption.loadStotankType = function loadStotankType(code) {
	var data=SelectOption.getStotankTypeData();
	SelectOption.loadBaseCode(data, code);
};
SelectOption.getStotankType=function getStotankType(code){
	return SelectOption.getCodeName(SelectOption.getStotankTypeData(),code);
};

/**
 * 许可预警状态
 * @return
 */
SelectOption.getPermitStatusData = function getPermitStatusData() {
	var data=new Array();
	data.push({code:1,name:'超期'});
	data.push({code:2,name:'预超期'});
	data.push({code:3,name:'正常'});
	return data;
};
SelectOption.loadPermitStatus = function loadPermitStatus(code) {
	var data=SelectOption.getPermitStatusData();
	SelectOption.loadBaseCode(data, code);
};
SelectOption.getPermitStatus=function getPermitStatus(code){
	return SelectOption.getCodeName(SelectOption.getPermitStatusData(),code);
};

/**
 * 重大危险源状态
 */
SelectOption.getDangerSourceStateData = function getDangerSourceStateData() {
	var data=new Array();
	data.push({code:"01",name:'已登记'});
	data.push({code:"02",name:'已上报'});
	data.push({code:"03",name:'同意受理'});
	data.push({code:"04",name:'不同意受理'});
	data.push({code:"05",name:'已备案'});
	data.push({code:"06",name:'不同意备案'});
	data.push({code:"07",name:'核销申请'});
	data.push({code:"08",name:'核销受理'});
	data.push({code:"09",name:'核销受理驳回'});
	data.push({code:"10",name:'已核销'});
	data.push({code:"11",name:'核销审核驳回'});
	return data;
};
SelectOption.loadDangerSourceState = function loadDangerSourceState(code) {
	var data=SelectOption.getDangerSourceStateData();
	SelectOption.loadBaseCode(data, code);
};
SelectOption.getDangerSourceState=function getDangerSourceState(code){
	return SelectOption.getCodeName(SelectOption.getDangerSourceStateData(),code);
};

/**
 * 重大危险源级别
 */
SelectOption.getdangSouLevelData = function getdangSouLevelData() {
	var data=new Array();
	data.push({code:1,name:'一级'});
	data.push({code:2,name:'二级'});
	data.push({code:3,name:'三级'});
	data.push({code:4,name:'四级'});
	return data;
};
SelectOption.loaddangSouLevel = function loaddangSouLevel(code) {
	var data=SelectOption.getdangSouLevelData();
	SelectOption.loadBaseCode(data, code);
};
SelectOption.getdangSouLevel=function getdangSouLevel(code){
	return SelectOption.getCodeName(SelectOption.getdangSouLevelData(),code);
};
/**
 * 是否是重大危险源
 */
SelectOption.getisDangSouData = function getisDangSouData() {
	var data=new Array();
	data.push({code:1,name:'是'});
	data.push({code:0,name:'否'});
	return data;
};
SelectOption.loadisDangSou = function loadisDangSou(code) {
	var data=SelectOption.getisDangSouData();
	SelectOption.loadBaseCode(data, code);
};
SelectOption.getisDangSou=function getisDangSou(code){
	return SelectOption.getCodeName(SelectOption.getisDangSouData(),code);
};


/**
 * 重大危险源类别
 */
SelectOption.getDangerTypeData = function getDangerTypeData() {
	var data=new Array();
	data.push({code:1,name:'危险化学品类'});
	data.push({code:2,name:'燃气类'});
	data.push({code:3,name:'港口类'});
	return data;
};
SelectOption.loadDangerType = function loadDangerType(code) {
	var data=SelectOption.getDangerTypeData();
	SelectOption.loadBaseCode(data, code);
};
SelectOption.getDangerType=function getDangerType(code){
	return SelectOption.getCodeName(SelectOption.getDangerTypeData(),code);
};

/**
 * 排查分类
 */
SelectOption.getCheckItemTypeData = function getCheckItemTypeData() {
	var data=new Array();
	data.push({code:1,name:'通用基础检查项'});
	data.push({code:2,name:'通用现场检查项'});
	data.push({code:3,name:'专用检查项'});
	return data;
};
SelectOption.loadCheckItemType = function loadCheckItemType(code) {
	var data=SelectOption.getCheckItemTypeData();
	SelectOption.loadBaseCode(data, code);
};
SelectOption.getCheckItemType=function getCheckItemType(code){
	return SelectOption.getCodeName(SelectOption.getCheckItemTypeData(),code);
};


/**
 * 隐患上报状态
 * @return
 */
SelectOption.getReportstatusData = function getReportstatusData() {
	var data=new Array();
	data.push({code:'1',name:'已上报'});
	data.push({code:'0',name:'未上报'});
	return data;
};
SelectOption.loadReportstatus = function loadReportstatus(code) {
	var data=SelectOption.getReportstatusData();
	SelectOption.loadBaseCode(data, code);
};
SelectOption.getReportstatus=function getReportstatus(code){
	if(code==null)
		return "";
	return SelectOption.getCodeName(SelectOption.getReportstatusData(),code);
};


/**
 * 巡查人员身份
 */
SelectOption.getPatrollerTypeData = function getPatrollerTypeData() {
	var data=new Array();
	data.push({code:1,name:'巡查登记人员'});
	data.push({code:2,name:'网格管理人员'});
	return data;
};
SelectOption.loadPatrollerType = function loadPatrollerType(code) {
	var data=SelectOption.getPatrollerTypeData();
	SelectOption.loadBaseCode(data, code);
};
SelectOption.getPatrollerType=function getPatrollerType(code){
	return SelectOption.getCodeName(SelectOption.getPatrollerTypeData(),code);
};


/**
 * 隐患排查结果
 */
SelectOption.getCheckResultData = function getCheckResultData() {
	var data=new Array();
	data.push({code:0,name:'无隐患'});
	data.push({code:1,name:'有隐患'});
	return data;
};
SelectOption.loadCheckResult = function loadCheckResult(code) {
	var data=SelectOption.getCheckResultData();
	SelectOption.loadBaseCode(data, code);
};
SelectOption.getCheckResult=function getCheckResult(code){
	return SelectOption.getCodeName(SelectOption.getCheckResultData(),code);
};

/**
 * 危险源备案申请类型
 * @return
 */
SelectOption.getCaseapplytypeData = function getCaseapplytypeData() {
	var data=new Array();
	data.push({code:0,name:'初次备案'});
	data.push({code:1,name:'新项目备案'});
	data.push({code:2,name:'改项目备案'});
	data.push({code:3,name:'扩项目备案'});
	data.push({code:4,name:'更新备案'});
	return data;
};
SelectOption.loadCaseapplytype = function loadCaseapplytype(code) {
	var data=SelectOption.getCaseapplytypeData();
	SelectOption.loadBaseCode(data, code);
};
SelectOption.getCaseapplytype=function getCaseapplytype(code){
	return SelectOption.getCodeName(SelectOption.getCaseapplytypeData(),code);
};

/**
 * 危险化学品单位类型
 * @return
 */
SelectOption.getDangerchemcomptypeData = function getDangerchemcomptypeData() {
	var data=new Array();
	data.push({code:0,name:'生产'});
	data.push({code:1,name:'储存'});
	data.push({code:2,name:'使用'});
	data.push({code:3,name:'经营'});
	data.push({code:4,name:'其他'});
	return data;
};
SelectOption.loadDangerchemcomptype = function loadDangerchemcomptype(code) {
	var data=SelectOption.getDangerchemcomptypeData();
	SelectOption.loadBaseCode(data, code);
};
SelectOption.getDangerchemcomptype=function getDangerchemcomptype(code){
	return SelectOption.getCodeName(SelectOption.getDangerchemcomptypeData(),code);
};

/**
 * 经济类型
 * @return
 */
SelectOption.getEconomytypeData = function getEconomytypeData() {
	var data=new Array();
	data.push({code:0,name:'国有经济'});
	data.push({code:1,name:'集体经济'});
	data.push({code:2,name:'私营经济'});
	data.push({code:3,name:'有限责任公司'});
	data.push({code:4,name:'联营经济'});
	data.push({code:5,name:'股份合作'});
	data.push({code:6,name:'外商投资'});
	data.push({code:7,name:'港澳台投资'});
	data.push({code:8,name:'其他经济'});
	return data;
};
SelectOption.loadEconomytype = function loadEconomytype(code) {
	var data=SelectOption.getEconomytypeData();
	SelectOption.loadBaseCode(data, code);
};
SelectOption.getEconomytype=function getEconomytype(code){
	return SelectOption.getCodeName(SelectOption.getEconomytypeData(),code);
};


/**
 * 企业隐患自查状态
 */
SelectOption.getSelfCheckStateData = function getSelfCheckStateData() {
	var data=new Array();
	data.push({code:1,name:'已自查'});
	data.push({code:2,name:'未自查'});
	data.push({code:3,name:'自查中'});
	return data;
};
SelectOption.loadSelfCheckState = function loadSelfCheckState(code) {
	var data=SelectOption.getSelfCheckStateData();
	SelectOption.loadBaseCode(data, code);
};
SelectOption.getSelfCheckState=function getSelfCheckState(code){
	return SelectOption.getCodeName(SelectOption.getSelfCheckStateData(),code);
};

/**
 * 巡查缘由
 */
SelectOption.getPatrolReasonData = function getPatrolReasonData() {
	var data=new Array();
	data.push({code:1,name:'基层网格巡查'});
	data.push({code:2,name:'部门日常巡查'});
	data.push({code:3,name:'群众举报投诉'});
	data.push({code:4,name:'上级领导督办'});
	data.push({code:5,name:'其它'});
	return data;
};
SelectOption.loadPatrolReason = function loadPatrolReason(code) {
	var data=SelectOption.getPatrolReasonData();
	SelectOption.loadBaseCode(data, code);
};
SelectOption.getPatrolReason=function getPatrolReason(code){
	return SelectOption.getCodeName(SelectOption.getPatrolReasonData(),code);
};

//监测监控 视频主机摄像头的状态
SelectOption.getVideostateData = function getVideostateData() {
	var data=new Array();
	data.push({code:1,name:'在线'});
	data.push({code:2,name:'离线'});
	data.push({code:3,name:'维修'});
	return data;
};
SelectOption.loadVideostate = function loadVideostate(code) {
	var data=SelectOption.getVideostateData();
	SelectOption.loadBaseCode(data, code);
};
SelectOption.getVideostate=function getVideostate(code){
	return SelectOption.getCodeName(SelectOption.getVideostateData(),code);
};

//监测监控 视频型号类型
SelectOption.getVideoModelStyleData = function getVideoModelStyleData() {
	var data=new Array();
	data.push({code:1,name:'主机'});
	data.push({code:2,name:'摄像头'});
	data.push({code:3,name:'主机和摄像头'});
	return data;
};
SelectOption.loadVideoModelStyle = function loadVideoModelStyle(code) {
	var data=SelectOption.getVideoModelStyleData();
	SelectOption.loadBaseCode(data, code);
};
SelectOption.getVideoModelStyle=function getVideoModelStyle(code){
	return SelectOption.getCodeName(SelectOption.getVideoModelStyleData(),code);
};

//监测监控 监测设备类型
SelectOption.getProbeDeviceTypeData = function getProbeDeviceTypeData() {
	var data=new Array();
	data.push({code:1,name:'主机'});
	data.push({code:2,name:'探头'});
	data.push({code:3,name:'主机和探头'});
	return data;
};
SelectOption.loadProbeDeviceType = function loadProbeDeviceType(code) {
	var data=SelectOption.getProbeDeviceTypeData();
	SelectOption.loadBaseCode(data, code);
};
SelectOption.getProbeDeviceType=function getProbeDeviceType(code){
	return SelectOption.getCodeName(SelectOption.getProbeDeviceTypeData(),code);
};


//监测监控 探测器状态
SelectOption.getProbeStateData = function getProbeStateData() {
	var data=new Array();
	data.push({code:0,name:'正常'});
	data.push({code:2,name:'待标定'});
	data.push({code:3,name:'探头故障'});
	data.push({code:4,name:'预警'});
	data.push({code:7,name:'通讯故障'});
	data.push({code:99,name:'网络故障'});
	data.push({code:100,name:'满量程'});
	data.push({code:101,name:'低报'});
	data.push({code:102,name:'高报'});
	return data;
};
SelectOption.loadProbeState = function loadProbeState(code) {
	var data=SelectOption.getProbeStateData();
	SelectOption.loadBaseCode(data, code);
};
SelectOption.getProbeState=function getProbeState(code){
	return SelectOption.getCodeName(SelectOption.getProbeStateData(),code);
};
SelectOption.loadProbeStateWithParam = function loadProbeState(data, code) {
	SelectOption.loadBaseCode(data, code);
};

//监测监控 是否以消音
SelectOption.getErasureData = function getErasureData() {
	var data=new Array();
	data.push({code:0,name:'未消音'});
	data.push({code:1,name:'已消音'});
	return data;
};
SelectOption.loadErasure = function loadErasure(code) {
	var data=SelectOption.getErasureData();
	SelectOption.loadBaseCode(data, code);
};
SelectOption.getErasure=function getErasure(code){
	return SelectOption.getCodeName(SelectOption.getErasureData(),code);
};

//监测监控 报警处理状态
SelectOption.getAlarmHandleStatusData = function getAlarmHandleStatus() {
	var data=new Array();
	data.push({code:0,name:'未处理'});
	data.push({code:1,name:'已处理'});
	return data;
};
SelectOption.loadAlarmHandleStatus = function loadAlarmHandleStatus(code) {
	var data=SelectOption.getAlarmHandleStatusData();
	SelectOption.loadBaseCode(data, code);
};
SelectOption.getAlarmHandleStatus=function getAlarmHandleStatus(code){
	return SelectOption.getCodeName(SelectOption.getAlarmHandleStatusData(),code);
};

/**
 * 重大危险源 监测监控 主机品牌
 * @return
 */
SelectOption.loadMacVideoBrand = function loadMacVideoBrand(code,jsonParam){
	SelectOption.loadBaseCodeFromDB(BASE_URL+"/monitor/macvideobrand/loadMacvideoBrand",code,jsonParam);
};

/**
 * 重大危险源 监测主机、监测探头品牌
 * @return
 */
SelectOption.loadMacProbeBrand = function loadMacProbeBrand(code,jsonParam){
	SelectOption.loadBaseCodeFromDB(BASE_URL+"/monitor/macprobebrand/loadMacprobeBrand",code,jsonParam);
};

/**
 * 执法人员身份属性
 * 1：执法人员2：审核人员3：审批人员4：督查人员
 */
SelectOption.getExecTypeData = function getExecTypeData() {
	var data=new Array();
	data.push({code:1,name:'执法人员'});
	data.push({code:2,name:'审核人员'});
	data.push({code:3,name:'审批人员'});
	data.push({code:4,name:'督查人员'});
	return data;
};
SelectOption.loadExecType = function loadExecType(code) {
	var data=SelectOption.getExecTypeData();
	SelectOption.loadBaseCode(data, code);
};
SelectOption.getExecType=function getExecType(code){
	if(code==null)
		return "";
	return SelectOption.getCodeName(SelectOption.getExecTypeData(),code);
};

/**
 * 文化程度
 * 1：硕士以上2：大学3：大专4：高中，中专5：初中6：小学7：文盲
 */
SelectOption.getEducationData = function getEducationData() {
	var data=new Array();
	data.push({code:1,name:'硕士以上'});
	data.push({code:2,name:'大学'});
	data.push({code:3,name:'大专'});
	data.push({code:4,name:'高中，中专'});
	data.push({code:5,name:'初中'});
	data.push({code:6,name:'小学'});
	data.push({code:7,name:'文盲'});
	return data;
};
SelectOption.loadEducation = function loadEducation(code) {
	var data=SelectOption.getEducationData();
	SelectOption.loadBaseCode(data, code);
};
SelectOption.getEducation=function getEducation(code){
	if(code==null)
		return "";
	return SelectOption.getCodeName(SelectOption.getEducationData(),code);
};

/**
 * 查看案件范围
 * 1：个人2：部门3：区域
 */
SelectOption.getCaseScopeData = function getCaseScopeData() {
	var data=new Array();
	data.push({code:1,name:'个人'});
	data.push({code:2,name:'部门'});
	data.push({code:3,name:'区域'});
	return data;
};
SelectOption.loadCaseScope = function loadCaseScope(code) {
	var data=SelectOption.getCaseScopeData();
	SelectOption.loadBaseCode(data, code);
};
SelectOption.getCaseScope=function getCaseScope(code){
	if(code==null)
		return "";
	return SelectOption.getCodeName(SelectOption.getCaseScopeData(),code);
};

/**
 * 执法计划类型
 * 1：月计划 2：专项计划
 */
SelectOption.getPlanTypeData = function getPlanTypeData() {
	var data=new Array();
	data.push({code:1,name:'月计划'});
	data.push({code:2,name:'专项计划'});
	return data;
};
SelectOption.loadPlanType = function loadPlanType(code) {
	var data=SelectOption.getPlanTypeData();
	SelectOption.loadBaseCode(data, code);
};
SelectOption.getPlanType=function getPlanType(code){
	if(code==null)
		return "";
	return SelectOption.getCodeName(SelectOption.getPlanTypeData(),code);
};



/**
 * 待执法企业检查状态
 * 0：未检查 1：已检查
 */
SelectOption.getLawEntStateData = function getLawEntStateData() {
	var data=new Array();
	data.push({code:0,name:'未检查'});
	data.push({code:1,name:'已检查'});
	return data;
};
SelectOption.loadLawEntState = function loadLawEntState(code) {
	var data=SelectOption.getLawEntStateData();
	SelectOption.loadBaseCode(data, code);
};
SelectOption.getLawEntState=function getLawEntState(code){
	if(code==null)
		return "";
	return SelectOption.getCodeName(SelectOption.getLawEntStateData(),code);
};


/**
 * 行政执法-处罚方式
 * 1：当场处罚 2：立案处罚
 */
SelectOption.getLawPunishWayData = function getLawPunishWayData() {
	var data=new Array();
	data.push({code:1,name:'当场处罚'});
	data.push({code:2,name:'立案处罚'});
	return data;
};
SelectOption.loadLawPunishWay = function loadLawPunishWay(code) {
	var data=SelectOption.getLawPunishWayData();
	SelectOption.loadBaseCode(data, code);
};
SelectOption.getLawPunishWay=function getLawPunishWay(code){
	if(code==null)
		return "";
	return SelectOption.getCodeName(SelectOption.getLawPunishWayData(),code);
};

/**
 * 1.应急管理 应急仓库  物资库级别
 */
SelectOption.getMaeDeposGradeData = function getMaeDeposGradeData() {
	var data=new Array();
	data.push({code:0,name:'国家级'});
	data.push({code:1,name:'省级'});
	data.push({code:2,name:'地市级'});
	data.push({code:3,name:'区县级'});
	data.push({code:4,name:'乡镇'});
	return data;
};
SelectOption.loadMaeDeposGrade = function loadMaeDeposGrade(code) {
	var data=SelectOption.getMaeDeposGradeData();
	SelectOption.loadBaseCode(data, code);
};
SelectOption.getMaeDeposGrade=function getMaeDeposGrade(code){
	if(code==null)
		return "";
	return SelectOption.getCodeName(SelectOption.getMaeDeposGradeData(),code);
};

/**
 * 1.应急管理 应急仓库  存储物资库类别
 * materialtype
 */
SelectOption.getMaeMaterialtypeData = function getMaeMaterialtypeData() {
	var data=new Array();
	data.push({code:0,name:'国家战略性储备物资'});
	data.push({code:1,name:'战略性粮食储备'});
	data.push({code:2,name:'战略性棉花储备'});
	data.push({code:3,name:'战略性食用油储备'});
	data.push({code:4,name:'战略性能源储备'});
	data.push({code:5,name:'战略性医药储备'});
	data.push({code:6,name:'其他战略性储备物资'});
	data.push({code:7,name:'专用应急物资及储备'});
	data.push({code:8,name:'防汛抗旱专用物资'});
	data.push({code:9,name:'防震减灾专用物资'});
	data.push({code:10,name:'防疫应急专用物资'});
	data.push({code:11,name:'有害生物灾害应急防控专用物资'});
	data.push({code:12,name:'危险化学品事故救援专用物资'});
	data.push({code:13,name:'矿山事故救援专用物资'});
	data.push({code:14,name:'其它专项救援物资储备'});
	data.push({code:15,name:'基本生活物资保障'});
	data.push({code:16,name:'粮食'});
	data.push({code:17,name:'除粮食之外的食品'});
	data.push({code:18,name:'食盐'});
	data.push({code:19,name:'食用油'});
	data.push({code:20,name:'食糖'});
	data.push({code:21,name:'肉类'});
	data.push({code:22,name:'衣被'});
	data.push({code:23,name:'饮用水'});
	data.push({code:24,name:'救灾帐篷'});
	data.push({code:25,name:'其它基本生活物资'});
	data.push({code:26,name:'应急装备'});
	return data;
};
SelectOption.loadMaeMaterialtype = function loadMaeMaterialtype(code) {
	var data=SelectOption.getMaeMaterialtypeData();
	SelectOption.loadBaseCode(data, code);
};
SelectOption.getMaeMaterialtype=function getMaeMaterialtype(code){
	if(code==null)
		return "";
	return SelectOption.getCodeName(SelectOption.getMaeMaterialtypeData(),code);
};


/**
 * 1.应急管理 应急物资  资金来源
 */
SelectOption.getCapitalsourceData = function getCapitalsourceData() {
    var data=new Array();
    data.push({code:0,name:'政府拨款'});
    data.push({code:1,name:'政府扶持'});
    data.push({code:2,name:'企业自筹'});
    data.push({code:3,name:'其他'});
    return data;
};
SelectOption.loadCapitalsource = function loadCapitalsource(code) {
    var data=SelectOption.getCapitalsourceData();
    SelectOption.loadBaseCode(data, code);
};
SelectOption.getCapitalsource=function getCapitalsource(code){
    if(code==null)
        return "";
    return SelectOption.getCodeName(SelectOption.getCapitalsourceData(),code);
};

/**
 * 1.应急管理 应急物资 所属单位类型 
 */
SelectOption.getMaeUnittypeData = function getMaeUnittypeData() {
    var data=new Array();
    data.push({code:0,name:'物资储备库 '});
    data.push({code:1,name:'企业'});
    data.push({code:2,name:'救援队伍'});
    return data;
};
SelectOption.loadMaeUnittype = function loadMaeUnittype(code) {
    var data=SelectOption.getMaeUnittypeData();
    SelectOption.loadBaseCode(data, code);
};
SelectOption.getMaeUnittype=function getMaeUnittype(code){
    if(code==null)
        return "";
    return SelectOption.getCodeName(SelectOption.getMaeUnittypeData(),code);
};

/**
 * 1.应急管理 应急物资 是否可回收
 * 1.是 0否
 */
SelectOption.getRecoverableData = function getRecoverableData() {
    var data=new Array();
    data.push({code:0,name:'否 '});
    data.push({code:1,name:'是'});
    return data;
};
SelectOption.loadRecoverable = function loadRecoverable(code) {
    var data=SelectOption.getRecoverableData();
    SelectOption.loadBaseCode(data, code);
};
SelectOption.getRecoverable=function getRecoverable(code){
    if(code==null)
        return "";
    return SelectOption.getCodeName(SelectOption.getRecoverableData(),code);
};


/**
 * 1.应急仓库，应急资源状态
 * 1.已填写
 * 2 已上报
 */
SelectOption.getEmsStateData = function getEmsStateData() {
    var data=new Array();
    data.push({code:1,name:'填报中'});
    data.push({code:2,name:'已上报'});
    return data;
};
SelectOption.loadEmsState = function loadEmsState(code) {
    var data=SelectOption.getEmsStateData();
    SelectOption.loadBaseCode(data, code);
};
SelectOption.getEmsState=function getEmsState(code){
    if(code==null)
        return "";
    return SelectOption.getCodeName(SelectOption.getEmsStateData(),code);
};


/**
 * 应急预案类型
 * 预案类型（1：综合预案 2：专项预案 3：应急处置方案）
 */
SelectOption.getEmsPlanTypeData = function getEmsPlanTypeData() {
    var data=new Array();
    data.push({code:1,name:'综合预案'});
    data.push({code:2,name:'专项预案'});
    data.push({code:3,name:'应急处置方案'});
    return data;
};
SelectOption.loadEmsPlanType = function loadEmsPlanType(code) {
    var data=SelectOption.getEmsPlanTypeData();
    SelectOption.loadBaseCode(data, code);
};
SelectOption.getEmsPlanType=function getEmsPlanType(code){
    if(code==null)
        return "";
    return SelectOption.getCodeName(SelectOption.getEmsPlanTypeData(),code);
};


/**
 * 应急预案状态
 * 预案状态（1：登记 2：已上报 3：审核同意 4：审核不同意 ）
 */
SelectOption.getEmsPlanStateData = function getEmsPlanStateData() {
    var data=new Array();
    data.push({code:1,name:'登记'});
    data.push({code:2,name:'已上报'});
    data.push({code:3,name:'审核同意'});
    data.push({code:4,name:'审核不同意'});
    return data;
};
SelectOption.loadEmsPlanState = function loadEmsPlanState(code) {
    var data=SelectOption.getEmsPlanStateData();
    SelectOption.loadBaseCode(data, code);
};
SelectOption.getEmsPlanState=function getEmsPlanState(code){
    if(code==null)
        return "";
    return SelectOption.getCodeName(SelectOption.getEmsPlanStateData(),code);
};


/**
 * 应急预案级别
 * 预案级别（1：国家级 2：省级 3：市级 4：区县级 5：企业）
 */
SelectOption.getEmsPlanLevelData = function getEmsPlanLevelData() {
    var data=new Array();
    data.push({code:1,name:'国家级'});
    data.push({code:2,name:'省级'});
    data.push({code:3,name:'市级'});
    data.push({code:4,name:'区县级'});
    data.push({code:5,name:'企业'});
    return data;
};
SelectOption.loadEmsPlanLevel = function loadEmsPlanLevel(code) {
    var data=SelectOption.getEmsPlanLevelData();
    SelectOption.loadBaseCode(data, code);
};
SelectOption.getEmsPlanLevel=function getEmsPlanLevel(code){
    if(code==null)
        return "";
    return SelectOption.getCodeName(SelectOption.getEmsPlanLevelData(),code);
};

/**
 * 事故类别
 * @return
 */
SelectOption.getAccData = function getAccData() {
	var data=new Array();
	data.push({code:1,name:'煤矿事故'});
	data.push({code:2,name:'金属与非金属矿山事故'});
	data.push({code:3,name:'事故灾难'});
	data.push({code:4,name:'建筑业事故'});
	data.push({code:5,name:'危险化学品事故'});
	data.push({code:6,name:'烟花爆竹和民用爆炸物事故'});
	data.push({code:7,name:'其他工矿商贸事故'});
	data.push({code:8,name:'火灾事故'});
	data.push({code:9,name:'道路交通事故'});
	data.push({code:10,name:'水上交通事故'});
	data.push({code:11,name:'铁路交通事故'});
	data.push({code:12,name:'城市轨道交通事故'});
	data.push({code:13,name:'民用航空器事故'});
	data.push({code:14,name:'特种设备事故'});
	data.push({code:15,name:'基础设施和公用设施事故'});
	data.push({code:16,name:'染和生态破坏事件'});
	data.push({code:17,name:'农业机械事故'});
	data.push({code:18,name:'踩踏事件'});
	data.push({code:19,name:'核与辐射事故'});
	data.push({code:20,name:'能源供应中断事故'});
	data.push({code:21,name:'其他事故灾难'});
	return data;
};
SelectOption.loadAcc = function loadAcc(code) {
	var data=SelectOption.getAccData();
	SelectOption.loadBaseCode(data, code);
};
SelectOption.getAcc=function getAcc(code){
	return SelectOption.getCodeName(SelectOption.getAccData(),code);
};

/**
 * 事故等级
 * @return
 */
SelectOption.getAcclevelData = function getAcclevelData() {
	var data=new Array();
	data.push({code:1,name:'特别重大事故'});
	data.push({code:2,name:'重大事故'});
	data.push({code:3,name:'较大事故'});
	data.push({code:4,name:'一般事故'});
	return data;
};
SelectOption.loadAcclevel = function loadAcclevel(code) {
	var data=SelectOption.getAcclevelData();
	SelectOption.loadBaseCode(data, code);
};
SelectOption.getAcclevel=function getAcclevel(code){
	return SelectOption.getCodeName(SelectOption.getAcclevelData(),code);
};

/**
 * 待办提醒状态
 * @return
 */
SelectOption.getStateData = function getStateData() {
	var data=new Array();
	data.push({code:1,name:'未处理'});
	data.push({code:2,name:'已办'});
	return data;
};
SelectOption.loadState = function loadState(code) {
	var data=SelectOption.getStateData();
	SelectOption.loadBaseCode(data, code);
};
SelectOption.getState=function getState(code){
	return SelectOption.getCodeName(SelectOption.getStateData(),code);
};

/**
 * 密级
 * @return
 */
SelectOption.getDenseData = function getDenseData() {
	var data=new Array();
	data.push({code:1,name:'绝密'});
	data.push({code:2,name:'机密'});
	data.push({code:3,name:'秘密'});
	data.push({code:4,name:'限制'});
	data.push({code:5,name:'公开'});
	data.push({code:6,name:'其他'});
	return data;
};
SelectOption.loadDense = function loadDense(code) {
	var data=SelectOption.getDenseData();
	SelectOption.loadBaseCode(data, code);
};
SelectOption.getDense=function getDense(code){
	return SelectOption.getCodeName(SelectOption.getDenseData(),code);
};


/**
 * 应急求援 事故信息 状态
 * @return
 */
SelectOption.getEmsSucStateData = function getEmsSucStateData() {
   var data=new Array();
   data.push({code:1,name:'填报中'});
   data.push({code:2,name:'已上报'});
   data.push({code:3,name:'已处理'});
   data.push({code:4,name:'已结案'});
   return data;
};

SelectOption.loadEmsSucState = function loadEmsSucState(code) {
   var data=SelectOption.getEmsSucStateData();
   SelectOption.loadBaseCode(data, code);
};

SelectOption.getEmsSucState=function getEmsSucState(code){
   return SelectOption.getCodeName(SelectOption.getEmsSucStateData(),code);
};

/**
 * 应急预案附件类型
 * 附件类型（1：预案电子档 2：救援方案标绘图 3：组织机构图附件 4：通讯录附件 5：平面图附件 6：应急资源情况附件 7：工作流程附件 8：其他附件）
 */
SelectOption.getEmsPlanAttachTypeData = function getEmsPlanAttachTypeData() {
    var data=new Array();
    data.push({code:1,name:'预案电子档'});
    data.push({code:2,name:'救援方案标绘图'});
    data.push({code:3,name:'组织机构图附件'});
    data.push({code:4,name:'通讯录附件'});
    data.push({code:5,name:'平面图附件'});
    data.push({code:6,name:'应急资源情况附件'});
    data.push({code:7,name:'工作流程附件'});
    data.push({code:8,name:'其他附件'});
    return data;
};
SelectOption.loadEmsPlanAttachType = function loadEmsPlanAttachType(code) {
    var data=SelectOption.getEmsPlanAttachTypeData();
    SelectOption.loadBaseCode(data, code);
};
SelectOption.getEmsPlanAttachType=function getEmsPlanAttachType(code){
    if(code==null)
        return "";
    return SelectOption.getCodeName(SelectOption.getEmsPlanAttachTypeData(),code);
};


/**
 * 应急预案审核状态
 * 审核结果（1：审核同意 2：审核不同意）
 */
SelectOption.getEmsPlanAuditResultData = function getEmsPlanAuditResultData() {
    var data=new Array();
    data.push({code:1,name:'审核同意'});
    data.push({code:2,name:'审核不同意'});
    return data;
};
SelectOption.loadEmsPlanAuditResult = function loadEmsPlanAuditResult(code) {
    var data=SelectOption.getEmsPlanAuditResultData();
    SelectOption.loadBaseCode(data, code);
};
SelectOption.getEmsPlanAuditResult=function getEmsPlanAuditResult(code){
    if(code==null)
        return "";
    return SelectOption.getCodeName(SelectOption.getEmsPlanAuditResultData(),code);
};


/**
 * 职业健康 职业病防治 状态
 * @return
 */
SelectOption.getOchCureStateData = function getOchCureStateData() {
   var data=new Array();
   data.push({code:1,name:'填报中'});
   data.push({code:2,name:'已上报'});
   return data;
};

SelectOption.loadOchCureState = function loadOchCureState(code) {
   var data=SelectOption.getOchCureStateData();
   SelectOption.loadBaseCode(data, code);
};

SelectOption.getOchCureState=function getOchCureState(code){
   return SelectOption.getCodeName(SelectOption.getOchCureStateData(),code);
};
/**
 * 职业健康 职业病防治 防治类型
 */
SelectOption.getCureTypeData = function getCureTypeData() {
   var data=new Array();
   data.push({code:1,name:'预防'});
   data.push({code:2,name:'诊断'});
   data.push({code:3,name:'治疗'});
   return data;
};
SelectOption.loadCureType = function loadCureType(code) {
   var data=SelectOption.getCureTypeData();
   SelectOption.loadBaseCode(data, code);
};
SelectOption.getCureType=function getCureType(code){
   return SelectOption.getCodeName(SelectOption.getCureTypeData(),code);
};

/**
 * 职业健康  作业场所名称
 */
SelectOption.getOchWorkPlaceData = function getOchWorkPlaceData() {
   var data=new Array();
   data.push({code:1,name:'生产型作业场所'});
   data.push({code:2,name:'商业型作业场所'});
   data.push({code:3,name:'物流配送型作业场所'});
   data.push({code:4,name:'服务型作业场所'});
   data.push({code:5,name:'脑力活动作业场所'});
   data.push({code:6,name:'实验型作业场所'});
   return data;
};
SelectOption.loadOchWorkPlace = function loadOchWorkPlace(code) {
   var data=SelectOption.getOchWorkPlaceData();
   SelectOption.loadBaseCode(data, code);
};
SelectOption.getOchWorkPlace=function getOchWorkPlace(code){
   return SelectOption.getCodeName(SelectOption.getOchWorkPlaceData(),code);
};


/**
 * 职业健康 防护设备 状态 datatate
 */
/*OchDefend  */
SelectOption.getOchDefendDatatateData = function getOchDefendDatatateData() {
	var data=new Array();
	data.push({code:1,name:'已上报'});
	data.push({code:2,name:'未上报'});
	return data;
};

SelectOption.loadOchDefendDatatate = function loadOchDefendDatatate(code) {
	var data=SelectOption.getOchDefendDatatateData();
	SelectOption.loadBaseCode(data, code);
};

SelectOption.getOchDefendDatatate=function getOchDefendDatatate(code){
	return SelectOption.getCodeName(SelectOption.getOchDefendDatatateData(),code);
};


/**
 * 职业健康 防护设备 防护类型 detype
 * 1.正常运行 2.停止运行 3.维护中 4.报废
 */
SelectOption.getDefendTypeData = function getDefendTypeData() {
   var data=new Array();
   data.push({code:1,name:'正常运行'});
   data.push({code:2,name:'停止运行'});
   data.push({code:3,name:'维护中'});
   data.push({code:4,name:'报废'});
   return data;
};
SelectOption.loadDefendType = function loadDefendType(code) {
   var data=SelectOption.getDefendTypeData();
   SelectOption.loadBaseCode(data, code);
};
SelectOption.getDefendType=function getDefendType(code){
   return SelectOption.getCodeName(SelectOption.getDefendTypeData(),code);
};



SelectOption.getOchWorkerStateData = function getOchWorkerStateData() {
   var data=new Array();
   data.push({code:1,name:'填报中'});
   data.push({code:2,name:'已上报'});
   return data;
};

SelectOption.loadOchWorkerState = function loadOchWorkerState(code) {
   var data=SelectOption.getOchWorkerData();
   SelectOption.loadBaseCode(data, code);
};

SelectOption.getOchWorkerState=function getOchWorkerState(code){
   return SelectOption.getCodeName(SelectOption.getOchWorkerStateData(),code);
};

/**
 * app版本维护,是否发布
 */
SelectOption.getIsOnLineData = function getIsOnLineData() {
    var data=new Array();
    data.push({code:1,name:'发布'});
    data.push({code:0,name:'不发布'});
    return data;
};
SelectOption.loadIsOnLine = function loadIsOnLine(code) {
    var data=SelectOption.getIsOnLineData();
    SelectOption.loadBaseCode(data, code);
};
SelectOption.getIsOnLine=function getIsOnLine(code){
    if(code==null)
        return "";
    return SelectOption.getCodeName(SelectOption.getIsOnLineData(),code);
};
/**
 * app版本维护 app类型 
 */
SelectOption.getAppTypeData = function getAppTypeData() {
    var data=new Array();
    data.push({code:0,name:'android'});
    data.push({code:1,name:'ios'});
    return data;
};
SelectOption.loadAppType = function loadAppType(code) {
    var data=SelectOption.getAppTypeData();
    SelectOption.loadBaseCode(data, code);
};
SelectOption.getAppType=function getAppType(code){
    if(code==null)
        return "";
    return SelectOption.getCodeName(SelectOption.getAppTypeData(),code);
};

/**
 * 获取执法终端设备状态
 * @author 刘晓斌
 * @date 2017-5-3
 * @return
 */
SelectOption.getLawTerStatData = function getLawTerStatData() {
	return [
		{code: 0, name: "启用"},
		{code: 1, name: "禁用"}
	];
};
SelectOption.loadLawTerStat = function loadLawTerStat(code) {
	SelectOption.loadBaseCode(SelectOption.getLawTerStatData(), code);
};


/**
 * 任务事项类别
 * @return
 */
SelectOption.getTaskTypeData = function getTaskTypeData() {
	var data = new Array();
	data.push({code: "01", name: '检查'});
	data.push({code: "02", name: '复查'});
	data.push({code: "03", name: '取证'});
	data.push({code: "04", name: '告知'});
	data.push({code: "05", name: '催缴'});
	return data;
};
SelectOption.loadTaskType = function loadTaskType(code) {
	var data = SelectOption.getTaskTypeData();
	SelectOption.loadBaseCode(data, code);
};
SelectOption.getTaskType=function getTaskType(code){
	if(code==null)
		return "";
	return SelectOption.getCodeName(SelectOption.getTaskTypeData,code);
};

/**
 * 获取任务执行状态
 * @author 刘晓斌
 * @date 2017-5-11
 * @return
 */
SelectOption.getTaskStatData = function getTaskStatData() {
	return [
		{code: 1, name: "未开始"},
		{code: 2, name: "进行中"},
		{code: 3, name: "完成"}
	];
};
SelectOption.loadTaskStat = function loadTaskStat(code) {
	SelectOption.loadBaseCode(SelectOption.getTaskStatData(), code);
};

/************************************************* base start*******************************************************************************/
/**
 * 加载code
 * 
 * @param loadurl
 *            访问地址
 * @param code
 *            界面ID
 * @return
 */
SelectOption.loadBaseCodeFromDB = function loadBaseCodeFromDB(loadurl, code,jsonParam) {
	var value = $('#' + code).attr("selectvalue");
	$.ajax( {
		type : "post",
		cache : false,
		url : loadurl,
		data: jsonParam,
		dataType : 'json',
		success : function(json) {
			if (json.length > 0) {
				var o = new Option('请选择', '');
				$("#" + code)[0].options.add(o);
				for ( var i = 0; i < json.length; i++) {
					var t = new Option(json[i].name, json[i].code);
					if(json[i].attr){//附带属性
						$(t).attr("attr",json[i].attr);
					}
					$("#" + code)[0].options.add(t);
						if (value == json[i].code) {
							$("#" + code).val(value);
						}
				}
			}else{
			    var o = new Option('请选择', '');
			    $("#" + code)[0].options.add(o);
			}
		}
	});
};

/**
 * 加载code
 * 
 * @param data
 *            数据
 * @param code
 *            界面ID
 * @return
 */
SelectOption.loadBaseCode = function loadBaseCode(data, code) {
	var value = $('#' + code).attr("selectvalue");
	if (data.length > 0) {
		var o = new Option('请选择', '');
		$("#" + code)[0].options.add(o);
		for ( var i = 0; i < data.length; i++) {
			var t = new Option(data[i].name, data[i].code);
			$("#" + code)[0].options.add(t);
			if (value) {
				if (value == data[i].code) {
					$("#" + code).val(value);
				}
			}
		}
	}
};


SelectOption.getCodeName=function getCodeName(data,code){
	for(var i=0;i<data.length;i++){
		if(data[i].code==code){
			return data[i].name;
		}
	}
};





/************************************************* base end*******************************************************************************/
