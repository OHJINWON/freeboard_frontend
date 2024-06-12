import { ChangeEvent, MouseEvent } from "react"
import { IBoardComment, IQuery } from "../../../../../commons/types/generated/types"

export interface IBoardCommentUI {
    data?: Pick<IQuery,"fetchBoardComments">
    onClickDelete: (e: MouseEvent<HTMLButtonElement>) => void
    onClickDeleteModal: (e: MouseEvent<HTMLButtonElement>) => void
    isOpenDeleteModal: boolean
    onChangeDeletePassword: (e:ChangeEvent<HTMLInputElement>) => void
}
