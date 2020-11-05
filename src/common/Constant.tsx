export class Constant {

/// status 工单状态。unhandled未处置（工单创建完成），assigned已指派（操作员或系统指派），confirmed已接警（安保人员确认接警），
///                 arrived已到店（安保人员到店，但未提交任何处理信息），leaved已离店，reviewing待审核（安保人员提交了相关处理信息），
///                 completed已完成（审核完安保人员提交的处理信息，并确认该工单已处理结束），
///                 closed已关闭（已完成状态之后，允许在一定时间内提交补充资料，直到任务变为已关闭）

  public static STATUS_UNHANDLED = 'unhandled';
  public static STATUS_ASSIGNED = 'assigned';
  public static STATUS_CONFIRMED = 'confirmed';
  public static STATUS_ARRIVED = 'arrived';
  public static STATUS_HANDLING = 'handling';
  public static STATUS_LEFT = 'left';
  public static STATUS_REVIEWING = 'reviewing';
  public static STATUS_COMPLETED = 'completed';
  public static STATUS_CLOSED = 'closed';

  /// action 执行的工单操作。assign指派，removeAssignent移除指派，confirmJob接警，
///                       arrived到店（APP根据位置自动判断），confirmArrived确认到店（人员通过APP确认），leaved离店（APP自动判断）
///                       confirmLeaved确认离店（人员通过APP确认）submit提交处理资料，accept接受处理结果，
///                       close关闭工单（超期自动关闭，或操作员强制关闭）

  static  EVENT_ACTION_ASSIGNED = "assignJob";
  static  EVENT_ACTION_REMOVEASSIGN = "removeAssignent";
  static  EVENT_ACTION_APPRECEIVEJOB = "appReceiveJob";
  static  EVENT_ACTION_CONFIRM = "confirmJob";
  static  EVENT_ACTION_APPARRIVED = "appArriveShop";
  static  EVENT_ACTION_CONFIRMARRIVED = "confirmArriveShop";
  static  EVENT_ACTION_APPLEAVESHOP = "appLeaveShop";
  static  EVENT_ACTION_CONFIRMLEAVED = "confirmLeaveShop";
  static  EVENT_ACTION_SUBMITDATA = "submitData";
  static  EVENT_ACTION_ACCEPTDATA = "acceptData";
  static  EVENT_ACTION_REJECTDATA = "rejectData";
  static  EVENT_ACTION_COMPLETEJOB = "completeJob";
  static  EVENT_ACTION_CLOSEJOB = "closeJob";



  public static token = 'token'
  public static userInfo = 'userInfo'
  public static refreshToken = 'refreshToken'

  public  static  getCurrentStatusName(status: String): String {
    switch (status) {
      case Constant.STATUS_CLOSED : {
        return "已关闭"
      }
      case Constant.STATUS_COMPLETED : {
        return "已完成"
      }
      case  Constant.STATUS_CONFIRMED: {
        return "已接警"
      }
      case  Constant.STATUS_UNHANDLED, Constant.STATUS_ASSIGNED: {
        return "待处理"
      }
      default: {
        return ""
      }
    }
  }

}
