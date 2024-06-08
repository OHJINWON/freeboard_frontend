import { ChangeEvent, useState } from "react"
import { useMutation } from "@apollo/client"
import { useRouter } from "next/router"
import BoardWriteUI from "./BoardWrite.presenter"
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWrite.queries'
import { IMutation, IMutationCreateBoardArgs, IMutationUpdateBoardArgs, IUpdateBoardInput } from "../../../../commons/types/generated/types"
import { IAddress, BoardWriteProps } from "./BoardWrite.types"
import { Address } from "react-daum-postcode"



export default function BoardWrite(props: BoardWriteProps) {
    const router = useRouter()
    const [isActive, setActive] = useState(false)

    const [name, setName] = useState<string>("")
    const [errName, setErrName] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [errPassword, setErrPasswrod] = useState<string>("")
    const [title, setTitle] = useState<string>("")
    const [errTitle, setErrTitle] = useState<string>("")
    const [content, setContent] = useState<string>("")
    const [errContent, setErrContent] = useState<string>("")

    const [isOpen, setIsopen] = useState<boolean>(false)
    const [address, setAddress] = useState<IAddress>(
        {
            address: "",
            zonecode: "",
        }
    )
    const [addressDetail, setAddressDetail] = useState<string>("")
    const [youtubeUrl, setYoutubeUri] = useState<string>("")
    const [createBoard] = useMutation<Pick<IMutation, "createBoard">, IMutationCreateBoardArgs>(CREATE_BOARD)
    const [updateBoard] = useMutation<Pick<IMutation, "updateBoard">, IMutationUpdateBoardArgs>(UPDATE_BOARD)    

    const onChangeName = (e:ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
        if(name !== "") {
            setErrName("")
        }
    }

    const onChangePassword = (e:ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
        if(password !== "") {
            setErrPasswrod("")
        }
    }

    const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        if(title !== "") {
            setErrTitle("")
        }
    }

    const onChangeContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value)
        if(content !== "") {
            setErrContent("")
        }
    }

    const onClickModal = () => {
        setIsopen((isopen) => !isopen)
    }

    const onToggleModal = (): void => {
        setIsopen((prev)=> !prev)
    }

    const handleModal = (data: Address) => {
        console.log("Address", data)
        setAddress({
            address: data.address,
            zonecode: data.zonecode,
        })
        onToggleModal()
    }

    const onChangeAddressDetail = (e: ChangeEvent<HTMLInputElement>):void => {
        setAddressDetail(e.target.value)
    }

    const onChangeYoutubeUrl = (e: ChangeEvent<HTMLInputElement>): void => {
        setYoutubeUri(e.target.value)
    }
    
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
                            contents: content,
                            boardAddress: {
                                zipcode: address.zonecode,
                                address: address.address,
                                addressDetail: addressDetail
                            },
                            youtubeUrl
                            
                            // key==value 같은면 shorthand-propety로 인해서 숨길수 있다.
                        }
                    }
                })
                // https://www.youtube.com/watch?v=wv6lh8clJ-M
                alert("등록하셨습니다.")
                console.log(result)
                router.push(`./` + result.data?.createBoard._id)
            } catch (error) {
                alert(error)
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
            const updateBoardInput: IUpdateBoardInput = {}
            
            const updateAddress = {
                zipcode: address.zonecode,
                address: address.address,
                addressDetail: addressDetail
            }
            console.log("updateAddress", updateAddress)
            if (title) updateBoardInput.title = title
            if (content) updateBoardInput.contents = content
            if (address) updateBoardInput.boardAddress = updateAddress
            if (youtubeUrl) updateBoardInput.youtubeUrl = youtubeUrl
            try {
                if(typeof router.query.id !== "string") {
                    alert("시스템에 문제가 있습니다.")
                    return
                }
                const result = await updateBoard({
                    variables: {
                        boardId: router.query.id,
                        password,
                        updateBoardInput
                    },
                })
                console.log("result 수정", result)
                alert("수정하셨습니다.")
                router.push(`/boards/${router.query.id}`)
            } catch (error) {
                if(error instanceof Error) alert(error.message)
            }
        }
        
    }

    return <BoardWriteUI 
        isEdit={props.isEdit} 
        isActive= {isActive}
        data={props.data} 
        name={name} 
        password={password} 
        title={title} 
        content={content} 
        address={address}
        onChangeName={onChangeName} 
        onChangePassword={onChangePassword} 
        onChangeTitle={onChangeTitle} 
        onChangeContent={onChangeContent} 
        onClickBtn={onClickBtn} 
        onClickUpdate={onClickUpdate} 
        onClickModal={onClickModal}
        isOpen={isOpen}
        handleModal={handleModal}
        onToggleModal={onToggleModal}
        errName={errName} 
        errPassword={errPassword}
        errTitle={errTitle} 
        errContent={errContent}
        onChangeAddressDetail={onChangeAddressDetail}
        addressDetail={addressDetail}
        onChangeYoutubeUrl={onChangeYoutubeUrl}
        youtubeUrl={youtubeUrl}
        />
}