import { useState } from "react"
import styles from "./Board.module.css"

export default function BoardInsertPage() {
    
    const [name, setName] = useState("")
    const [errName, setErrName] = useState("")
    const [password, setPassword] = useState("")
    const [errPassword, setErrPasswrod] = useState("")
    const [title, setTitle] = useState("")
    const [errTitle, setErrTitle] = useState("")
    const [content, setContent] = useState("")
    const [errContent, setErrContent] = useState("")

    function onChangeName(e) {
        setName(e.target.value)
        if(name !== "") {
            setErrName("")
        }
    }

    function onChangePassword(e) {
        setPassword(e.target.value)
        if(password !== "") {
            setErrPasswrod("")
        }
    }

    function onChangeTitle(e) {
        setTitle(e.target.value)
        if(title !== "") {
            setErrTitle("")
        }
    }

    function onChangeContent(e) {
        setContent(e.target.value)
        if(content !== "") {
            setErrContent("")
        }
    }

    function onClickBtn() {
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
            alert("게시글이 등록되었습니다.")
        }
    }

    return (
        <div className={styles.board_box}>
            {/* 밑에 */}
            <div className={styles.board}>
                <div className={styles.board_content}>
                    <div className={styles.board_title}>
                        <p>게시물 등록</p>
                    </div>
                    <div className={styles.user}>
                        <div className={styles.name}>
                            <label htmlFor="name">작성자</label>
                            <input className={styles.boardInput} id="name" type="text" placeholder="이름을 적어주세요" value={name} onChange={onChangeName}/>
                            <p className={styles.errorMsg}>{errName}</p>
                        </div>
                        <div className={styles.password}>
                            <label htmlFor="password">비밀번호</label>
                            <input className={styles.boardInput} id="password" type="password" placeholder="비밀번호를 입력해주세요" value={password} onChange={onChangePassword}/>
                            <p className={styles.errorMsg}>{errPassword}</p>
                        </div>
                    </div>
                    <div className={styles.title}>
                        <p className={styles.title_01}>제목</p>
                        <input className={styles.boardInput} type="text" placeholder="제목을 입력해주세요" value={title} onChange={onChangeTitle}/>
                        <p className={styles.errorMsg}>{errTitle}</p>
                    </div>
                    <div className={styles.content}>
                        <p>내용</p>
                        <textarea placeholder="내용을 작성해주세요" value={content} onChange={onChangeContent}></textarea>
                        <p className={styles.errorMsg}>{errContent}</p>
                    </div>
                    <div className={styles.address_box}>
                        <p>주소</p>
                        <div className={styles.address}>
                            <input className={styles.address_number} type="number" readOnly/>
                            <div>
                                <input className={styles.address_serch_btn} type="button" value="우편번호 검색"/>
                            </div>
                        </div>
                        <div className={styles.address_box_input}>    
                            <input type="text" readOnly/>
                            <input type="text" readOnly/>
                        </div>
                    </div>
                    <div className={styles.youtube_box}>
                        <p>유튜브</p>
                        <input type="text" placeholder="링크를 작성해주세요"/>
                    </div>
                    <div className={styles.flie_box}>
                        <p>사진 첨부</p>
                        <div className={styles.file_box_upload}>
                            <input type="file"/>
                            <input type="file"/>
                            <input type="file"/>
                        </div>
                    </div>
                    <div className={styles.main_set}>
                        <p>메인 설정</p>
                        <div className={styles.main_set_content}>
                            <input type="radio" id="유튜브"/>
                            <label htmlFor="유튜브">유튜브</label>
                            <input type="radio" id="사진"/>
                            <label htmlFor="사진">사진</label>
                        </div>
                    </div>
                    <div className={styles.insert_btn_box}>
                        <button onClick={onClickBtn}>등록하기</button>
                    </div>
                </div>
            </div>
        </div>
    )
}