import { MouseEvent } from "react"
import { IBoard, IQuery } from "../../../../commons/types/generated/types"

export interface IBoardDetileUI {
    data?: Pick<IQuery, "fetchBoard">
    show: boolean
    onClickMove: () => void
    onMouseOverLocation: (e: MouseEvent<HTMLElement>) => void
    onClickDelete: () => void
    videoId: string
    onClickListMove: () => void
}