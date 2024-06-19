import React, { ChangeEvent } from "react"

export interface IBoardWriteCommentUIProps {
    onChangeWrite: (e: ChangeEvent<HTMLInputElement>) => void
    onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeContents: (e: ChangeEvent<HTMLTextAreaElement>) => void
    onClickComment: () => void
    writer: string
    password: string
    contents: string
    handleChangeRate:(value: number) => void
    rateValue: number
    textareaCount: number
}