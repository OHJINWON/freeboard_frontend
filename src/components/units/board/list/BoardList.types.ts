import { MouseEvent } from "react";
import { IBoard, IQuery } from "../../../../commons/types/generated/types";

export interface IBoardListUI {
    data?: Pick<IQuery, "fetchBoards">
    onClickDetail: (e: MouseEvent<HTMLTableRowElement>) => void
    onClickMoveToBoardNew: () => void
    
}