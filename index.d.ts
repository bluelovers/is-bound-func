declare let _self: (<T extends Function>(fn: T, chkLevel?: number) => number) & {
    isBoundFunc: <T extends Function>(fn: T, chkLevel?: number) => number;
    default: <T extends Function>(fn: T, chkLevel?: number) => number;
    SUPPORT_FUNC_NAME: boolean;
    SUPPORT_FUNC_NAME_BOUND: boolean;
};
export = _self;
