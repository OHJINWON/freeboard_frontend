import { ChangeEvent } from "react"
import { IBoard, ICreateBoardInput, IMutationCreateBoardArgs, IMutationUpdateBoardArgs, IQuery, IUpdateBoardInput } from "../../../../commons/types/generated/types"
import { Address } from "react-daum-postcode"


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
    onClickAddressSearch: () => void
    isOpen: boolean
    onCompleteAddreSearch(data:Address): void
    onToggleModal: () => void
    address: string
    onChangeAddressDetail: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeYoutubeUrl: (e: ChangeEvent<HTMLInputElement>) => void
    zipcode: string
}

// export interface IAddress {
//     address: string
//     zonecode: string
// }

export interface ISubmitButtonProps{
    isActive: boolean
}