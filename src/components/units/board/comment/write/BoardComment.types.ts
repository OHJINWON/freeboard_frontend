import React, { ChangeEvent } from "react"

export interface IBoardWriteCommentUIProps {
    onChangeWrite: (e: ChangeEvent<HTMLInputElement>) => void
    onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeContents: (e: ChangeEvent<HTMLTextAreaElement>) => void
    onClickComment: () => void
    contents: string
    handleChangeRate:(value: number) => void
    rateValue: number
}

export interface Imyvariables {

}