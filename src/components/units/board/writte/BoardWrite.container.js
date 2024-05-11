import { useState } from "react"
import { useMutation } from "@apollo/client"
import { useRouter } from "next/router"
import BoardWriteUI from "./BoardWrite.presenter"
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWrite.queries'

export default function BoardWrite({isEdit, data}) {
    
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
    const [updateBoard] = useMutation(UPDATE_BOARD)

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
                alert("등록하셨습니다.")
                console.log(result)
                router.push(`./` + result.data.createBoard._id)
            } catch (error) {
                alert(error.message)
            }
        }
    }

    const onClickUpdate = async() => {
        // retutn는 함수 종료 또는 값을 반환
        // 리팩토링: 결과는 똑같은데, 내용이 더 쉬워짐
        // early-exit 없으면 return으로 종료
        if(!title && !content) {
            alert("수정한 내용이 없습니다.")
            return;
        }
        if(!password) {
            alert("비밀번호를 입력해주세요.")
            return;
        }
        if(password) {
            const updateBoardInput={}
    
            if (title) updateBoardInput.title = title
            if (content) updateBoardInput.contents = content
            try {
                const result = await updateBoard({
                    variables: {
                        boardId: router.query.id,
                        password: password,
                        updateBoardInput
                    }
                })
                console.log("result 수정", result)
                alert("수정하셨습니다.")
                router.push(`/boards/${router.query.id}`)
            } catch (error) {
                console.log(error.message)
            }
        }
        
    }

    return <BoardWriteUI 
        isEdit={isEdit} 
        data={data} 
        name={name} 
        password={password} 
        title={title} 
        content={content} 
        onChangeName={onChangeName} 
        onChangePassword={onChangePassword} 
        onChangeTitle={onChangeTitle} 
        onChangeContent={onChangeContent} 
        onClickBtn={onClickBtn} 
        onClickUpdate={onClickUpdate} 
        errName={errName} 
        errPassword={errPassword} 
        errTitle={errTitle} 
        errContent={errContent}/>
}