export declare type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends (infer U)[] ? DeepPartial<U>[] : T[P] extends number | string | boolean | undefined | null | Function | never ? T[P] : DeepPartial<T[P]>;
};
