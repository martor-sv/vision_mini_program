
export  class Constant {

/// status 工单状态。unhandled未处置（工单创建完成），assigned已指派（操作员或系统指派），confirmed已接警（安保人员确认接警），
///                 arrived已到店（安保人员到店，但未提交任何处理信息），leaved已离店，reviewing待审核（安保人员提交了相关处理信息），
///                 completed已完成（审核完安保人员提交的处理信息，并确认该工单已处理结束），
///                 closed已关闭（已完成状态之后，允许在一定时间内提交补充资料，直到任务变为已关闭）

 public static  STATUS_UNHANDLED = 'unhandled';
 public static  STATUS_ASSIGNED = 'assigned';
 public static  STATUS_CONFIRMED = 'confirmed';
 public static  STATUS_ARRIVED = 'arrived';
 public static  STATUS_HANDLING = 'handling';
 public static  STATUS_LEFT = 'left';
 public static  STATUS_REVIEWING = 'reviewing';
 public static  STATUS_COMPLETED = 'completed';
 public static  STATUS_CLOSED = 'closed';




  public  static  token = 'token'
  public  static  userInfo = 'userInfo'
  public  static  refreshToken = 'refreshToken'

}
