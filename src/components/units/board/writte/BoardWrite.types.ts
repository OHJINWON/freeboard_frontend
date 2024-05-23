import { ChangeEvent } from "react"
import { IBoard, ICreateBoardInput, IMutationCreateBoardArgs, IMutationUpdateBoardArgs, IQuery, IUpdateBoardInput } from "../../../../commons/types/generated/types"

export interface BoardWriteProps {
    isEdit: boolean
    data?: Pick<IQuery, "fetchBoard">
}

export interface IBoardWritePropsUI {
    errName: string
    errPassword: string
    errTitle: string
    errContent: string
    name: string
    password: string
    title: string
    content: string
    onChangeName:(e: ChangeEvent<HTMLInputElement> ) => void 
    onChangePassword:(e: ChangeEvent<HTMLInputElement>) => void 
    onChangeTitle:(e: ChangeEvent<HTMLInputElement>) => void 
    onChangeContent:(e: ChangeEvent<HTMLTextAreaElement>) => void 
    onClickBtn:() => void 
    onClickUpdate:() => void 
    isEdit: boolean
    data?: Pick<IQuery, "fetchBoard">
    isActive: boolean
}
export interface ISubmitButtonProps{
    isActive: boolean
}