const GLOBAL_EASYTAG_TS = String(Date.now());

export function makeEasyTag(relativePath) {
  const value = `${GLOBAL_EASYTAG_TS}-${relativePath}`;
  return function easyTag() {
    return { 'data-easytag': value };
  };
}

export const easytagTimestamp = GLOBAL_EASYTAG_TS;

export default makeEasyTag;
