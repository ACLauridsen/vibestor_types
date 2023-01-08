import { NextFunction, Request, Response } from "express";
export declare type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends (infer U)[] ? DeepPartial<U>[] : T[P] extends number | string | boolean | undefined | null | Function | never ? T[P] : DeepPartial<T[P]>;
};
export declare type Nullable<T> = T | null | undefined;
export interface IDataSourceBase {
    tracks(req: Request, res: Response, next: NextFunction): Promise<void>;
    genres(req: Request, res: Response, next: NextFunction): Promise<void>;
}
