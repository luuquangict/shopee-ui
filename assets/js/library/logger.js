function logger(msg, type = TYPE_LOG) {
  console[type](msg);
}

export const TYPE_LOG = "log";
export const TYPE_WANRING = "warn";
export const TYPE_ERROR = "error";

export default logger;
