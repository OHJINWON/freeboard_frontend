import { useState } from "react"
import { useMutation } from "@apollo/client"
import { useRouter } from "next/router"
import BoardWriteUI from "./BoardWrite.presenter"
import { CREATE_BOARD } from './BoardWrite.queries'

export default function BoardWrite() {
    
    const [name, setName] = useState("")
    const [errName, setErrName] = useState("")
    const [password, setPassword] = useState("")
    const [errPassword, setErrPasswrod] = useState("")
    const [title, setTitle] = useState("")
    const [errTitle, setErrTitle] = useState("")
    const [content, setContent] = useState("")
    const [errContent, setErrContent] = useState("")

    const router = useRouter()

    const onChangeName = (e) => {
        setName(e.target.value)
        if(name !== "") {
            setErrName("")
        }
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
        if(password !== "") {
            setErrPasswrod("")
        }
    }

    const onChangeTitle = (e) => {
        setTitle(e.target.value)
        if(title !== "") {
            setErrTitle("")
        }
    }

    const onChangeContent = (e) => {
        setContent(e.target.value)
        if(content !== "") {
            setErrContent("")
        }
    }

    const [createBoard] = useMutation(CREATE_BOARD)

    const onClickBtn = async () => {
        if(!name) {
            setErrName("작성자를 작성해주세요.")
        }
        if(!password) {
            setErrPasswrod("비밀번호를 입력해주세요.")
        }
        if(!title) {
            setErrTitle("제목을 입력해주세요.")
        }
        if(!content) {
            setErrContent("내용을 입력해주세요.")
        }
        if(name && password && title && content) {
            try {
                const result = await createBoard({
                    variables:{
                        createBoardInput:{
                            writer: name,
                            password,
                            title,
                            contents: content
                            // key==value 같은면 shorthand-propety로 인해서 숨길수 있다.
                        }
                    }
                })
                console.log(result)
                alert("등록하셨습니다.")
                router.push(`./` + result.data.createBoard._id)
            } catch (error) {
                alert(error.message)
            }
        }
    }

    return <BoardWriteUI name={name} password={password} title={title} content={content} onChangeName={onChangeName} onChangePassword={onChangePassword} onChangeTitle={onChangeTitle} onChangeContent={onChangeContent} onClickBtn={onClickBtn} errName={errName} errPassword={errPassword} errTitle={errTitle} errContent={errContent}/>
}