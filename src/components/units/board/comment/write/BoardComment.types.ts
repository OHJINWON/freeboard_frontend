import { ChangeEvent } from "react"

export interface IBoardWriteCommentUIProps {
    onChangeWrite: (e: ChangeEvent<HTMLInputElement>) => void
    onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeContents: (e: ChangeEvent<HTMLTextAreaElement>) => void
    onClickComment: () => void
    contents: string
}

export interface Imyvariables {

}