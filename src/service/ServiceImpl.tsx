import * as Taro from "@tarojs/taro";
import BaseServiceImpl from "./BaseServiceImpl";
import {Service} from "./Service";
import UrlConfig from "../config/UrlConfig";


export default class ServiceImpl extends BaseServiceImpl implements Service {
  private static serviceImpl: ServiceImpl;

  private constructor() {
    super();
  }

  public static getInstance(): ServiceImpl {
    if (ServiceImpl.serviceImpl == null) {
      ServiceImpl.serviceImpl = new ServiceImpl();
    }
    return ServiceImpl.serviceImpl;
  }


  recommendedList() {
    return new Promise((resolve, reject) => {
      const option: any = this.getOption();
      option.url = UrlConfig.recommendedList;
      Taro.request(option).then((res) => {
        if (res.statusCode < 300) {
          resolve(res.data);
        } else {
          reject(res.data.message);
        }
      });
    })
  }

  // 获取更多编辑推荐
  getEditorRecommendList() {
    return new Promise((resolve, reject) => {
      const option: any = this.getOption();
      option.url = UrlConfig.editorRecommendList;
      Taro.request(option).then((res) => {
        if (res.statusCode < 300) {
          resolve(res.data);
        } else {
          reject(res.data.message);
        }
      });
    })
  }

  // @ts-ignore
  componentList(start, mediaType){
    return new Promise((resolve, reject) => {
      const option: any = this.getOption();
      option.url = UrlConfig.componentList
      option.data = {
        start    : start,
        mediaType: mediaType
      }
      Taro.request(option).then((res) => {
        if (res.statusCode < 300) {
          resolve(res.data);
        } else {
          reject(res.data.message);
        }
      });
    })
  }

  curriculumContentAdd(parentId, id, fileType) {
    console.log(parentId)
    return new Promise((resolve, reject) => {
      const option: any = this.getOption();
      option.url = UrlConfig.curriculumContentAdd
      option.method = 'POST'
      option.data = {
        parentId: parentId,
        id: id,
        fileType: fileType
      }

      Taro.request(option).then((res) => {
        if (res.statusCode < 300) {
          resolve(res.data);
        } else {
          reject(res.data.message);
        }
      });
    })
  }

  componentDetail(componentId: string) {
    return new Promise((resolve, reject) => {
      const option: any = this.getOption();
      option.url = UrlConfig.componentDetail + componentId
      Taro.request(option).then((res) => {
        if (res.statusCode < 300) {
          resolve(res.data);
        } else {
          reject(res.data.message);
        }
      });
    })
  }

  // 获取素材浏览量
  componentVisit(componentId) {
    return new Promise((resolve, reject) => {
      const option: any = this.getOption();
      option.url = UrlConfig.componentVisit + componentId
      option.method = 'POST'

      Taro.request(option).then((res) => {
        if (res.statusCode < 300) {
          resolve(res.data);
        } else {
          reject(res.data.message);
        }
      });
    })
  }

  curriculumList() {
    return new Promise((resolve, reject) => {
      const option: any = this.getOption();
      option.url = UrlConfig.curriculumList
      Taro.request(option).then((res) => {
        if (res.statusCode < 300) {
          resolve(res.data);
        } else {
          reject(res.data.message);
        }
      });
    })
  }

  curriculumDetail(curriculumId: string) {
    return new Promise((resolve, reject) => {
      const option: any = this.getOption();
      option.url = UrlConfig.curriculumDetail + curriculumId
      Taro.request(option).then((res) => {
        if (res.statusCode < 300) {
          resolve(res.data);
        } else {
          reject(res.data.message);
        }
      });
    })
  }

  login(account: string, pwd: string) {
    return new Promise((resolve) => {
      const option: any = this.getOption();
      option.url = UrlConfig.login
      option.method = 'POST'
      option.data = {
        account: account,
        password: pwd,
      }
      Taro.request(option).then((res) => {
        if (res.statusCode < 300) {
          resolve(res.data);
        } else {
          resolve(res);
        }
      });
    })
  }


  /**
   *
   * @param phone
   * @param type (1：忘记密码, 4:注册)
   */
  verificationCode(phone: string, type: string) {
    return new Promise((resolve) => {
      const option: any = this.getOption();
      option.url = UrlConfig.verificationCode;
      option.data = {
        phone: phone,
        type: type,
      };

      Taro.request(option).then((res) => {
        resolve(res);
      });
    })

  }

  updatePassword(phone: string, code: string, password: string, password_confirm: string) {
    return new Promise((resolve) => {
      const option: any = this.getOption();
      option.url = UrlConfig.forgetPassword;
      option.method = 'POST'
      option.data = {
        phone: phone,
        code: code,
        password: password,
        password_confirm: password_confirm,
      };

      Taro.request(option).then((res) => {
        resolve(res);
      });
    })
  }

  verificationCodeLogin(phone: string, code: number) {
    console.log('--------------------------');
    console.log(phone + code);
    console.log('--------------------------');


  }

  bindingPhoneNumber(phone: string, code: number) {
    console.log('--------------------------');
    console.log(phone + code);
    console.log('--------------------------');

  }

  // 创建课程
  createCurriculum(title: string) {
    console.log(title);
    return new Promise((resolve, reject) => {
      const option: any = this.getOption();
      option.url = UrlConfig.createCurriculum;
      option.method = 'POST'
      option.data = {
        title: title
      };

      Taro.request(option).then((res) => {
        if (res.statusCode < 300) {
          resolve(res.data);
        } else {
          reject(res.data.message);
        }
      });
    })
  }

  // 创建子课时
  createSubCurriculum(parentId, title) {
    console.log(title);
    return new Promise((resolve, reject) => {
      const option: any = this.getOption();
      option.url = UrlConfig.createSubCurriculum;
      option.method = 'POST'
      option.data = {
        parentId: parentId,
        title   : title
      };

      Taro.request(option).then((res) => {
        if (res.statusCode < 300) {
          resolve(res.data);
        } else {
          reject(res.data.message);
        }
      });
    })
  }

  // 获取子课程详情
  getSubCurriculunDetail(id) {
    console.log(id);
    return new Promise((resolve, reject) => {
      const option: any = this.getOption();
      option.url = UrlConfig.subCurriculumDetail + id;

      Taro.request(option).then((res) => {
        if (res.statusCode < 300) {
          resolve(res.data);
        } else {
          reject(res.data.message);
        }
      });
    })
  }


  myCurriculumList() {
    console.log("myCurriculumList");
    return new Promise((resolve, reject) => {
      const option: any = this.getOption();
      option.url = UrlConfig.myCurriculumList;

      Taro.request(option).then((res) => {
        if (res.statusCode < 300) {
          resolve(res.data);
        } else {
          reject(res.data.message);
        }
      });
    })

  }

  componentCheck(id: string) {
    return new Promise((resolve, reject) => {
      const option: any = this.getOption();
      option.url = UrlConfig.componentCheck + id;

      Taro.request(option).then((res) => {
        if (res.statusCode < 300) {
          resolve(res.data);
        } else {
          reject(res.data.message);
        }
      });
    })
  }

  // 素材收藏
  componentCollect(id: string) {
    console.log(id);
    return new Promise((resolve, reject) => {
      const option: any = this.getOption();
      option.url = UrlConfig.componentCollect + id;
      option.method = 'POST';
      Taro.request(option).then((res) => {
        if (res.statusCode < 300) {
          resolve(res.data);
        } else {
          reject(res.data.message);
        }
      });
    })

  }

  // 素材取消收藏
  componentDiscollect(id: string) {
    return new Promise((resolve, reject) => {
      const option: any = this.getOption();
      option.url = UrlConfig.componentDiscollect + id;
      option.method = 'DELETE'

      Taro.request(option).then((res) => {
        if (res.statusCode < 300) {
          resolve(res.data);
        } else {
          reject(res.data.message);
        }
      });
    });
  }

  advertisementList() {
    console.log('advertisementList');
    return new Promise((resolve, reject) => {
      const option: any = this.getOption();
      option.url = UrlConfig.advertisementList;

      Taro.request(option).then((res) => {
        if (res.statusCode < 300) {
          resolve(res.data);
        } else {
          reject(res.data.message);
        }
      });
    })

  }

  addCurriculum(id: string) {
    console.log(id);
    return new Promise((resolve, reject) => {
      const option: any = this.getOption();
      option.url = UrlConfig.addCurriculum;
      option.method = 'POST';
      option.data = {
        id: id
      };

      Taro.request(option).then((res) => {
        if (res.statusCode < 300) {
          resolve(res.data);
        } else {
          reject(res.data.message);
        }
      });
    })

  }

  componentRelated(id: string) {
    console.log('--------------------------');
    console.log(id);
    console.log('--------------------------');

    return new Promise((resolve, reject) => {
      const option: any = this.getOption();
      option.url = UrlConfig.componentRelated.replace('{id}', id);
      Taro.request(option).then((res) => {
        if (res.statusCode < 300) {
          resolve(res.data);
        } else {
          reject(res.data.message);
        }
      });
    });
  }

  curriculumDelete(id: string) {
    console.log(id);
    return new Promise((resolve, reject) => {
      const option: any = this.getOption();
      option.url = UrlConfig.curriculumDelete + id;
      option.method = 'DELETE';

      Taro.request(option).then((res) => {
        if (res.statusCode < 300) {
          resolve(res.data);
        } else {
          reject(res.data.message);
        }
      });
    })
  }

  curriculumRename(id: string, title: string) {
    return new Promise((resolve, reject) => {
      const option: any = this.getOption();
      option.url = UrlConfig.curriculumRename;
      option.method = 'POST'
      option.data = {
        id: id,
        title: title
      };

      Taro.request(option).then((res) => {
        if (res.statusCode < 300) {
          resolve(res.data);
        } else {
          reject(res.data.message);
        }
      });
    })
  }


  // 移动课程内容
  moveCurriculumContent(id, folderId) {
    return new Promise((resolve, reject) => {
      const option: any = this.getOption();
      option.url = UrlConfig.moveCurriculumContent
      option.method = 'POST'
      option.data = {
        id: id,
        folderId: folderId
      }

      Taro.request(option).then((res) => {
        if (res.statusCode < 300) {
          resolve(res.data);
        } else {
          reject(res.data.message);
        }
      });
    })
  }


  // 复制课程内容
  duplicateCurriculunContent(id, title) {
    return new Promise((resolve, reject) => {
      const option: any = this.getOption();
      option.url = UrlConfig.duplicateCurriculunContent
      option.method = 'POST'
      option.data = {
        id      : id,
        title   : title
      }

      Taro.request(option).then((res) => {
        if (res.statusCode < 300) {
          resolve(res.data);
        } else {
          reject(res.data.message);
        }
      });
    })
  }

  // 课程收藏
  curriculumCollect(id) {
    return new Promise((resolve, reject) => {
      const option: any = this.getOption();
      option.url = UrlConfig.curriculumCollect + id;
      option.method = 'POST';

      Taro.request(option).then((res) => {
        if (res.statusCode < 300) {
          resolve(res.data);
        } else {
          reject(res.data.message);
        }
      });
    })
  }

  // 取消课程收藏
  curriculumDiscollect(id) {
    return new Promise((resolve, reject) => {
      const option: any = this.getOption();
      option.url = UrlConfig.curriculumDiscollect + id;
      option.method = 'DELETE'

      Taro.request(option).then((res) => {
        if (res.statusCode < 300) {
          resolve(res.data);
        } else {
          reject(res.data.message);
        }
      });
    })
  }

  // check课程是否被收藏
  checkCurriculumCollect(id) {
    return new Promise((resolve, reject) => {
      const option: any = this.getOption();
      option.url = UrlConfig.curriculumCheckCollect + id;

      Taro.request(option).then((res) => {
        if (res.statusCode < 300) {
          resolve(res.data);
        } else {
          reject(res.data.message);
        }
      });
    })
  }


  // 素材收藏列表
  componentCollectList(pageNo) {
    return new Promise((resolve, reject) => {
      const option: any = this.getOption();
      option.url = UrlConfig.componentCollectList;
      option.data = {pageNo: pageNo};

      Taro.request(option).then((res) => {
        if (res.statusCode < 300) {
          resolve(res.data);
        } else {
          reject(res.data.message);
        }
      });
    });
  }

  //课件收藏列表
  coursewareCollectList(pageNo) {
    return new Promise((resolve, reject) => {
      const option: any = this.getOption();
      option.url = UrlConfig.coursewareCollectList;
      option.data = {pageNo: pageNo};

      Taro.request(option).then((res) => {
        if (res.statusCode < 300) {
          resolve(res.data);
        } else {
          reject(res.data.message);
        }
      });
    });
  }

  //微课收藏列表
  microlectureCollectList(pageNo) {
    return new Promise((resolve, reject) => {
      const option: any = this.getOption();
      option.url = UrlConfig.microlectureCollectList;
      option.data = {pageNo: pageNo};

      Taro.request(option).then((res) => {
        if (res.statusCode < 300) {
          resolve(res.data);
        } else {
          reject(res.data.message);
        }
      });
    });
  }

  // 课程收藏列表
  curriculumCollectList(pageNo) {
    return new Promise((resolve, reject) => {
      const option: any = this.getOption();
      option.url = UrlConfig.curriculumCollectList;
      option.data = {pageNo: pageNo};
      Taro.request(option).then((res) => {
        if (res.statusCode < 300) {
          resolve(res.data);
        } else {
          reject(res.data.message);
        }
      });
    });
  }

  // 课件详情
  coursewareDetail(code, version) {
    return new Promise((resolve, reject) => {
      const option: any = this.getOption();
      option.url = UrlConfig.coursewareDetail + code + '/' + version;
      Taro.request(option).then((res) => {
        if (res.statusCode < 300) {
          resolve(res.data);
        } else {
          reject(res.data.message);
        }
      });
    });
  }

  coursewareVisit(code) {
    return new Promise((resolve, reject) => {
      const option: any = this.getOption();
      option.url = UrlConfig.coursewareVisit + code;
      option.method = 'POST';

      Taro.request(option).then((res) => {
        if (res.statusCode < 300) {
          resolve(res.data);
        } else {
          reject(res.data.message);
        }
      });
    });
  }



  // 微课详情
  microlectureDetail(id) {
    return new Promise((resolve, reject) => {
      const option: any = this.getOption();
      option.url = UrlConfig.microlectureDetail + id;
      Taro.request(option).then((res) => {
        if (res.statusCode < 300) {
          resolve(res.data);
        } else {
          reject(res.data.message);
        }
      });
    })
  };

  // 意见反馈
  feedback(suggestion: string, contact: string) {
    return new Promise((resolve) => {
      const option: any = this.getOption();
      option.url  = UrlConfig.suggestion;
      option.data = {suggestion: suggestion, contact: contact};
      option.method = 'POST';

      Taro.request(option).then((res) => {
        resolve(res);
      });
    })
  }

};


