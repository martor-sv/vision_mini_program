/**
 * url配置类
 *@since 3.0
 *@author kyy
 *@date 2019/9/23 9:41
 */
export default class UrlConfig {

  // public static environment = 'test';

  public static domain = `https://www.hy01.top`;

  // TODO 修改为对应接口路径
  public static baseUrl: string            = `${UrlConfig.domain}/api-website`;

  // 重点编辑推荐
  public static recommendedList            = `${UrlConfig.baseUrl}/editorRecommend/highly/list`;

  // 更多编辑推荐
  public static editorRecommendList       = `${UrlConfig.baseUrl}/editorRecommend/list`;

  //素材列表
  public static componentList              = `${UrlConfig.baseUrl}/website/component/audit/pass/list`;

  // 从精品添加教学内容
  public static curriculumContentAdd       = `${UrlConfig.baseUrl}/curriculum/content/add`;

  //素材详情
  public static componentDetail            = `${UrlConfig.baseUrl}/website/component/detail/`;

  // 素材浏览量
  public static componentVisit             = `${UrlConfig.baseUrl}/website/component/visit/`;

  //获取openId
  public static getOpenId                  = `${UrlConfig.baseUrl}/user/openid/`;

  //获取精品课程列表
  public static curriculumList             = `${UrlConfig.baseUrl}/website/curriculum/list`;

  //获取课程详情
  public static curriculumDetail           = `${UrlConfig.baseUrl}/website/curriculum/get/`;

  //登录
  public static login                      = `${UrlConfig.baseUrl}/api1/security/auth/oauth2/token`;

  //TODO 验证码登录
  public static verificationCodeLogin      = `${UrlConfig.baseUrl}`;

  //TODO 绑定手机号接口
  public static bindingPhone               = `${UrlConfig.baseUrl}`;

  //获取手机验证码
  public static verificationCode           = `${UrlConfig.baseUrl}/user/sms`;

  //忘记密码
  public static forgetPassword             = `${UrlConfig.baseUrl}/user/password/forget`;

  //创建课程
  public static createCurriculum           = `${UrlConfig.baseUrl}/curriculum/create`;

  // 创建子课时
  public static createSubCurriculum        = `${UrlConfig.baseUrl}/curriculum/sub/create`;

  // 子课程详情
  public static subCurriculumDetail        = `${UrlConfig.baseUrl}/website/curriculum/sub/get/`;

  //添加精品课程到我的课程
  public static addCurriculum              = `${UrlConfig.baseUrl}/curriculum/add`;

  //我的课程列表
  public static myCurriculumList           = `${UrlConfig.baseUrl}/curriculum/own/list`;

  //素材的收藏
  public static componentCollect           = `${UrlConfig.baseUrl}/component/collect/`;

  //素材是否收藏
  public  static componentCheck            = `${UrlConfig.baseUrl}/component/collect/check/`;

  //素材取消收藏
  public  static componentDiscollect       = `${UrlConfig.baseUrl}/component/discollect/`;

  // 素材收藏列表
  public static componentCollectList       = `${UrlConfig.baseUrl}/component/collect/list`;

  // 微课收藏列表
  public static microlectureCollectList    = `${UrlConfig.baseUrl}/microlecture/collect/list`;

  // 课件收藏列表
  public static coursewareCollectList      = `${UrlConfig.baseUrl}/courseware/collect/list`;

  // 课程收藏列表
  public static curriculumCollectList      = `${UrlConfig.baseUrl}/curriculum/collect/list`;

  //素材的相关推荐
  public static componentRelated           =`${UrlConfig.baseUrl}/component/{id}/related/list`;

  //轮播图
  public static advertisementList          =`${UrlConfig.baseUrl}/advertisement/list`;

  //课程重命名
  public static curriculumRename           =`${UrlConfig.baseUrl}/curriculum/content/rename`;

  //课程删除
  public static curriculumDelete           =`${UrlConfig.baseUrl}/curriculum/content/`;

  // 移动课程内容
  public static moveCurriculumContent      =`${UrlConfig.baseUrl}/curriculum/content/move`;

  //复制课程内容
  public static duplicateCurriculunContent =`${UrlConfig.baseUrl}/curriculum/content/duplicate`;

  // 课程收藏
  public static curriculumCollect          =`${UrlConfig.baseUrl}/curriculum/collect/`;

  // 取消课程收藏
  public static curriculumDiscollect       =`${UrlConfig.baseUrl}/curriculum/discollect/`;

  // 课程是否被收藏
  public static curriculumCheckCollect     =`${UrlConfig.baseUrl}/curriculum/collect/check/`;

  // 课件详情
  public static coursewareDetail           =`${UrlConfig.baseUrl}/website/courseware/detail/`;

  // 课件浏览量
  public static coursewareVisit            =`${UrlConfig.baseUrl}/courseware/visit/`;

  // 微课详情
  public static microlectureDetail         =`${UrlConfig.baseUrl}/microlecture/detail/`;

  // 意见反馈
  public static suggestion                 =`${UrlConfig.baseUrl}/website/suggestion`;
}
